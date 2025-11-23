import { Cloud, Code2, Database, Shield } from "lucide-react";
import { useState, useEffect } from "react";

const SKILLS = [
  {
    id: "cloud",
    icon: <Cloud className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Cloud Architecture",
    description: "Designing scalable AWS infrastructure with Terraform, reducing costs by 25% through optimized resource allocation",
  },
  {
    id: "devops",
    icon: <Code2 className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "DevOps & Automation",
    description: "Implementing CI/CD pipelines with GitHub Actions, cutting deployment time by 70%",
  },
  {
    id: "data",
    icon: <Database className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Data & Storage",
    description: "Managing DynamoDB, RDS, and S3 with focus on performance and cost optimization",
  },
  {
    id: "security",
    icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Security & Compliance",
    description: "Implementing AWS security best practices, IAM policies, and secure authentication",
  },
];

const SkillCard = ({ skill, index, isVisible }: { skill: typeof SKILLS[0]; index: number; isVisible: boolean }) => (
  <div
    className={`bg-gray-800/50 border border-gray-700 p-3 sm:p-4 md:p-6 rounded-lg hover:border-gray-600 hover:bg-gray-800/80 transition-all duration-300 group transform ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
    }`}
    style={{
      transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
    }}
  >
    <div className="text-gray-400 group-hover:text-white mb-2 sm:mb-3 md:mb-4 transition-colors duration-300 transform group-hover:scale-110">
      {skill.icon}
    </div>
    <h3 className="text-white text-sm sm:text-base md:text-lg font-medium mb-1.5 sm:mb-2 md:mb-3">{skill.title}</h3>
    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{skill.description}</p>
  </div>
);

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-900">
      <div className="container mx-auto">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-light text-white mb-2 sm:mb-4 text-center tracking-tight transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          Expertise & Skills
        </h2>
        
        <div className={`max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 text-center transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed font-light">
            AWS Certified Solutions Architect with expertise in building scalable cloud infrastructure 
            and automating deployment processes. I specialize in serverless architectures, infrastructure 
            as code, and implementing DevOps practices that improve efficiency and reduce operational overhead.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 w-full mx-auto px-0">
          {SKILLS.map((skill, index) => (
            <SkillCard key={skill.id} skill={skill} index={index} isVisible={isVisible} />
          ))}
        </div>

        <div className={`mt-8 sm:mt-12 text-center transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          <p className="text-gray-500 text-xs sm:text-sm">
            Currently open to new opportunities in cloud engineering and DevOps roles
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;