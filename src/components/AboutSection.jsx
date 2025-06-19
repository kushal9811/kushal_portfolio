import { Briefcase, Code, Award } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full-Stack Developer & AI Enthusiast
            </h3>

            <p className="text-muted-foreground">
              I am a B.Tech in Computer Science Engineering(AI) student at Netaji Subhas
              University of Technology with a 8.88 GPA. I build scalable web
              applications using MERN, Next.js, and modern DevOps tools.
            </p>

            <p className="text-muted-foreground">
              Passionate about machine learning and deep learning, I've
              developed ml models for real world problems and deployed
              models using Docker and Render. Continuously exploring new
              technologies to deliver impactful solutions.
            </p>

            <div className="flex justify-center pt-4">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">MERN & Next.js</h4>
                  <p className="text-muted-foreground">
                    Building responsive full-stack applications with React,
                    Node.js, Express, MongoDB, and Next.js.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Machine Learning</h4>
                  <p className="text-muted-foreground">
                    Developing and deploying ML models using TensorFlow,
                    Keras, and Python for real-world applications.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Hackathon Winner</h4>
                  <p className="text-muted-foreground">
                    Winner of EPOCH IIITD 2024 and contributor to Smart India
                    Hackathon AI-based traffic management system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
);
};
