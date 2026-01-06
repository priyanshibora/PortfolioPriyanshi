import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Idea Carnival",
    description: "Participated in Idea Carnival organized by Atal Incubation Center (AIC)",
    link: "https://drive.google.com/file/d/16V67r210f47Ziw9D3vFJ6ZHoLZobDNaJ/view?usp=sharing",
  },
  {
    title: "MERN Stack Certification",
    description: "Completed MERN Stack Development course from Udemy",
    link: "https://drive.google.com/file/d/1f1J-KpqgtnalghpnC5mezV1e8a6gMOdr/view?usp=sharing",
  },
  {
    title: "Frontend Web Development",
    description: "Completed Frontend Web Development course from Udemy",
    link: "https://drive.google.com/file/d/1f1J-KpqgtnalghpnC5mezV1e8a6gMOdr/view?usp=sharing",
  },
];

export function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="text-gradient">Achievements & Certifications</span>{" "}
            <span className="text-2xl">🏆</span>
          </h2>
          <p className="section-subtitle">
            Achievements, certifications, and some cool stuff that I have done!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-elevated group cursor-pointer text-center hover:glow-accent"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {cert.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4">
                {cert.description}
              </p>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium group-hover:opacity-90 transition-opacity">
                <span>Certification</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
