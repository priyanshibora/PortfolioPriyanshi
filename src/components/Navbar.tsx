import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="signature-text text-foreground">
          <span className="text-muted-foreground">&lt;</span>
          <span className="text-primary">Priyanshi Bora</span>
          <span className="text-muted-foreground"> /&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          
          <button
            onClick={toggleTheme}
            className="w-12 h-6 rounded-full bg-secondary relative transition-colors duration-300 border border-border"
            aria-label="Toggle theme"
          >
            <motion.div
              className="absolute top-0.5 w-5 h-5 rounded-full bg-primary flex items-center justify-center"
              animate={{ left: theme === "dark" ? "calc(100% - 22px)" : "2px" }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              {theme === "dark" ? (
                <Moon className="w-3 h-3 text-primary-foreground" />
              ) : (
                <Sun className="w-3 h-3 text-primary-foreground" />
              )}
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggleTheme}
            className="w-10 h-5 rounded-full bg-secondary relative transition-colors duration-300 border border-border"
            aria-label="Toggle theme"
          >
            <motion.div
              className="absolute top-0.5 w-4 h-4 rounded-full bg-primary flex items-center justify-center"
              animate={{ left: theme === "dark" ? "calc(100% - 18px)" : "2px" }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              {theme === "dark" ? (
                <Moon className="w-2.5 h-2.5 text-primary-foreground" />
              ) : (
                <Sun className="w-2.5 h-2.5 text-primary-foreground" />
              )}
            </motion.div>
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-foreground"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
