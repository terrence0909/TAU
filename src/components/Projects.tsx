import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/AB-Homepage.png";
import project2 from "@/assets/NBA_headpic.jpg";
import project3 from "@/assets/project3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "ArtBurst - Real-Time Auction Platform",
      description: "Full-stack serverless application with real-time bidding. Built with AWS Lambda, WebSocket API, and DynamoDB. Reduced operational costs by 40% compared to traditional hosting.",
      image: project1,
      technologies: ["AWS Lambda", "API Gateway", "DynamoDB", "WebSocket", "Terraform"],
      github: "https://github.com/terrence0909/Art-Burst",
      live: "https://terrence0909.github.io/art-burst",
      metrics: "40% cost reduction • 99.9% uptime • <200ms latency"
    },
    {
      title: "NBA Data Analytics Platform",
      description: "Scalable data lake architecture processing 10GB+ of NBA statistics. Implemented AWS Glue ETL jobs and Athena queries for real-time analytics and insights.",
      image: project2,
      technologies: ["AWS S3", "AWS Glue", "Athena", "Python", "Data Lake"],
      github: "https://github.com/terrence0909/nba-data-lake",
      live: "#",
      metrics: "65% faster data processing • 10GB+ data handled"
    },
    {
      title: "Construction Management System",
      description: "Cloud-native application for construction project tracking. Features auto-scaling, automated backups, and comprehensive monitoring with 99.9% availability.",
      image: project3,
      technologies: ["EC2", "RDS", "S3", "Terraform", "CloudWatch"],
      github: "https://github.com/terrence0909/construction-mgmt",
      live: "#",
      metrics: "99.9% availability • 40% operational overhead reduction"
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-white mb-4 text-center tracking-tight">
          Featured Projects
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto text-lg font-light">
          Real-world cloud solutions with measurable impact and results
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-gray-600 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-white text-xl font-medium mb-3 leading-tight">
                  {project.title}
                </h3>
                
                {/* Project Metrics */}
                <div className="mb-3">
                  <p className="text-green-400 text-xs font-medium">
                    {project.metrics}
                  </p>
                </div>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-3 py-1 rounded-full bg-gray-700 text-gray-300 border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4 pt-4 border-t border-gray-700">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    {project.live === "#" ? "Coming Soon" : "Live Demo"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Context */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            All projects feature infrastructure as code, automated deployment, and production-ready architecture
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;