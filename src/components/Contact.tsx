import { Mail, Linkedin, Github, MapPin, Phone, Check, Copy } from "lucide-react";
import { useState, useCallback, useEffect } from "react";

interface ContactInfo {
  id: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string | null;
  copyable: boolean;
  color: string;
}

const CONTACT_INFO: ContactInfo[] = [
  {
    id: "email",
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "tauterrence09@gmail.com",
    href: "mailto:tauterrence09@gmail.com",
    copyable: true,
    color: "bg-blue-500/20 text-blue-400",
  },
  {
    id: "phone",
    icon: <Phone className="w-5 h-5" />,
    label: "Phone",
    value: "+27 76 767 2663",
    href: "tel:+27767672663",
    copyable: true,
    color: "bg-emerald-500/20 text-emerald-400",
  },
  {
    id: "linkedin",
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn",
    value: "linkedin.com/in/tshepo-tau",
    href: "https://linkedin.com/in/tshepo-tau-8ab6b4b4",
    copyable: false,
    color: "bg-slate-500/20 text-slate-400",
  },
  {
    id: "github",
    icon: <Github className="w-5 h-5" />,
    label: "GitHub",
    value: "github.com/terrence0909",
    href: "https://github.com/terrence0909",
    copyable: false,
    color: "bg-slate-500/20 text-slate-400",
  },
  {
    id: "location",
    icon: <MapPin className="w-5 h-5" />,
    label: "Location",
    value: "Johannesburg, South Africa",
    href: null,
    copyable: false,
    color: "bg-slate-500/20 text-slate-400",
  },
];

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "sending" | "success" | "error";

const ContactCard = ({ 
  contact, 
  index, 
  isCopied, 
  onCopy, 
  isVisible 
}: { 
  contact: ContactInfo;
  index: number;
  isCopied: boolean;
  onCopy: () => void;
  isVisible: boolean;
}) => {
  const baseClass = `transition-all duration-300 transform ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
  }`;

  const cardClass = `bg-gray-800 border border-gray-700 p-4 rounded-lg transition-all duration-300`;
  const iconClass = `p-2 rounded-lg border border-gray-600 ${contact.color} transition-colors`;

  if (contact.copyable && contact.href) {
    return (
      <button
        onClick={onCopy}
        className={`${baseClass} w-full text-left ${cardClass} hover:border-gray-600 group`}
        style={{ transitionDelay: isVisible ? `${index * 50}ms` : "0ms" }}
        aria-label={`Copy ${contact.label}`}
      >
        <div className="flex items-start gap-3">
          <div className={`${iconClass} group-hover:border-gray-500`}>
            {contact.icon}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">
              {contact.label}
            </p>
            <p className="text-sm text-gray-300 group-hover:text-white transition-colors break-all">
              {contact.value}
            </p>
          </div>
          <div className="flex-shrink-0 ml-2">
            {isCopied ? (
              <Check className="w-4 h-4 text-emerald-400" />
            ) : (
              <Copy className="w-4 h-4 text-gray-500 group-hover:text-gray-300 opacity-0 group-hover:opacity-100 transition-all" />
            )}
          </div>
        </div>
      </button>
    );
  }

  if (contact.href) {
    return (
      <a
        href={contact.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClass} block ${cardClass} hover:border-gray-600 group`}
        style={{ transitionDelay: isVisible ? `${index * 50}ms` : "0ms" }}
        aria-label={`Visit ${contact.label}`}
      >
        <div className="flex items-start gap-3">
          <div className={`${iconClass} group-hover:border-gray-500`}>
            {contact.icon}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">
              {contact.label}
            </p>
            <p className="text-sm text-gray-300 group-hover:text-white transition-colors break-all">
              {contact.value}
            </p>
          </div>
        </div>
      </a>
    );
  }

  return (
    <div
      className={`${baseClass} ${cardClass}`}
      style={{ transitionDelay: isVisible ? `${index * 50}ms` : "0ms" }}
    >
      <div className="flex items-start gap-3">
        <div className={iconClass}>
          {contact.icon}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">
            {contact.label}
          </p>
          <p className="text-sm text-gray-300 break-all">
            {contact.value}
          </p>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCopy = useCallback((text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    const timer = setTimeout(() => setCopiedId(null), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formStatus === "sending") return;
    
    setFormStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/mwpzyvob", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setFormStatus("idle"), 3000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 3000);
      }
    } catch {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 3000);
    }
  }, [formData, formStatus]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  return (
    <section id="contact" className="py-20 px-2 sm:px-6 bg-gray-900">
      <div className="container mx-auto">
        <h2 className={`text-3xl md:text-4xl font-light text-white mb-4 text-center tracking-tight transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          Get In Touch
        </h2>
        <p className={`text-center text-gray-400 mb-12 max-w-2xl mx-auto text-lg font-light transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          Open to new opportunities and collaborations in cloud engineering
        </p>

        <div className="w-full max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-4">
              <h3 className={`text-white font-medium mb-6 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}>Contact Details</h3>
              {CONTACT_INFO.map((contact, index) => (
                <ContactCard
                  key={contact.id}
                  contact={contact}
                  index={index}
                  isCopied={copiedId === contact.id}
                  onCopy={() => handleCopy(contact.value, contact.id)}
                  isVisible={isVisible}
                />
              ))}

              {/* Availability Status */}
              <div className={`pt-4 border-t border-gray-700 mt-8 transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-400">Available for opportunities</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Response time: Within 24 hours
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`lg:col-span-2 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
              <form
                onSubmit={handleSubmit}
                className="bg-gray-800 border border-gray-700 p-8 rounded-lg"
                noValidate
              >
                <h3 className="text-white font-medium mb-6">Send a Message</h3>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-slate-500 transition-colors duration-200"
                      placeholder="Your name"
                      aria-label="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-slate-500 transition-colors duration-200"
                      placeholder="your@email.com"
                      aria-label="Your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-2.5 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-slate-500 transition-colors duration-200 resize-none"
                      placeholder="Tell me about your project or opportunity..."
                      aria-label="Your message"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "sending"}
                    aria-live="polite"
                    className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                      formStatus === "success"
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                        : formStatus === "error"
                        ? "bg-red-500/20 text-red-400 border border-red-500/30"
                        : "bg-slate-700 text-white border border-slate-600 hover:border-slate-500 hover:bg-slate-700/80 disabled:opacity-50 disabled:cursor-not-allowed"
                    }`}
                  >
                    {formStatus === "sending"
                      ? "Sending..."
                      : formStatus === "success"
                      ? "Message sent!"
                      : formStatus === "error"
                      ? "Error sending message"
                      : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;