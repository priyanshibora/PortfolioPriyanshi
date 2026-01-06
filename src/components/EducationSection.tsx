import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "B.Tech in Information Technology",
    institution: "Banasthali Vidyapith",
    period: "2022 – 2026",
  },
  {
    degree: "Class 12 (PCM, CBSE)",
    institution: "Jaycees Public School",
    period: "2021 – 2022",
  },
  {
    degree: "Class 10 (CBSE)",
    institution: "Jaycees Public School",
    period: "2019 – 2020",
  },
];

export function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="section-subtitle">My academic journey</p>
        </motion.div>

        <div className="space-y-4">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-elevated flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {edu.degree}
                </h3>
                <p className="text-muted-foreground">{edu.institution}</p>
                <p className="text-primary text-sm font-medium">{edu.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
