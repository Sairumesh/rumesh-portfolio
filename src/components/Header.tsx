import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Articles", path: "/articles" },
  { name: "Coding Profiles", path: "/coding-profiles" },
  { name: "Contact", path: "/contact" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <motion.div
              className="text-2xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Portfolio
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path}>
                  <motion.span
                    className={`relative text-sm font-medium transition-colors hover:text-primary ${
                      location.pathname === link.path ? "text-primary" : "text-foreground"
                    }`}
                    whileHover={{ y: -2 }}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <motion.div
                        layoutId="underline"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      />
                    )}
                  </motion.span>
                </Link>
              ))}
              <Link to="/resume">
                <Button variant="default" size="sm" className="glow">
                  Resume
                </Button>
              </Link>
            </div>
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground md:hidden"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 space-y-4"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                >
                  <motion.div
                    className={`block py-2 text-sm font-medium ${
                      location.pathname === link.path ? "text-primary" : "text-foreground"
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                  </motion.div>
                </Link>
              ))}
              <Link to="/resume" onClick={() => setIsOpen(false)}>
                <Button variant="default" size="sm" className="w-full">
                  Resume
                </Button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
