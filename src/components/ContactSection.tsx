import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full" />
          
          <h2 className="section-title text-center">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-12">
            I'm open to discussing new projects, ideas, or opportunities. Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          <div className="card-elevated text-center">
            {/* Email */}
            <a
              href="mailto:priyanshiibora@gmail.com"
              className="flex items-center justify-center gap-3 text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <Mail className="w-5 h-5 text-primary" />
              <span>priyanshiibora@gmail.com</span>
            </a>

            {/* Social Icons */}
            <div className="flex justify-center gap-4 mb-6">
              <a
                href="https://github.com/priyanshibora"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/priyanshi-bora-"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:priyanshiibora@gmail.com"
                className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>

            {/* CTA Button */}
            <a
              href="mailto:priyanshiibora@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all duration-300 glow-accent"
            >
              <Mail className="w-5 h-5" />
              <span>Say Hello</span>
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 pt-8 border-t border-border"
        >
          <p className="text-muted-foreground text-sm">
            Designed & Built by{" "}
            <span className="text-primary font-medium">Priyanshi Bora</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
