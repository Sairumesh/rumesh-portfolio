import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  index: number;
}

export const ProjectCard = ({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
  index,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8, rotateX: 5, rotateY: 5 }}
      style={{ perspective: 1000 }}
    >
      <Card className="p-6 h-full bg-card border-border hover:border-primary transition-all card-hover group">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <p className="text-muted-foreground text-sm">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex gap-2 pt-2">
            {githubUrl ? (
              <Button variant="outline" size="sm" asChild className="flex-1">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-1" />
                  Code
                </a>
              </Button>
            ) : (
              <Button variant="outline" size="sm" disabled className="flex-1">
                <Github className="w-4 h-4 mr-1" />
                Code
              </Button>
            )}
            {liveUrl ? (
              <Button variant="default" size="sm" asChild className="flex-1">
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Live Demo
                </a>
              </Button>
            ) : (
              <Button variant="default" size="sm" disabled className="flex-1">
                <ExternalLink className="w-4 h-4 mr-1" />
                Live Demo
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
