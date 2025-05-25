import { cn } from "@/lib/utils";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
	{ name: "Home", href: "#hero" },
	{ name: "About", href: "#about" },
	{ name: "Projects", href: "#projects" },
	{ name: "Skills", href: "#skills" },
	{ name: "Codebase", href: "#codebase" },
	{ name: "Contact", href: "#contact" },
];

export const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeLink, setActiveLink] = useState("#hero");

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);

			const sections = navItems.map((item) => item.href.substring(1));
			const currentSection = sections.find((section) => {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					return rect.top <= 100 && rect.bottom >= 100;
				}
				return false;
			});
			if (currentSection) setActiveLink(`#${currentSection}`);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			{/* Navbar */}
			<nav
				className={cn(
					"fixed w-full z-50 transition-all duration-300 top-0",
					isScrolled
						? "py-6 bg-background/80 backdrop-blur-md shadow-lg"
						: "py-8"
				)}
			>
				<div className="container flex items-center justify-between md:justify-start relative">
					{/* Logo */}
					<a
						className="text-xl font-bold text-primary flex items-center whitespace-nowrap pt-2 md:pt-0"
						href="#hero"
					>
						<span className="relative z-10">
							<span className="text-glow text-foreground ">Hari's</span> Portfolio
						</span>
					</a>

					{/* Mobile - ThemeToggle & Menu Button */}
					<div className="flex items-center md:hidden ml-auto space-x-2">
						<ThemeToggle />
						<button
							onClick={() => setIsMenuOpen((prev) => !prev)}
							className="p-2 text-foreground z-50"
							aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
						>
							{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
						 {/* Moved ThemeToggle after the menu button */}
					</div>

					{/* Desktop Nav */}
					<div className="hidden md:flex items-center justify-between w-full">
						{/* Centered Nav Links */}
						<div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8">
							{navItems.map((item, key) => (
								<a
									key={key}
									href={item.href}
									onClick={() => setActiveLink(item.href)}
									className={cn(
										"font-bold text-foreground/80 hover:text-primary transition-colors duration-300 relative cursor-pointer",
										activeLink === item.href &&
											"text-primary font-extrabold after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full"
									)}
								>
									{item.name}
								</a>
							))}
						</div>

						{/* Theme Toggle Right */}
						<div className="ml-auto py-5">
							<ThemeToggle />
						</div>
					</div>
				</div>
			</nav>

			{/* Full-Page Mobile Menu Overlay */}
			<div
				className={cn(
					"fixed inset-0 z-[9999] bg-black/50 backdrop-blur-lg transition-opacity duration-300 md:hidden",
					isMenuOpen
						? "opacity-100 visible"
						: "opacity-0 invisible pointer-events-none"
				)}
			>
				<div className="flex flex-col justify-between h-full w-full">
					{/* Close Icon Top Right */}
					<div className="flex justify-end items-center pt-6 pr-6">
						<button
							onClick={() => setIsMenuOpen(false)}
							className="p-2 text-foreground"
							aria-label="Close Menu"
						>
							<X size={28} />
						</button>
					</div>

					{/* Centered Nav Links */}
					<div className="flex flex-col items-center justify-center flex-1 space-y-8 text-2xl">
						{navItems.map((item, key) => (
							<a
								key={key}
								href={item.href}
								className="text-white font-bold hover:text-primary transition duration-300 cursor-pointer"
								onClick={() => setIsMenuOpen(false)}
							>
								{item.name}
							</a>
						))}
					</div>

					{/* Social Icons Bottom */}
					<div className="flex items-center justify-center space-x-8 pb-8">
						<a
							href="https://github.com/haribharadwaj3"
							target="_blank"
							rel="noopener noreferrer"
							className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
						>
							<Github className="h-7 w-7 text-primary" />
						</a>
						<a
							href="https://www.linkedin.com/in/haribharadwaj3"
							target="_blank"
							rel="noopener noreferrer"
							className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
						>
							<Linkedin className="h-7 w-7 text-primary" />
						</a>
						<a
							href="mailto:haribharadwaj6@gmail.com"
							className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
						>
							<Mail className="h-7 w-7 text-primary" />
						</a>
					</div>
				</div>
			</div>
		</>
	);
};
