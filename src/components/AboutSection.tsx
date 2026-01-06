import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import aboutImage from "@/assets/about-developer.png";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20" ref={ref}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <img
              src={aboutImage}
              alt="Developer at work"
              className="w-full max-w-md lg:max-w-lg"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h2 className="section-title">
              <span className="text-gradient">About Me</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I focus on building practical, end-to-end web applications that solve 
                real problems. My work centers around backend-driven development, clean 
                data flow, and reliable system behavior rather than surface-level features.
              </p>
              
              <p>
                I have hands-on experience with JavaScript, Node.js, and Express, building 
                applications with clean architecture and structured logic. I believe in 
                writing code that's maintainable and serves actual use cases.
              </p>
              
              <p>
                My approach emphasizes clarity and practicality - understanding the problem 
                first, designing a clear solution, and building applications that are 
                reliable and maintainable.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                ⚡ Full-Stack Development
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                ⚡ Backend APIs
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                ⚡ Clean Architecture
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
