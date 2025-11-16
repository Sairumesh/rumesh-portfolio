import { motion } from "framer-motion";
import { CodingProfileCard } from "@/components/CodingProfileCard";

const profiles = [
  {
    platform: "LeetCode",
    username: "rumesh_sree_k_g",
    description: "Competitive programming and algorithm practice",
    url: "https://leetcode.com/u/rumesh_sree_k_g/",
    icon: "💻",
  },
  {
    platform: "HackerRank",
    username: "18IT074_RUMESH",
    description: "Problem solving and skill certifications",
    url: "https://www.hackerrank.com/profile/18IT074_RUMESH",
    icon: "🏆",
  },
  {
    platform: "Kaggle",
    username: "rumeshsreekg",
    description: "Data science competitions and datasets",
    url: "https://www.kaggle.com/rumeshsreekg/",
    icon: "📊",
  },
  {
    platform: "GeeksforGeeks",
    username: "rumesh",
    description: "Practice problems and interview preparation",
    url: "https://www.geeksforgeeks.org/user/rumesh/",
    icon: "🤓",
  },
];

const CodingProfiles = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Coding <span className="gradient-text">Profiles</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connect with me on various competitive programming and practice platforms
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {profiles.map((profile, index) => (
            <CodingProfileCard key={profile.platform} {...profile} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CodingProfiles;
