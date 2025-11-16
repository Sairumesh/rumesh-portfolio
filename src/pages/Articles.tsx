import { motion } from "framer-motion";
import { ArticleCard } from "@/components/ArticleCard";

const articles = [
  {
    title: "Minimize Count of Steps to Make All Matrix Elements as 0 by Replacing Neighbours of K with 0",
    excerpt: "An algorithmic approach to solving matrix transformation problems using graph traversal and optimization techniques. This article explores efficient methods to minimize operations when converting matrix elements.",
    tags: ["Algorithms", "Data Structures", "Matrix", "Graph Theory", "GeeksforGeeks"],
    url: "https://www.geeksforgeeks.org/dsa/minimize-count-of-steps-to-make-all-matrix-elements-as-0-by-replacing-neighbours-of-k-with-0/",
  },
  {
    title: "Find Frequencies of Elements of an Array Present in Another Array",
    excerpt: "A comprehensive guide to solving frequency counting problems in arrays using various data structures and optimization techniques. Learn efficient approaches to count element occurrences.",
    tags: ["Algorithms", "Arrays", "Hash Map", "Data Structures", "GeeksforGeeks"],
    url: "https://www.geeksforgeeks.org/dsa/find-frequencies-of-elements-of-an-array-present-in-another-array/",
  },
  {
    title: "Count of Subarrays with Unique Sum with Sum at Most K",
    excerpt: "Exploring subarray problems with constraints, focusing on finding unique sum subarrays within a given limit. This article covers sliding window techniques and prefix sum optimizations.",
    tags: ["Algorithms", "Subarrays", "Sliding Window", "Prefix Sum", "GeeksforGeeks"],
    url: "https://www.geeksforgeeks.org/dsa/count-of-subarrays-with-unique-sum-with-sum-at-most-k/",
  },
  {
    title: "Ethical Data Visualization",
    excerpt: "A thoughtful exploration of ethical considerations in data visualization. This article discusses how to present data responsibly, avoid misleading representations, and ensure transparency in visual communication.",
    tags: ["Data Visualization", "Ethics", "Data Science", "Best Practices", "Medium"],
    url: "https://medium.com/@sairumesh123/ethical-data-visualization-9a99ebebbef6",
  },
  {
    title: "Solutions for Improving Education System in Pottapatti Village, Madurai",
    excerpt: "Research publication addressing educational challenges and proposing innovative solutions for rural education systems. This work focuses on practical interventions to enhance learning outcomes in underserved communities.",
    tags: ["Research", "Education", "Social Impact", "Rural Development", "ResearchGate"],
    url: "#",
  },
  {
    title: "Problems and Solutions to Reduce Carbon Footprint",
    excerpt: "A research study examining environmental challenges and proposing actionable solutions to reduce carbon footprint. This publication explores sustainable practices and their implementation strategies.",
    tags: ["Research", "Environment", "Sustainability", "Climate Change", "ResearchGate"],
    url: "#",
  },
];

const Articles = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Articles</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technical articles, tutorials, and research publications I've written to share knowledge with the community
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <ArticleCard key={article.title} {...article} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
