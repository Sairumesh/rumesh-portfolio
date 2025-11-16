import { motion } from "framer-motion";
import { Github, Instagram, Linkedin } from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/sairumesh" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/rumesh-sree-k-g" },
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/sai_rumesh/" },
];

export const SocialLinks = () => {
  return (
    <div className="flex gap-4 items-center">
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={social.name}
          >
            <Icon size={20} />
          </motion.a>
        );
      })}
    </div>
  );
};
