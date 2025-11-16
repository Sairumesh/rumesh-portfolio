import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    title: "eIDP AI Assistant Bot",
    description: "Enhanced retrieval and backend logic of a RAG-based chatbot (eIDP AI Assistant Bot) using Azure OpenAI, Azure App Services, and AI Search. The project focused on improving search accuracy and user experience by building and orchestrating data pipelines to support scalable retrieval workflows. I tuned prompt structures and query parameters to optimize hybrid search results, delivering improved consistency and user experience. Note: This is a company-based project, and the code is not publicly available.",
    techStack: ["Azure OpenAI", "Azure App Services", "Azure AI Search", "RAG", "Python", "FastAPI", "React", "Databricks"],
    githubUrl: "",
    liveUrl: "",
  },
  {
    title: "PlaStreaks – Cloud Recycling App",
    description: "Designed and developed a smart recycling system combining Flutter mobile app and IoT-enabled kiosks for plastic waste submission. The project involved creating a comprehensive solution for users to submit plastic waste through mobile devices and physical kiosks. I deployed a scalable cloud architecture using AWS Elastic Beanstalk, EC2, and S3 to ensure scalable and cost-efficient operations. The system handles real-time data processing and provides users with feedback on their recycling contributions.",
    techStack: ["Flutter", "AWS Elastic Beanstalk", "AWS EC2", "AWS S3", "IoT", "Cloud Architecture", "Mobile Development"],
    githubUrl: "https://github.com/Sairumesh/PlaStreaksApp",
    liveUrl: "",
  },
  {
    title: "Peer to Peer Maze Game",
    description: "Developed a fault-tolerant multiplayer game using Java RMI (Remote Method Invocation), simulating resilient peer-to-peer communication in distributed environments. The project focused on implementing robust distributed systems concepts including fault recovery mechanisms, node replication strategies, and ensuring scalability under node failures. The game demonstrates advanced distributed computing principles where players can join and leave the game dynamically while maintaining game state consistency across all nodes. Note: This project was completed for the NUS Distributed Systems course. As per professor's instructions, the code cannot be publicly disclosed.",
    techStack: ["Java", "RMI", "Distributed Systems", "Fault Tolerance", "Peer-to-Peer", "Network Programming"],
    githubUrl: "",
    liveUrl: "",
  },
  {
    title: "Predict Resale Price of Used Cars",
    description: "Built comprehensive ML models using XGBoost, Random Forest, KNN, and Gradient Boosting algorithms to predict used car resale prices in Singapore. The project involved extensive data preprocessing, feature engineering, and model evaluation using cross-validation techniques and RMSE (Root Mean Squared Error) metrics. I analyzed various factors affecting car prices including age, mileage, brand, model, and market trends to create accurate prediction models that can assist buyers and sellers in making informed decisions.",
    techStack: ["Python", "XGBoost", "Random Forest", "KNN", "Gradient Boosting", "scikit-learn", "pandas", "NumPy", "Data Analysis"],
    githubUrl: "https://github.com/Sairumesh/Predict-Resale-Price-of-Used-Cars",
    liveUrl: "",
  },
  {
    title: "Distributed Database System for Warehouse Management",
    description: "Implemented a distributed PostgreSQL (Citus) database to simulate real-time warehouse transaction systems. The project focused on creating a high-performance database architecture capable of handling concurrent transactions from multiple warehouse locations. I optimized performance using advanced techniques including sharding strategies, intelligent indexing, and query parallelization for high-concurrency environments. The system demonstrates how distributed databases can scale horizontally to support large-scale warehouse operations with minimal latency.",
    techStack: ["PostgreSQL", "Citus", "Distributed Databases", "Sharding", "Database Optimization", "SQL", "Performance Tuning"],
    githubUrl: "https://github.com/Sairumesh/Distributed-Database-System-for-Warehouse-Management",
    liveUrl: "",
  },
  {
    title: "Scanalyze",
    description: "Building an AI-powered system that combines OCR (Optical Character Recognition), schema-guided extraction, and large language models to turn scanned documents into structured, machine-readable JSON. The project aims to automate document processing workflows by intelligently extracting and structuring information from various document types. The system uses advanced AI techniques to understand document context, extract relevant fields, and transform unstructured scanned documents into clean, queryable data formats that can be easily integrated into existing systems. Note: This is a company-based project, and the code is not publicly available.",
    techStack: ["AI", "OCR", "LLM", "Document Processing", "Python", "Machine Learning", "Natural Language Processing"],
    githubUrl: "",
    liveUrl: "",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of projects showcasing various technologies and solutions across full-stack development, 
            data engineering, and AI-driven systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
