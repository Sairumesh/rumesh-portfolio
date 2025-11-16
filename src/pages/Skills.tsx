import { motion } from "framer-motion";
import { SkillCard } from "@/components/SkillCard";
import {
  Code2,
  Database,
  Globe,
  Layout,
  Server,
  GitBranch,
  Terminal,
  Palette,
  Brain,
  Cloud,
  Lock,
  Smartphone,
  BarChart3,
  Shield,
} from "lucide-react";

const skillCategories = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", Icon: Code2, level: 90 },
      { name: "Java", Icon: Code2, level: 88 },
      { name: "JavaScript", Icon: Code2, level: 85 },
      { name: "TypeScript", Icon: Code2, level: 85 },
      { name: "SQL", Icon: Database, level: 88 },
      { name: "C", Icon: Code2, level: 75 },
      { name: "PHP", Icon: Code2, level: 70 },
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "React", Icon: Layout, level: 88 },
      { name: "Angular", Icon: Layout, level: 85 },
      { name: "Tailwind CSS", Icon: Palette, level: 85 },
      { name: "HTML5", Icon: Globe, level: 90 },
      { name: "CSS3", Icon: Palette, level: 88 },
      { name: "Bootstrap", Icon: Layout, level: 80 },
      { name: "Flutter", Icon: Smartphone, level: 75 },
      { name: "Streamlit", Icon: Layout, level: 80 },
      { name: "GWT", Icon: Layout, level: 75 },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Spring Boot", Icon: Server, level: 88 },
      { name: "FastAPI", Icon: Server, level: 85 },
      { name: "EJB", Icon: Server, level: 80 },
    ],
  },
  {
    category: "Cloud & Data Platforms",
    skills: [
      { name: "Azure", Icon: Cloud, level: 85 },
      { name: "Azure OpenAI", Icon: Brain, level: 85 },
      { name: "Azure AI Search", Icon: Cloud, level: 85 },
      { name: "Azure App Services", Icon: Cloud, level: 85 },
      { name: "Azure Cosmos DB", Icon: Database, level: 80 },
      { name: "AWS EC2", Icon: Cloud, level: 80 },
      { name: "AWS S3", Icon: Cloud, level: 85 },
      { name: "AWS Lambda", Icon: Cloud, level: 80 },
      { name: "AWS Elastic Beanstalk", Icon: Cloud, level: 80 },
      { name: "Databricks", Icon: Cloud, level: 85 },
    ],
  },
  {
    category: "Data Engineering & Big Data",
    skills: [
      { name: "Apache Spark", Icon: Database, level: 85 },
      { name: "Hadoop", Icon: Database, level: 75 },
      { name: "Kafka", Icon: Database, level: 80 },
      { name: "ETL Pipelines", Icon: Terminal, level: 85 },
      { name: "Databricks Genie", Icon: Cloud, level: 80 },
      { name: "Databricks Apps", Icon: Cloud, level: 85 },
    ],
  },
  {
    category: "Database Management",
    skills: [
      { name: "PostgreSQL", Icon: Database, level: 88 },
      { name: "MySQL", Icon: Database, level: 88 },
      { name: "Snowflake", Icon: Database, level: 80 },
      { name: "Redis", Icon: Database, level: 80 },
    ],
  },
  {
    category: "Data Science & Machine Learning",
    skills: [
      { name: "scikit-learn", Icon: Brain, level: 85 },
      { name: "pandas", Icon: Brain, level: 90 },
      { name: "NumPy", Icon: Brain, level: 88 },
      { name: "Matplotlib", Icon: BarChart3, level: 85 },
      { name: "seaborn", Icon: BarChart3, level: 85 },
    ],
  },
  {
    category: "DevOps & Infrastructure",
    skills: [
      { name: "Docker", Icon: Terminal, level: 85 },
      { name: "Kubernetes", Icon: Terminal, level: 75 },
      { name: "Jenkins", Icon: GitBranch, level: 80 },
      { name: "CI/CD", Icon: GitBranch, level: 85 },
      { name: "Git", Icon: GitBranch, level: 90 },
    ],
  },
  {
    category: "Visualization & Reporting",
    skills: [
      { name: "Power BI", Icon: BarChart3, level: 80 },
      { name: "Tableau", Icon: BarChart3, level: 80 },
    ],
  },
  {
    category: "Security & Performance",
    skills: [
      { name: "OAuth", Icon: Lock, level: 85 },
      { name: "JWT", Icon: Lock, level: 85 },
      { name: "SSL/TLS", Icon: Shield, level: 80 },
      { name: "Load Balancing", Icon: Server, level: 80 },
    ],
  },
  {
    category: "Tools & Productivity",
    skills: [
      { name: "GitHub", Icon: GitBranch, level: 90 },
      { name: "GitLab", Icon: GitBranch, level: 85 },
      { name: "Jira", Icon: Terminal, level: 85 },
      { name: "Confluence", Icon: Terminal, level: 80 },
      { name: "Jupyter Notebook", Icon: Brain, level: 90 },
      { name: "VS Code", Icon: Code2, level: 90 },
      { name: "Figma", Icon: Palette, level: 75 },
      { name: "Firebase", Icon: Cloud, level: 80 },
    ],
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels across full-stack development, 
            data engineering, and AI-driven solutions
          </p>
        </motion.div>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-8 text-center">
                <span className="gradient-text">{category.category}</span>
              </h2>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    {...skill}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
