import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      window.history.pushState(null, "", `#${sectionId}`);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark Gray Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      
      {/* Very subtle texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:6rem_6rem]" />

      <div className="container mx-auto px-4 sm:px-6 z-10">
        <div className="text-center">
          {/* Name */}
          <h1 className={`text-5xl sm:text-6xl md:text-7xl font-light text-white mb-2 sm:mb-4 tracking-tight transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            Tshepo Tau
          </h1>
          
          {/* Title */}
          <div className={`mb-4 sm:mb-6 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 font-medium">
              Cloud & DevOps Engineer
            </p>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              AWS Certified Solutions Architect
            </p>
          </div>

          {/* Description */}
          <p className={`text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8 font-light transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            Building scalable, secure cloud infrastructure with modern DevOps practices. 
            Specializing in AWS, infrastructure as code, and automated deployment pipelines.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            <button
              onClick={() => scrollToSection('projects')}
              className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-gray-900 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200 border border-white shadow-sm hover:shadow-md text-sm sm:text-base"
              aria-label="View projects section"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 border border-gray-600 text-gray-200 rounded-md font-medium hover:border-gray-500 hover:bg-gray-700/50 transition-colors duration-200 shadow-sm hover:shadow-md text-sm sm:text-base"
              aria-label="Contact me"
            >
              Contact Me
            </button>
          </div>

          {/* Trust Indicators */}
          <div className={`mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 text-xs text-gray-400 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}>
            <span>📍 Johannesburg, South Africa</span>
            <span>✅ Available for opportunities</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 group"
        aria-label="Scroll to about section"
      >
        <ArrowDown 
          className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300 animate-bounce" 
          size={20} 
        />
      </button>
    </section>
  );
};

export default Hero;