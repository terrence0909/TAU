import { Cloud, Code2, Database, Shield } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Architecture",
      description: "Designing scalable AWS infrastructure with Terraform, reducing costs by 25% through optimized resource allocation",
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "DevOps & Automation",
      description: "Implementing CI/CD pipelines with GitHub Actions, cutting deployment time by 70%",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data & Storage",
      description: "Managing DynamoDB, RDS, and S3 with focus on performance and cost optimization",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Compliance",
      description: "Implementing AWS security best practices, IAM policies, and secure authentication",
    },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-white mb-4 text-center tracking-tight">
          Expertise & Skills
        </h2>
        
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <p className="text-gray-300 text-lg leading-relaxed font-light">
            AWS Certified Solutions Architect with expertise in building scalable cloud infrastructure 
            and automating deployment processes. I specialize in serverless architectures, infrastructure 
            as code, and implementing DevOps practices that improve efficiency and reduce operational overhead.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800/50 border border-gray-700 p-6 rounded-lg hover:border-gray-600 transition-all duration-300 group"
            >
              <div className="text-gray-400 group-hover:text-white mb-4 transition-colors duration-300">
                {skill.icon}
              </div>
              <h3 className="text-white text-lg font-medium mb-3">{skill.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>

        {/* Additional context */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Currently open to new opportunities in cloud engineering and DevOps roles
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;