import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Software Developer Intern",
    company: "Essentia.dev, Noida",
    type: "Internship",
    period: "Jan 2026 – May 2026",
    points: [
      "Completed a five-month internship focused on full-stack web development.",
      "Developed responsive web interfaces using HTML, CSS, JavaScript, and React.",
      "Worked on backend features using Node.js and Express.js.",
      "Integrated APIs and handled data flow between frontend and backend.",
      "Collaborated with mentors and fellow interns to implement project requirements.",
      "Improved application usability, responsiveness, and overall performance.",
    ],
  },
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="text-gradient">Work Experience</span>
          </h2>
          <p className="section-subtitle">Practical experience through projects and internships.</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative md:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center hidden md:flex">
                  <Briefcase className="w-4 h-4 text-primary" />
                </div>

                <div className="card-elevated">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                      {exp.type}
                    </span>
                  </div>
                  
                  <p className="text-primary font-medium mb-1">{exp.company}</p>
                  <p className="text-muted-foreground text-sm mb-4">{exp.period}</p>
                  
                  <ul className="space-y-2">
                    {exp.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
