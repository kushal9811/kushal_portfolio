import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "RentRite - Smart Home Rental Platform",
    description:
      "A MERN-stack rental app for booking rentals and hosting properties with secure auth, image uploads, and dashboard features.",
    image: "/projects/rentrite.png",
    tags: ["React", "Redux", "Express", "MongoDB"],
    demoUrl: "https://home-rental-app-kushals-projects-26a57d55.vercel.app/",
    githubUrl: "https://github.com/kushal9811/Home-Rental-App",
  },
  {
    id: 2,
    title: "Finstagram - AI-Powered Social Media Platform",
    description:
      "Responsive full-stack social app with Next.js, Firestore, Supabase, Tailwind, and Google OAuth, featuring real-time posting and BiLSTM-based moderation.",
    image: "/projects/finstagram.png",
    tags: ["Next.js", "Supabase", "Tailwind", "Firebase"],
    demoUrl: "https://finstagram-kushal-main.vercel.app/",
    githubUrl: "https://github.com/kushal9811/finstagram-kushal-main",
  },
  {
    id: 3,
    title: "Toxic Comment Classifier API",
    description:
      "BiLSTM model (80.6% accuracy) containerized with FastAPI and Docker, deployed with CI/CD for real-time toxic comment detection.",
    image: "/projects/toxicity.png",
    tags: ["TensorFlow", "FastAPI", "Docker", "CI/CD"],
    demoUrl: "https://toxicity-api-kushal.onrender.com/docs",
    githubUrl: "https://github.com/kushal9811/fintagram_toxicity_api",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Some of my key projects showcasing full-stack development and AI integration.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 flex items-center justify-center bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-h-full max-w-full object-contain transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/kushal9811"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};