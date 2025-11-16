import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";

interface CodingProfileCardProps {
  platform: string;
  username: string;
  description: string;
  url: string;
  icon: string;
  index: number;
}

export const CodingProfileCard = ({
  platform,
  username,
  description,
  url,
  icon,
  index,
}: CodingProfileCardProps) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05, rotateZ: 2 }}
      className="block"
    >
      <Card className="p-6 bg-card border-border hover:border-primary transition-all group text-center">
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="text-5xl group-hover:scale-110 transition-transform">{icon}</div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {platform}
            </h3>
            <p className="text-primary text-sm mt-1">@{username}</p>
          </div>

          <p className="text-muted-foreground text-sm">{description}</p>

          <div className="flex items-center justify-center gap-2 text-primary text-sm font-medium">
            Visit Profile
            <ExternalLink className="w-4 h-4" />
          </div>
        </div>
      </Card>
    </motion.a>
  );
};
