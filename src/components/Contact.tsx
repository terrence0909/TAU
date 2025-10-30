import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "tauterrence09@gmail.com",
      href: "mailto:tauterrence09@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+27 76 767 2663",
      href: "tel:+27767672663",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/tshepo-tau-8ab6b4b4",
      href: "https://linkedin.com/in/tshepo-tau-8ab6b4b4",
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "github.com/terrence0909",
      href: "https://github.com/terrence0909",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Johannesburg, South Africa",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-white mb-4 text-center tracking-tight">
          Get In Touch
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto text-lg font-light">
          Open to new opportunities and collaborations in cloud engineering
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.map((contact, index) => (
              <div
                key={index}
                className="bg-gray-800 border border-gray-700 p-6 rounded-lg hover:border-gray-600 transition-all duration-300 group"
              >
                {contact.href ? (
                  <a
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 group"
                  >
                    <div className="p-3 bg-gray-700 rounded-lg group-hover:bg-gray-600 transition-colors duration-200 border border-gray-600">
                      <div className="text-gray-400 group-hover:text-white">{contact.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-white mb-1">{contact.label}</h3>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gray-700 rounded-lg border border-gray-600">
                      <div className="text-gray-400">{contact.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-white mb-1">{contact.label}</h3>
                      <p className="text-sm text-gray-400">{contact.value}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Context */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Currently available for new opportunities
          </div>
          <p className="text-gray-500 text-sm mt-2">
            Response time: Typically within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;