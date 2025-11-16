import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/SocialLinks";
import { Download, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient blurs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 flex items-center justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 max-w-3xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-lg text-primary font-medium mb-2">Hi, I'm</h2>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">Rumesh Sree K G</span>
            </h1>
            <p className="text-2xl md:text-3xl text-foreground font-semibold mb-4">
              Software Engineer & Data Practitioner
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Versatile Software Engineer and Data Practitioner with 2+ years of experience across full-stack development, 
              data engineering, and AI-driven solutions. Passionate about building scalable applications and deploying 
              machine learning systems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link to="/projects">
              <Button size="lg" className="glow group">
                View My Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Link to="/contact">
              <Button size="lg" variant="outline">
                <Mail className="mr-2 w-4 h-4" />
                Contact Me
              </Button>
            </Link>

            <a href="/assets/resume.pdf" download>
              <Button size="lg" variant="secondary">
                <Download className="mr-2 w-4 h-4" />
                Resume
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center"
          >
            <SocialLinks />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
