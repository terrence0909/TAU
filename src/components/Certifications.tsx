import { Award, CheckCircle, ExternalLink, ChevronDown, Image as ImageIcon, X } from "lucide-react";
import { FaAws } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { useState } from "react";
import FNBCertificate from "../assets/FNB_Cert.pdf";
import ALXCertificate from "../assets/ALX_Cert.png";

const CertificationCard = ({ cert, onOpenModal }) => {
  const getBadgeColor = (level: string) => {
    switch (level) {
      case "Associate":
        return "bg-slate-700/40 text-slate-300 border-slate-600";
      case "Foundational":
        return "bg-slate-700/30 text-slate-400 border-slate-700";
      case "Program":
        return "bg-slate-700/35 text-slate-300 border-slate-650";
      default:
        return "bg-slate-700/40 text-slate-300 border-slate-600";
    }
  };

  return (
    <button
      onClick={() => onOpenModal(cert)}
      className="bg-gray-700/40 border border-gray-600 rounded-lg overflow-hidden transition-all duration-300 hover:border-gray-500 hover:bg-gray-700/50 text-left group cursor-pointer"
    >
      {/* Card Content */}
      <div className="p-6 flex items-start gap-4">
        <div className="p-3 bg-gray-600/40 rounded-lg border border-gray-600 flex-shrink-0 group-hover:border-gray-500 transition-colors duration-200">
          {cert.icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-white text-base font-medium leading-tight mb-1">
            {cert.title}
          </h3>
          <p className="text-gray-400 text-sm mb-3">{cert.org}</p>

          <div className="flex items-center gap-3 flex-wrap">
            <span
              className={`text-xs px-3 py-1 rounded-full border ${getBadgeColor(
                cert.level
              )}`}
            >
              {cert.level}
            </span>
            <span className="text-gray-500 text-xs">{cert.year}</span>
          </div>
        </div>
      </div>

      {/* Hover Reveal Info (Desktop) */}
      <div className="hidden md:block px-6 pb-4 pt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-96 overflow-hidden">
        <div className="border-t border-gray-600 pt-4">
          <p className="text-gray-300 text-xs leading-relaxed mb-3">
            {cert.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {cert.skills.slice(0, 3).map((skill, i) => (
              <span
                key={i}
                className="px-2 py-0.5 text-xs bg-gray-700/50 text-gray-300 rounded border border-gray-600"
              >
                {skill}
              </span>
            ))}
            {cert.skills.length > 3 && (
              <span className="px-2 py-0.5 text-xs text-gray-400">
                +{cert.skills.length - 3} more
              </span>
            )}
          </div>
          <p className="text-slate-400 text-xs mt-3">Click to view full details →</p>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-3 border-t border-gray-600/50 bg-gray-800/30 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-slate-500" />
          <span className="text-slate-400 text-xs">Verified</span>
        </div>
        <span className="text-slate-500 text-xs md:hidden">Tap to expand</span>
      </div>
    </button>
  );
};

const CertificationModal = ({ cert, isOpen, onClose }) => {
  const getBadgeColor = (level: string) => {
    switch (level) {
      case "Associate":
        return "bg-slate-700/40 text-slate-300 border-slate-600";
      case "Foundational":
        return "bg-slate-700/30 text-slate-400 border-slate-700";
      case "Program":
        return "bg-slate-700/35 text-slate-300 border-slate-650";
      default:
        return "bg-slate-700/40 text-slate-300 border-slate-600";
    }
  };

  if (!isOpen || !cert) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4">
        <div
          className="bg-gray-800 border border-gray-600 rounded-lg w-full md:w-96 max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom md:slide-in-from-center duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="sticky top-0 bg-gray-800 border-b border-gray-600 p-6 flex items-start justify-between">
            <div className="flex-1">
              <h2 className="text-white text-lg font-medium leading-tight">
                {cert.title}
              </h2>
              <p className="text-gray-400 text-sm mt-1">{cert.org}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors flex-shrink-0 -mt-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 space-y-6">
            {/* Badge and Year */}
            <div className="flex items-center gap-3 flex-wrap">
              <span
                className={`text-xs px-3 py-1 rounded-full border ${getBadgeColor(
                  cert.level
                )}`}
              >
                {cert.level}
              </span>
              <span className="text-gray-500 text-sm">{cert.year}</span>
              <div className="flex items-center gap-2 ml-auto">
                <CheckCircle className="w-4 h-4 text-slate-500" />
                <span className="text-slate-400 text-xs">Verified</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {cert.description}
              </p>
            </div>

            {/* Skills */}
            <div>
              <p className="text-gray-500 text-xs font-semibold mb-3 uppercase tracking-wide">
                Skills Demonstrated
              </p>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-xs bg-gray-700/50 text-gray-300 rounded border border-gray-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Certificate */}
            {cert.certificate && (
              <div>
                <p className="text-gray-500 text-xs font-semibold mb-3 uppercase tracking-wide">
                  Certificate
                </p>
                {cert.certificate.endsWith('.pdf') ? (
                  <a
                    href={cert.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700/50 text-slate-300 hover:text-white border border-gray-600 hover:border-gray-500 rounded transition-colors duration-200"
                  >
                    <ImageIcon className="w-4 h-4" />
                    <span>View PDF Certificate</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <a
                    href={cert.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img
                      src={cert.certificate}
                      alt={`${cert.title} Certificate`}
                      className="w-full max-h-64 object-cover rounded border border-gray-600 hover:border-gray-500 transition-colors duration-200"
                    />
                  </a>
                )}
              </div>
            )}

            {/* Verify Link */}
            {cert.link !== "#" && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors duration-200"
              >
                <CheckCircle className="w-4 h-4" />
                <span>Verify on Credly</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const Certifications = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      id: "aws-solutions-architect-2024",
      title: "AWS Certified Solutions Architect – Associate",
      org: "Amazon Web Services",
      year: "2024",
      icon: <FaAws className="text-amber-700 h-6 w-6" />,
      link: "https://www.credly.com/badges/ab6c2071-66c2-4c7c-ac74-df0865e8e549/public_url",
      level: "Associate",
      category: "cloud",
      description: "Design and deploy scalable, highly available, and fault-tolerant systems on AWS infrastructure",
      skills: ["EC2", "S3", "VPC", "IAM", "RDS", "Lambda"],
      difficulty: "Professional",
    },
    {
      id: "aws-cloud-practitioner-2023",
      title: "AWS Certified Cloud Practitioner",
      org: "Amazon Web Services",
      year: "2023",
      icon: <FaAws className="text-amber-700 h-6 w-6" />,
      link: "https://www.credly.com/badges/4300c70b-ac54-490a-96c8-5d2853194324/public_url",
      level: "Foundational",
      category: "cloud",
      description: "Foundational understanding of AWS Cloud concepts, services, and terminology. Demonstrates knowledge of AWS services, basic architectural principles, and cloud computing fundamentals.",
      skills: ["AWS Services", "Cloud Basics", "Security", "Architecture", "Compliance"],
      difficulty: "Foundational",
    },
    {
      id: "kcna-2024",
      title: "Kubernetes and Cloud Native Associate (KCNA)",
      org: "The Linux Foundation",
      year: "2024",
      icon: <SiKubernetes className="text-slate-600 h-6 w-6" />,
      link: "https://www.credly.com/badges/35e73ab2-9f07-4967-9f5e-0020520420e0/public_url",
      level: "Associate",
      category: "devops",
      description: "Demonstrate foundational knowledge of cloud-native development, including Kubernetes and containerization",
      skills: ["Kubernetes", "Containers", "Docker", "Cloud Native", "DevOps"],
      difficulty: "Associate",
    },
    {
      id: "fnb-app-academy-2025",
      title: "FNB App Academy Graduate",
      org: "First National Bank",
      year: "2025",
      icon: (
        <div className="w-6 h-6 flex items-center justify-center bg-slate-700 rounded-sm">
          <span className="text-white text-xs font-bold">FNB</span>
        </div>
      ),
      link: "#",
      level: "Program",
      category: "program",
      description: "Intensive program focused on modern app development practices and enterprise software engineering. Hands-on training in full-stack development and industry best practices.",
      skills: ["Full Stack", "Enterprise Development", "Best Practices", "Team Collaboration"],
      difficulty: "Professional",
      certificate: FNBCertificate,
    },
    {
      id: "alx-cloud-computing-2024",
      title: "ALX Cloud Computing Program",
      org: "ALX Africa",
      year: "2024",
      icon: (
        <div className="w-6 h-6 flex items-center justify-center bg-slate-700 rounded-sm">
          <span className="text-white text-xs font-bold">ALX</span>
        </div>
      ),
      link: "#",
      level: "Program",
      category: "program",
      description: "Comprehensive cloud computing curriculum covering cloud architecture, deployment, and management. Focus on practical skills applicable to real-world cloud infrastructure challenges.",
      skills: ["Cloud Architecture", "Infrastructure", "Deployment", "DevOps Practices"],
      difficulty: "Professional",
      certificate: ALXCertificate,
    },
  ];

  const filters = [
    { id: "all", label: "All Certifications" },
    { id: "cloud", label: "Cloud" },
    { id: "devops", label: "DevOps" },
    { id: "program", label: "Programs" },
  ];

  const filteredCerts = certifications.filter(
    (cert) => activeFilter === "all" || cert.category === activeFilter
  );

  return (
    <section id="certifications" className="py-20 px-6 bg-gray-800">
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4 text-center tracking-tight">
            Certifications & Credentials
          </h2>
          <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto text-lg font-light">
            Industry-recognized certifications validating expertise in cloud architecture and modern DevOps practices
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-slate-700 text-white border border-slate-600"
                    : "bg-gray-700/50 text-gray-400 border border-gray-600 hover:border-gray-500 hover:text-gray-300"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Count Badge */}
          <div className="text-center">
            <span className="inline-block px-3 py-1 text-xs text-gray-400 bg-gray-700/30 rounded-full border border-gray-600">
              {filteredCerts.length} of {certifications.length} certifications
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {filteredCerts.map((cert) => (
            <CertificationCard
              key={cert.id}
              cert={cert}
              onOpenModal={setSelectedCert}
            />
          ))}
        </div>

        {/* Modal */}
        <CertificationModal
          cert={selectedCert}
          isOpen={!!selectedCert}
          onClose={() => setSelectedCert(null)}
        />

        {/* Footer Message */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Continuously building expertise in cloud infrastructure and modern development practices
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;