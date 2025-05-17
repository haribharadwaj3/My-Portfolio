import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
	{
		id: 1,
		title: "The News Hub",
		description:
			"The News Hub is a news aggregator that allows users to segregate news based on newspapers such as CNN, Associated Press (AP), Times of India (TOI), Hindustan Times (HT), BBC, and The New York Times (NYT). It provides a simple interface to select a news source and displays all the latest headlines.",
		image: "/projects/project1.png",
		tags: ["Flaks", "Web Scraping", "BeautifulSoup4"],
		demoUrl: "https://the-news-hub-azure.vercel.app/",
		githubUrl: "https://github.com/haribharadwaj3/The-News-Hub",
	},
	{
		id: 2,
		title: "Investor Self Service",
		description:
			"A front-end web application designed to help users manage their investments efficiently. The application provides an interactive stock graph, portfolio management, quicklist functionality, and notifications for stock trends.",
		image: "/projects/project2.png",
		tags: ["HTML", "CSS", "JavaScript"],
		demoUrl: "https://haribharadwaj3.github.io/Investor-Self-Service/",
		githubUrl: "https://github.com/haribharadwaj3/Investor-Self-Service",
	},
	{
		id: 3,
		title: "PeerPrep",
		description:
			"This project focuses on developing PeerPrep, an online platform designed to help students connect with their peers through study groups. Key features include the ability to create and join public or private study groups, enabling collaborative learning.",
		image: "/projects/project3.png",
		tags: ["HTML/CSS", "JavaScript", "PHP"],
		demoUrl: "https://haribharadwaj3.github.io/PeerPrep/",
		githubUrl: "https://github.com/haribharadwaj3/PeerPrep",
	},
	{
		id: 4,
		title: "Simon Game",
		description:
			"A fun and interactive memory game built using HTML, CSS, and JavaScript. The game challenges players to remember and repeat an increasing sequence of colors.",
		image: "/projects/project4.png",
		tags: ["HTML", "CSS", "JavaScript"],
		demoUrl: "https://haribharadwaj3.github.io/Simon-Game/",
		githubUrl: "https://github.com/haribharadwaj3/Simon-Game",
	},
	{
		id: 5,
		title: "Weather Forecast",
		description:
			"This is a simple Weather Forecast that fetches real-time weather data using the OpenWeatherMap API. Users can search for any city to get current temperature, humidity, wind speed, and weather conditions.",
		image: "/projects/project5.png",
		tags: ["HTML/CSS", "JavaScript", "OpenWeatherMap API"],
		demoUrl: "https://haribharadwaj3.github.io/Weather-Forecast/",
		githubUrl: "https://github.com/haribharadwaj3/Weather-Forecast",
	},
];

export const ProjectsSection = () => {
	return (
		<section id="projects" className="py-24 px-4 relative">
			<div className="container mx-auto max-w-[1400px]">
				<h2 className="text-3xl md:text-4xl font-bold text-center heading-underline">
					My{" "}
					<span className="text-primary">Projects</span>
				</h2>

				<p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
					Here are some of my recent projects. Each project was carefully
					crafted with attention to detail, performance, and user experience.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{projects.map((project, key) => (
						<div
							key={key}
							className="group flex flex-col justify-between gap-3 p-4 rounded-2xl transition-shadow shadow-md hover:shadow-violet-500/50 bg-card hover:scale-[1.02]"
						>
							<div className="space-y-4">
								{/* Image Container */}
								<div className="h-48 overflow-hidden rounded-xl">
									<img
										src={project.image}
										alt={project.title}
										className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
									/>
								</div>

								{/* Title */}
								<h3 className="text-xl font-semibold text-center">
									{project.title}
								</h3>

								{/* Tags */}
								<div className="flex flex-wrap gap-2">
									{project.tags.map((tag, index) => (
										<span
											key={index}
											className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
										>
											{tag}
										</span>
									))}
								</div>

								{/* Description */}
								<p className="text-muted-foreground text-sm text-left">
									{project.description}
								</p>

								{/* Action Buttons */}
								<div className="flex justify-between items-center pt-2">
									<div className="flex space-x-3">
										<a
											href={project.demoUrl}
											target="_blank"
											className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
										>
											<ExternalLink
												size={20}
												className="text-primary"
											/>
										</a>
										<a
											href={project.githubUrl}
											target="_blank"
											className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
										>
											<Github size={20} className="text-primary" />
										</a>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="text-center mt-12">
					<a
						className="cosmic-button w-fit flex items-center mx-auto gap-2"
						target="_blank"
						href="https://github.com/haribharadwaj3"
					>
						Check My Github <ArrowRight size={16} />
					</a>
				</div>
			</div>
		</section>
	);
};