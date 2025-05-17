import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
	// Languages
	{ name: "Python", icon: "python", category: "languages" },
	{ name: "Java", icon: "java", category: "languages" },
	{ name: "C", icon: "c", category: "languages" },

	// Frontend
	{ name: "HTML", icon: "html", category: "frontend" },
	{ name: "CSS", icon: "css", category: "frontend" },
	{ name: "Bootstrap", icon: "bootstrap", category: "frontend" },
	{ name: "Tailwind", icon: "tailwind", category: "frontend" },
	{ name: "JavaScript", icon: "js", category: "frontend" },
	{ name: "React", icon: "react", category: "frontend" },

	// Backend
	{ name: "Node.js", icon: "nodejs", category: "backend" },
	{ name: "Express", icon: "express", category: "backend" },

	// Database
	{ name: "MongoDB", icon: "mongodb", category: "database" },
	{ name: "SQL", icon: "mysql", category: "database" }, // Using MySQL icon for SQL

	// Tools
	{ name: "Git", icon: "git", category: "tools" },
	{ name: "GitHub", icon: "github", category: "tools" },
	{ name: "VS Code", icon: "vscode", category: "tools" },
	{ name: "Vercel", icon: "vercel", category: "tools" },
];

const categories = [
	"all",
	"languages",
	"frontend",
	"backend",
	"database",
	"tools",
];

export const SkillsSection = () => {
	const [activeCategory, setActiveCategory] = useState("all");

	const filteredSkills = skills.filter(
		(skill) => activeCategory === "all" || skill.category === activeCategory
	);

	return (
		<section id="skills" className="py-24 px-4 bg-secondary/30">
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold text-center heading-underline">
					My{" "}
					<span className="text-primary">Skills</span>
				</h2>

				<div className="flex flex-wrap justify-center gap-4 mb-12">
					{categories.map((category, key) => (
						<button
							key={key}
							onClick={() => setActiveCategory(category)}
							className={cn(
								"px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer font-semibold text-base", // Added font-semibold and text-base
								activeCategory === category
									? "bg-primary text-primary-foreground font-bold" // Added font-bold for active category
									: "bg-secondary/70 text-foreground hover:bg-secondary"
							)}
						>
							{category}
						</button>
					))}
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{filteredSkills.map((skill, key) => (
						<div
							key={key}
							className="group flex flex-col justify-between gap-3 p-4 rounded-2xl transition-shadow shadow-md hover:shadow-violet-500/50 bg-card hover:scale-[1.02]"
						>
							<div className="flex items-center gap-4">
								<div className="bg-gray-200 dark:bg-zinc-700 p-2 rounded-full">
									<img
										src={`https://skillicons.dev/icons?i=${skill.icon}`}
										alt={skill.name}
										className="w-7 h-7 transform transition-transform duration-700 group-hover:rotate-360"
									/>
								</div>
								<div>
									<h3 className="font-semibold text-lg">
										{skill.name}
									</h3>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
