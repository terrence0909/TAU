import { Mail, Linkedin, Github, MapPin, Phone, Check, Copy } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const contactInfo = [
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

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
    } catch (error) {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="py-20 px-2 sm:px-6 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-white mb-4 text-center tracking-tight">
          Get In Touch
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto text-lg font-light">
          Open to new opportunities and collaborations in cloud engineering
        </p>

        <div className="w-full max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-3">
              <h3 className="text-white font-medium mb-6">Contact Details</h3>
              {contactInfo.map((contact) => (
                <div
                  key={contact.id}
                  className={`${
                    contact.href
                      ? "cursor-pointer group"
                      : ""
                  }`}
                >
                  {contact.href && contact.copyable ? (
                    <button
                      onClick={() => handleCopy(contact.value, contact.id)}
                      className="w-full text-left bg-gray-800 border border-gray-700 p-4 rounded-lg hover:border-gray-600 transition-all duration-300 group"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg border border-gray-600 ${contact.color} group-hover:border-gray-500 transition-colors`}>
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
                          {copiedId === contact.id ? (
                            <Check className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <Copy className="w-4 h-4 text-gray-500 group-hover:text-gray-300 opacity-0 group-hover:opacity-100 transition-all" />
                          )}
                        </div>
                      </div>
                    </button>
                  ) : contact.href ? (
                    <a
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-gray-800 border border-gray-700 p-4 rounded-lg hover:border-gray-600 transition-all duration-300 group"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg border border-gray-600 ${contact.color} group-hover:border-gray-500 transition-colors`}>
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
                  ) : (
                    <div className="bg-gray-800 border border-gray-700 p-4 rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg border border-gray-600 ${contact.color}`}>
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
                  )}
                </div>
              ))}

              {/* Availability Status */}
              <div className="pt-4 border-t border-gray-700 mt-6">
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
            <div className="lg:col-span-2">
              <form
                onSubmit={handleSubmit}
                className="bg-gray-800 border border-gray-700 p-8 rounded-lg"
              >
                <h3 className="text-white font-medium mb-6">Send a Message</h3>

                <div className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-2.5 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-slate-500 transition-colors duration-200"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-2.5 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-slate-500 transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={5}
                      className="w-full px-4 py-2.5 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-slate-500 transition-colors duration-200 resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formStatus === "sending"}
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