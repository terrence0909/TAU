import { Download, FileText, Code2, Award, TrendingUp } from "lucide-react";

const CV = () => {
  const handleDownload = () => {
    // Replace with your actual CV file path
    const cvUrl = "/cv/TAU_CV.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "TAU_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="cv" className="py-20 px-2 sm:px-6 bg-gray-800">
      <div className="container mx-auto">
        <div className="w-full mx-auto px-0">
          <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-6 sm:p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-block p-4 bg-slate-700/40 rounded-full mb-6 border border-slate-600">
                <FileText className="w-12 h-12 text-slate-300" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-light text-white mb-4 tracking-tight">
                Professional Profile
              </h2>
              
              <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
                Self-taught cloud engineer with AWS certifications and proven project experience. 
                Transitioned from construction industry to cloud engineering through dedicated self-study.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <button 
                  onClick={handleDownload}
                  className="px-8 py-3 rounded-md font-medium bg-transparent text-white hover:bg-gray-600/50 transition-colors duration-200 flex items-center gap-3 border border-gray-500 hover:border-gray-400"
                >
                  <Download className="w-5 h-5" />
                  Download CV (PDF)
                </button>
                <div className="text-gray-400 text-sm">
                  Updated: October 2025 • Skills-Based CV
                </div>
              </div>
            </div>

            {/* CV Preview Sections */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 pt-8 border-t border-gray-600">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-600 rounded-full mb-3">
                  <Code2 className="w-6 h-6 text-slate-300" />
                </div>
                <h3 className="text-white font-medium mb-2">Proven Skills</h3>
                <p className="text-gray-400 text-sm">
                  3+ years self-directed learning
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  AWS, DevOps, Full-Stack Development
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-600 rounded-full mb-3">
                  <TrendingUp className="w-6 h-6 text-slate-300" />
                </div>
                <h3 className="text-white font-medium mb-2">Career Journey</h3>
                <p className="text-gray-400 text-sm">
                  Construction to Cloud Engineering
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Successful career transition
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-600 rounded-full mb-3">
                  <Award className="w-6 h-6 text-slate-300" />
                </div>
                <h3 className="text-white font-medium mb-2">Certifications</h3>
                <p className="text-gray-400 text-sm">
                  2 AWS Certifications
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  + Kubernetes (2025)
                </p>
              </div>
            </div>

            {/* What's Included */}
            <div className="mt-8 pt-8 border-t border-gray-600">
              <h3 className="text-white font-medium mb-4 text-center">CV Highlights:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  AWS Solutions Architect - Associate
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  ArtBurst & real project case studies
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  Infrastructure as code expertise
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  Career transition success story
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;