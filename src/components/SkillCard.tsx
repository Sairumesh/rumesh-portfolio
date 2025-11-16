import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface SkillCardProps {
  name: string;
  Icon: LucideIcon;
  level: number;
  index: number;
}

export const SkillCard = ({ name, Icon, level, index }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.05, rotateY: 10 }}
      style={{ perspective: 1000 }}
    >
      <Card className="p-6 bg-card border-border hover:border-primary transition-all group text-center">
        <div className="flex flex-col items-center gap-3">
          <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Icon className="w-8 h-8 text-primary" />
          </div>
          
          <h3 className="font-semibold text-foreground">{name}</h3>
          
          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-primary"
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 + 0.2, duration: 0.8 }}
            />
          </div>
          
          <span className="text-sm text-muted-foreground">{level}%</span>
        </div>
      </Card>
    </motion.div>
  );
};
