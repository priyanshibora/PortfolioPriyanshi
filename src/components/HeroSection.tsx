import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-developer.png";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Hi all, I'm{" "}
              <span className="text-gradient">Priyanshi</span>{" "}
              <motion.span
                animate={{ rotate: [0, 20, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                className="inline-block"
              >
                👋
              </motion.span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
              An aspiring Software Developer 🚀 having an experience of building Web 
              applications with JavaScript / Reactjs / Nodejs / Express and some other 
              cool libraries and frameworks.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 mb-8">
              <a
                href="https://github.com/priyanshibora"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/priyanshi-bora-"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0077B5] flex items-center justify-center text-white hover:opacity-80 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&to=priyanshiibora@gmail.com"
                className="w-10 h-10 rounded-full bg-[#EA4335] flex items-center justify-center text-white hover:opacity-80 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Contact Me
              </a>
              <a
                href="https://drive.google.com/file/d/19EW9UxP0oCgY3Q7OG2sOwHOd5RUiVGJo/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                See My Resume
              </a>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <img
                src={heroImage}
                alt="Developer illustration"
                className="w-full max-w-md lg:max-w-lg animate-float"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
