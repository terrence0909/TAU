import { Award, CheckCircle, ExternalLink } from "lucide-react";
import { FaAws } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect – Associate",
      org: "Amazon Web Services",
      year: "2024",
      icon: <FaAws className="text-orange-500 h-6 w-6" />,
      link: "https://www.credly.com/badges/ab6c2071-66c2-4c7c-ac74-df0865e8e549/public_url",
      level: "Associate",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      org: "Amazon Web Services",
      year: "2023",
      icon: <FaAws className="text-orange-500 h-6 w-6" />,
      link: "https://www.credly.com/badges/4300c70b-ac54-490a-96c8-5d2853194324/public_url",
      level: "Foundational",
    },
    {
      title: "Kubernetes and Cloud Native Associate (KCNA)",
      org: "The Linux Foundation",
      year: "2025",
      icon: <SiKubernetes className="text-blue-500 h-6 w-6" />,
      link: "https://www.credly.com/badges/35e73ab2-9f07-4967-9f5e-0020520420e0/public_url",
      level: "Associate",
      inProgress: true,
    },
    {
      title: "FNB App Academy Graduate",
      org: "First National Bank",
      year: "2025",
      icon: (
        <div className="w-6 h-6 flex items-center justify-center bg-red-600 rounded-sm">
          <span className="text-white text-xs font-bold">FNB</span>
        </div>
      ),
      link: "#", // Add your actual FNB credential link when available
      level: "Program",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-white mb-4 text-center tracking-tight">
          Certifications & Credentials
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto text-lg font-light">
          Validated expertise through industry-recognized certifications and programs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700/50 border border-gray-600 p-6 rounded-lg hover:border-gray-500 transition-all duration-300 group block hover:bg-gray-700/70"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-600/50 rounded-lg border border-gray-500/30 group-hover:border-gray-400/50 transition-colors duration-300">
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-white text-lg font-medium leading-tight pr-2">
                      {cert.title}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0 mt-1 group-hover:text-blue-400 transition-colors duration-300" />
                  </div>
                  <p className="text-gray-300 text-sm mb-1">{cert.org}</p>
                  
                  <div className="flex items-center gap-3 mt-4 flex-wrap">
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      cert.level === 'Associate' 
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        : cert.level === 'Foundational'
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                    }`}>
                      {cert.level}
                    </span>
                    <span className="text-gray-400 text-sm">{cert.year}</span>
                    {cert.inProgress && (
                      <span className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full border border-yellow-500/30">
                        In Progress
                      </span>
                    )}
                  </div>
                  
                  {/* Verification indicator */}
                  <div className="mt-3 pt-3 border-t border-gray-600 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-green-400 text-xs">Verified</span>
                    </div>
                    <span className="text-blue-400 text-xs group-hover:text-blue-300 transition-colors duration-200">
                      View credential ›
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Additional context */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Continuously expanding expertise through certifications and industry programs
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;