import { motion } from "framer-motion";
import { Download, GraduationCap, Briefcase, Award, Code, BookOpen, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Resume = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </h1>
          <p className="text-muted-foreground mb-8">
            Download my complete resume or view my experience below
          </p>
          
          <a href="/assets/resume.pdf" download>
            <Button size="lg" className="glow">
              <Download className="mr-2 w-5 h-5" />
              Download Resume
            </Button>
          </a>
        </motion.div>

        <div className="space-y-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Education</h2>
            </div>

            <div className="space-y-6">
              <Card className="p-6 bg-card border-border">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      Master of Computing - Specialization in Computer Science
                    </h3>
                    <p className="text-primary font-medium">National University of Singapore</p>
                    <p className="text-sm text-muted-foreground">Aug 2024 – Present (Expected Nov 2025)</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold mb-2">GPA: 4/5</p>
                    <p className="text-muted-foreground mb-2">Relevant Coursework:</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                      <li>Distributed Systems and Databases</li>
                      <li>Data Mining</li>
                      <li>Cloud Computing</li>
                      <li>Information Visualization</li>
                      <li>Simulation and Modelling</li>
                      <li>Computer Networks</li>
                      <li>Computer System Performance Analysis</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      Bachelor of Technology in Information Technology
                    </h3>
                    <p className="text-primary font-medium">Thiagarajar College of Engineering (Anna University), India</p>
                    <p className="text-sm text-muted-foreground">Aug 2018 - May 2022</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold mb-2">CGPA: 9.35/10</p>
                    <p className="text-muted-foreground mb-2">Relevant Coursework:</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                      <li>Software Engineering</li>
                      <li>Database Management Systems</li>
                      <li>Data Structures</li>
                      <li>Object-Oriented Programming</li>
                      <li>Data Analytics</li>
                      <li>Machine Learning</li>
                      <li>Big Data Tools and Technologies</li>
                      <li>Computer Networks</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Work Experience</h2>
            </div>

            <div className="space-y-6">
              <Card className="p-6 bg-card border-border">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Data Science Intern</h3>
                    <p className="text-primary font-medium">PSA International, Singapore</p>
                    <p className="text-sm text-muted-foreground">May 2025 - Present</p>
                  </div>
                  
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Enhanced retrieval and backend logic of a RAG-based chatbot (eIDP AI Assistant Bot) using Azure OpenAI, Azure App Services, and AI Search, improving search accuracy and user experience.</li>
                    <li>Built and orchestrated data pipelines to support scalable retrieval workflows.</li>
                    <li>Explored Databricks Genie and conducted POC demonstrations to PSA Singapore & International Data Science teams.</li>
                    <li>Deployed a full-stack Databricks App integrating React (frontend) and FastAPI (backend).</li>
                    <li>Building Scanalyze, an AI-powered system that combines OCR, schema-guided extraction, and large language models to turn scanned documents into structured, machine-readable JSON.</li>
                  </ul>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Software Engineer</h3>
                    <p className="text-primary font-medium">Trimble Inc., India</p>
                    <p className="text-sm text-muted-foreground">Jul 2022 - Jul 2024</p>
                  </div>
                  
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Developed Angular-based web applications (Places UI, Document Management System) with 30% faster load times.</li>
                    <li>Modernized Java-based legacy systems (FleetCockpit, FleetWorks) using GWT, EJB, Spring Boot, reducing maintenance issues by 25%.</li>
                    <li>Designed and deployed microservices with Spring Boot & MySQL, integrated with CI/CD pipelines to enable automated deployments, handling 500k+ daily transactions.</li>
                    <li>Awarded Bravo recognition (2,000+ coins in under two years) for high performance.</li>
                    <li>Mentored 4+ engineers, delivering training sessions on machine learning and coding best practices.</li>
                  </ul>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Graduate Technical Intern</h3>
                    <p className="text-primary font-medium">Trimble Inc., India</p>
                    <p className="text-sm text-muted-foreground">Jan 2022 - Jun 2022</p>
                  </div>
                  
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Diagnosed and resolved 20+ production-critical issues, improving stability and uptime.</li>
                    <li>Contributed to high-traffic modules supporting 10,000+ active users, accelerating delivery by 20%.</li>
                  </ul>
                </div>
              </Card>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Skills</h2>
            </div>

            <Card className="p-6 bg-card border-border">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-foreground">Programming Languages</h3>
                  <p className="text-muted-foreground">Java, Python, SQL, C, PHP, JavaScript, TypeScript</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-foreground">Cloud & Data Platforms</h3>
                  <p className="text-muted-foreground">Azure (App Services, OpenAI, AI Search, Cosmos DB), AWS (EC2, S3, Lambda, Elastic Beanstalk)</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-foreground">Frontend Development</h3>
                  <p className="text-muted-foreground">Angular, React, Streamlit, Flutter, GWT, HTML5, CSS3, Bootstrap, Modus (Trimble framework), Tailwind</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-foreground">Backend Development</h3>
                  <p className="text-muted-foreground">Spring Boot, EJB, FastAPI</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-foreground">Data Engineering & Big Data</h3>
                  <p className="text-muted-foreground">Databricks (Genie, Apps), Apache Spark, Hadoop, Kafka, ETL Pipelines</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-foreground">Database Management</h3>
                  <p className="text-muted-foreground">MySQL, Snowflake, PostgreSQL, Redis</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-foreground">Data Science & ML</h3>
                  <p className="text-muted-foreground">scikit-learn, pandas, NumPy, seaborn, Matplotlib</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-foreground">DevOps & Infrastructure</h3>
                  <p className="text-muted-foreground">Docker, Kubernetes, Jenkins, CI/CD, Git</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-foreground">Visualization & Reporting</h3>
                  <p className="text-muted-foreground">Power BI, Tableau</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-foreground">Security & Performance</h3>
                  <p className="text-muted-foreground">OAuth, JWT, SSL/TLS, Load Balancing</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-foreground">Tools & Productivity</h3>
                  <p className="text-muted-foreground">GitHub, GitLab, Jira, Confluence, Jupyter Notebook, VS Code, Figma, Firebase</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-foreground">Operating Systems</h3>
                  <p className="text-muted-foreground">Linux (Ubuntu), macOS, Windows</p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Honor Awards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Honor Awards</h2>
            </div>

            <Card className="p-6 bg-card border-border">
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Best Project Award at the Indo Universal Collaboration for Engineering Education (IUCEE), 2021</li>
                <li>Runner-Up, Appathon 2020 conducted by Thiagarajar College of Engineering, in collaboration with a Member of Parliament (MP), India</li>
                <li>Top 4 Nominee, Best Outgoing Student, Thiagarajar College of Engineering - 2022</li>
              </ul>
            </Card>
          </motion.div>

          {/* Key Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Key Projects</h2>
            </div>

            <div className="space-y-6">
              <Card className="p-6 bg-card border-border">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">eIDP AI Assistant Bot</h3>
                    <p className="text-primary font-medium">PSA International, Singapore</p>
                    <p className="text-sm text-muted-foreground">May 2025 - Present</p>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Enhanced retrieval and backend logic of a RAG-based chatbot, delivering improved consistency and user experience.</li>
                    <li>Tuned prompt structures and query parameters to optimize hybrid search results using Azure AI Search and OpenAI.</li>
                  </ul>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">PlastiCrush – Cloud Recycling App</h3>
                    <p className="text-primary font-medium">NUS, Singapore</p>
                    <p className="text-sm text-muted-foreground">Jan 2025 – April 2025</p>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Designed a smart recycling system combining Flutter mobile app and IoT-enabled kiosks for plastic waste submission.</li>
                    <li>Deployed a scalable cloud architecture using AWS Elastic Beanstalk, EC2, and S3 to ensure scalable and cost-efficient operations.</li>
                  </ul>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Peer to Peer Maze Game</h3>
                    <p className="text-primary font-medium">NUS, Singapore</p>
                    <p className="text-sm text-muted-foreground">Aug 2024 - Dec 2024</p>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Developed a fault-tolerant multiplayer game using Java RMI, simulating resilient peer-to-peer communication in distributed environments.</li>
                    <li>Ensured fault recovery, node replication, and scalability under node failures.</li>
                  </ul>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Predict Resale Price of Used Cars</h3>
                    <p className="text-primary font-medium">NUS, Singapore</p>
                    <p className="text-sm text-muted-foreground">Aug 2024 - Dec 2024</p>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Built ML models using XGBoost, Random Forest, KNN, and Gradient Boosting to predict used car resale prices in Singapore.</li>
                    <li>Performed feature engineering and model evaluation using cross-validation and RMSE metrics.</li>
                  </ul>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Distributed Database System for Warehouse Management</h3>
                    <p className="text-primary font-medium">NUS, Singapore</p>
                    <p className="text-sm text-muted-foreground">Aug 2024 - Dec 2024</p>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Implemented a distributed PostgreSQL (Citus) database to simulate real-time warehouse transaction systems.</li>
                    <li>Optimized performance using sharding, indexing, and query parallelization for high-concurrency environments.</li>
                  </ul>
                </div>
              </Card>
            </div>
          </motion.div>

          {/* Publications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Publications</h2>
            </div>

            <Card className="p-6 bg-card border-border">
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Solutions for Improving Education System in Pottapatti Village, Madurai, ResearchGate, Dec 2021. <a href="#" className="text-primary hover:underline">Link</a></li>
                <li>Problems and Solutions to Reduce Carbon Footprint, ResearchGate, Dec 2021. <a href="#" className="text-primary hover:underline">Link</a></li>
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
