import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

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

			// Update active section based on scroll position
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
		<nav
			className={cn(
				"fixed w-full z-40 transition-all duration-300",
				isScrolled
					? "py-6 bg-background/80 backdrop-blur-md shadow-lg"
					: "py-8"
			)}
		>
			<div className="container flex items-center justify-between">
				<a
					className="text-xl font-bold text-primary flex items-center"
					href="#hero"
				>
					<span className="relative z-10">
						<span className="text-glow text-foreground"> Hari's </span>{" "}
						Portfolio
					</span>
				</a>

				{/* desktop nav - centered */}
				<div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
					{navItems.map((item, key) => (
						<a
							key={key}
							href={item.href}
							onClick={() => setActiveLink(item.href)}
							className={cn(
								"font-bold text-foreground/80 hover:text-primary transition-colors duration-300 relative",
								activeLink === item.href &&
									"text-primary after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full"
							)}
						>
							{item.name}
						</a>
					))}
				</div>

				{/* mobile nav */}

				<button
					onClick={() => setIsMenuOpen((prev) => !prev)}
					className="md:hidden p-2 text-foreground z-50"
					aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
				>
					{isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
				</button>

				<div
					className={cn(
						"fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
						"transition-all duration-300 md:hidden",
						isMenuOpen
							? "opacity-100 pointer-events-auto"
							: "opacity-0 pointer-events-none"
					)}
				>
					<div className="flex flex-col space-y-8 text-xl">
						{navItems.map((item, key) => (
							<a
								key={key}
								href={item.href}
								className="text-foreground/80 hover:text-primary transition-colors duration-300"
								onClick={() => setIsMenuOpen(false)}
							>
								{item.name}
							</a>
						))}
					</div>
				</div>
			</div>
		</nav>
	);
};