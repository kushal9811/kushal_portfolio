import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "HTML/CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Redux", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },

  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "MySQL", category: "backend" },
  { name: "FireStore", category: "backend" },
  { name: "Supabase", category: "backend" },

  { name: "TensorFlow", category: "Machine Learning" },
  { name: "Keras", category: "Machine Learning" },
  { name: "Scikit-Learn", category: "Machine Learning" },

  { name: "Git/GitHub", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "Redis", category: "tools" },
  { name: "Render", category: "tools" },
  { name: "Vercel", category: "tools" },
  { name: "Postman", category: "tools" },
  { name: "VS Code", category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools", "Machine Learning"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary/90"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-card p-4 rounded-lg shadow-xs flex items-center justify-center cursor-pointer hover:bg-secondary/50 transition-colors"
            >
              <span className="text-muted-foreground font-medium">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};