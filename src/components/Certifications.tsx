import { CheckCircle, ExternalLink, X } from "lucide-react";
import { FaAws } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import FNBCertificate from "../assets/FNB_Cert.pdf";
import ALXCertificate from "../assets/ALX_Cert.png";

interface Certification {
  id: string;
  title: string;
  org: string;
  year: string;
  icon: React.ReactNode;
  link: string;
  level: "Associate" | "Foundational" | "Program";
  category: "cloud" | "devops" | "program";
  description: string;
  skills: string[];
  difficulty: string;
  certificate?: string;
}

interface Filter {
  id: string;
  label: string;
}

const BADGE_COLORS = {
  Associate: "bg-slate-700/40 text-slate-300 border border-slate-600",
  Foundational: "bg-slate-700/30 text-slate-400 border border-slate-600",
  Program: "bg-slate-700/35 text-slate-300 border border-slate-600",
} as const;

const getBadgeColor = (level: string): string => {
  return BADGE_COLORS[level as keyof typeof BADGE_COLORS] || BADGE_COLORS.Associate;
};

const CERTIFICATIONS: Certification[] = [
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

const FILTERS: Filter[] = [
  { id: "all", label: "All Certifications" },
  { id: "cloud", label: "Cloud" },
  { id: "devops", label: "DevOps" },
  { id: "program", label: "Programs" },
];

const CertificationCard = ({ 
  cert, 
  onOpenModal, 
  index, 
  isVisible 
}: { 
  cert: Certification;
  onOpenModal: (cert: Certification) => void;
  index: number;
  isVisible: boolean;
}) => (
  <button
    onClick={() => onOpenModal(cert)}
    className={`bg-gray-700/40 border border-gray-600 rounded-lg p-4 sm:p-6 transition-all duration-300 hover:border-gray-500 hover:bg-gray-700/60 text-left group cursor-pointer transform ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
    }`}
    style={{ transitionDelay: isVisible ? `${index * 50}ms` : "0ms" }}
    aria-label={`View details for ${cert.title}`}
  >
    <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
      <div className="p-2 sm:p-3 bg-gray-600/40 rounded-lg border border-gray-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
        {cert.icon}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-white text-sm sm:text-base font-medium leading-tight mb-0.5 sm:mb-1 group-hover:text-slate-100 transition-colors line-clamp-2">
          {cert.title}
        </h3>
        <p className="text-gray-400 text-xs sm:text-sm">{cert.org}</p>
      </div>
    </div>

    <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
      <span className={`text-xs px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border ${getBadgeColor(cert.level)}`}>
        {cert.level}
      </span>
      <span className="text-gray-500 text-xs">{cert.year}</span>
    </div>

    <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-600/50 flex items-center justify-between">
      <div className="flex items-center gap-1.5 sm:gap-2">
        <CheckCircle className="w-4 h-4 text-slate-500 flex-shrink-0" />
        <span className="text-slate-400 text-xs">Verified</span>
      </div>
      <span className="text-slate-500 text-xs group-hover:text-slate-400 transition-colors">
        View details →
      </span>
    </div>
  </button>
);

const CertificationModal = ({ 
  cert, 
  isOpen, 
  onClose 
}: { 
  cert: Certification | null;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";
      
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };

      document.addEventListener("keydown", handleEscape);
      return () => {
        document.removeEventListener("keydown", handleEscape);
        document.body.style.overflow = "";
        previousActiveElement.current?.focus();
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen || !cert) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
        onClick={onClose}
        role="presentation"
      />

      <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4 pointer-events-none">
        <div
          ref={modalRef}
          className="bg-gray-800 border border-gray-600 rounded-lg w-full md:w-96 max-h-[90vh] overflow-y-auto pointer-events-auto animate-in slide-in-from-bottom md:slide-in-from-center duration-300"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Modal Header */}
          <div className="sticky top-0 bg-gray-800 border-b border-gray-600 p-4 sm:p-6 flex items-start justify-between gap-3 sm:gap-4">
            <div className="flex-1 min-w-0">
              <h2 id="modal-title" className="text-white text-base sm:text-lg font-medium leading-tight line-clamp-2">{cert.title}</h2>
              <p className="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2">{cert.org}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
              aria-label="Close certification details"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
            {/* Badge and Year */}
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              <span className={`text-xs px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border ${getBadgeColor(cert.level)}`}>
                {cert.level}
              </span>
              <span className="text-gray-500 text-xs sm:text-sm">{cert.year}</span>
              <div className="flex items-center gap-1.5 sm:gap-2 ml-auto">
                <CheckCircle className="w-4 h-4 text-slate-500 flex-shrink-0" />
                <span className="text-slate-400 text-xs">Verified</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{cert.description}</p>
            </div>

            {/* Skills */}
            <div>
              <p className="text-gray-500 text-xs font-semibold mb-2 sm:mb-3 uppercase tracking-wide">
                Skills Demonstrated
              </p>
              <ul className="flex flex-wrap gap-1.5 sm:gap-2" role="list">
                {cert.skills.map((skill) => (
                  <li key={skill}>
                    <span className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs bg-gray-700/50 text-gray-300 rounded border border-gray-600 inline-block">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certificate */}
            {cert.certificate && (
              <div>
                <p className="text-gray-500 text-xs font-semibold mb-2 sm:mb-3 uppercase tracking-wide">
                  Certificate
                </p>
                {cert.certificate.endsWith('.pdf') ? (
                  <a
                    href={cert.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-700/50 text-slate-300 hover:text-white hover:bg-gray-700 border border-gray-600 rounded transition-all duration-200 text-xs sm:text-sm"
                    aria-label={`Download ${cert.title} PDF certificate`}
                  >
                    <span>View PDF</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <a
                    href={cert.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                    aria-label={`View ${cert.title} certificate image`}
                  >
                    <img
                      src={cert.certificate}
                      alt={`${cert.title} Certificate`}
                      className="w-full max-h-48 sm:max-h-64 object-cover rounded border border-gray-600 group-hover:border-gray-500 transition-colors duration-200"
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
                className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-300 hover:text-white transition-colors duration-200 pt-2"
                aria-label={`Verify ${cert.title} on Credly`}
              >
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
                <span>Verify on Credly</span>
                <ExternalLink className="w-3 h-3 flex-shrink-0" />
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
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredCerts = useMemo(
    () => CERTIFICATIONS.filter((cert) => activeFilter === "all" || cert.category === activeFilter),
    [activeFilter]
  );

  const handleFilterChange = useCallback((filterId: string) => {
    setActiveFilter(filterId);
    setSelectedCert(null);
  }, []);

  return (
    <section id="certifications" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-800">
      <div className="container mx-auto">
        <div className="mb-8 sm:mb-12">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-light text-white mb-2 sm:mb-4 text-center tracking-tight transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            Certifications & Credentials
          </h2>
          <p className={`text-center text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto text-xs sm:text-base md:text-lg font-light transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            Industry-recognized certifications validating expertise in cloud architecture and modern DevOps practices
          </p>

          {/* Filter Buttons */}
          <div className={`flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`} role="group" aria-label="Filter certifications">
            {FILTERS.map((filter) => (
              <button
                key={filter.id}
                onClick={() => handleFilterChange(filter.id)}
                aria-pressed={activeFilter === filter.id}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-300 ${
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
          <div className={`text-center transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
            <span className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 text-xs text-gray-400 bg-gray-700/30 rounded-full border border-gray-600">
              {filteredCerts.length} of {CERTIFICATIONS.length} certifications
            </span>
          </div>
        </div>

        {/* Certifications Grid */}
        {filteredCerts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 w-full mx-auto px-0">
            {filteredCerts.map((cert, index) => (
              <CertificationCard 
                key={cert.id} 
                cert={cert} 
                onOpenModal={setSelectedCert}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-8 sm:py-12">
            <p className="text-gray-400 text-sm">No certifications found in this category.</p>
          </div>
        )}

        {/* Modal */}
        <CertificationModal cert={selectedCert} isOpen={!!selectedCert} onClose={() => setSelectedCert(null)} />

        {/* Footer Message */}
        <div className={`mt-8 sm:mt-12 text-center transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          <p className="text-gray-500 text-xs sm:text-sm">
            Continuously building expertise in cloud infrastructure and modern development practices
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;