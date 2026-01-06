import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Calendar } from "lucide-react";

const projects = [
  {
    title: "College Event Hub",
    period: "Jan 2025 – May 2025",
    description:
      "A full-stack college event management system with role-based access control for students, admins, and volunteers. Features JWT-based authentication, email notifications for approvals, and structured MySQL database for data storage.",
    features: [
      "Role-based access control system",
      "JWT authentication & authorization",
      "Email notification workflows",
      "Structured data validation",
    ],
    techStack: ["Node.js", "Express", "MySQL", "JWT", "REST APIs"],
    github: "https://github.com/priyanshibora/eventhub",
  },
  {
    title: "Personal Finance Risk Forecaster",
    period: "2024",
    description:
      "A financial risk assessment tool that analyzes income, expenses, and debt patterns using rule-based backend logic. Provides actionable insights without relying on complex ML models — just clear, structured analysis.",
    features: [
      "Rule-based risk assessment",
      "RESTful API architecture",
      "Data modeling & validation",
      "Error handling best practices",
    ],
    techStack: ["JavaScript", "Node.js", "Express", "MongoDB", "HTML", "CSS"],
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">Practical applications I've built from the ground up.</p>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card-elevated border-l-4 border-l-primary"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{project.period}</span>
                  </div>
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">
                  Key Features:
                </h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {project.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-2 text-muted-foreground text-sm"
                    >
                      <span className="text-primary">▸</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm font-medium rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
