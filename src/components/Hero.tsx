import { ArrowDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleHashNavigation = (hash: string) => {
    // Use React Router's navigate with hash
    navigate(`/#${hash}`);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark Gray Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      
      {/* Very subtle texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:6rem_6rem]" />

      <div className="container mx-auto px-6 z-10">
        <div className="text-center">
          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-light text-white mb-4 tracking-tight">
            Tshepo Tau
          </h1>
          
          {/* Title */}
          <div className="mb-6">
            <p className="text-lg md:text-xl text-gray-200 font-medium">
              Cloud & DevOps Engineer
            </p>
            <p className="text-sm text-gray-400 mt-1">
              AWS Certified Solutions Architect
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8 font-light">
            Building scalable, secure cloud infrastructure with modern DevOps practices. 
            Specializing in AWS, infrastructure as code, and automated deployment pipelines.
          </p>

          {/* Clean CTA Buttons - FIXED */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button
              onClick={() => handleHashNavigation('projects')}
              className="px-6 py-3 bg-white text-gray-900 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200 border border-white shadow-sm"
            >
              View Projects
            </button>
            <button
              onClick={() => handleHashNavigation('contact')}
              className="px-6 py-3 border border-gray-600 text-gray-200 rounded-md font-medium hover:border-gray-500 hover:bg-gray-700/50 transition-colors duration-200 shadow-sm"
            >
              Contact Me
            </button>
          </div>

          {/* Minimal Trust Indicators */}
          <div className="mt-12 flex justify-center gap-6 text-xs text-gray-400">
            <span>📍 Johannesburg, South Africa</span>
            <span>✅ Available for opportunities</span>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator - FIXED */}
      <button
        onClick={() => handleHashNavigation('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-10 group"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300" size={20} />
      </button>
    </section>
  );
};

export default Hero;