import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { Code2, Lightbulb, Users, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const values = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, efficient, and elegant code",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing for speed and scalability",
  },
  {
    icon: Users,
    title: "User Experience",
    description: "Creating intuitive and delightful interfaces",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Innovative solutions to complex challenges",
  },
];

const FloatingSphere = () => {
  return (
    <Sphere args={[1.5, 64, 64]}>
      <meshStandardMaterial
        color="#00D4FF"
        roughness={0.3}
        metalness={0.8}
        wireframe
      />
    </Sphere>
  );
};

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey and what drives me
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-foreground">My Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a versatile Software Engineer and Data Practitioner with 2+ years of experience 
                across full-stack development, data engineering, and AI-driven solutions. Currently pursuing 
                my Master of Computing at the National University of Singapore, I'm passionate about 
                building scalable applications and deploying machine learning systems.
              </p>
              <p>
                My professional journey includes working as a Data Science Intern at PSA International, 
                where I've enhanced RAG-based chatbots using Azure OpenAI and built data pipelines. 
                Previously, I worked as a Software Engineer at Trimble Inc., where I modernized legacy 
                systems, developed microservices handling 500k+ daily transactions, and mentored engineers.
              </p>
              <p>
                I'm skilled in Java, Python, Angular, React, Spring Boot, and cloud platforms (Azure, AWS, Databricks). 
                I enjoy working on projects that combine software engineering with data science, from building 
                full-stack applications to deploying AI-powered systems. When I'm not coding, you'll find me 
                writing technical articles, or exploring new technologies.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[400px]"
          >
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <OrbitControls enableZoom={false} autoRotate />
              <FloatingSphere />
            </Canvas>
          </motion.div>
        </div>

        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            My <span className="gradient-text">Values</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Card className="p-6 h-full bg-card border-border hover:border-primary transition-all text-center">
                    <div className="flex flex-col items-center gap-4">
                      <div className="p-4 rounded-full bg-primary/10">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
