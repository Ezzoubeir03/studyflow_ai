import { Clock3 } from "lucide-react";
import { motion } from "framer-motion";

export default function StatsCard({ title, value, subtitle, progress = 0}) {
  return (
    <motion.div 
    className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800"
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98}}
    >
      <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
        <div className="bg-violet-500 h-full" />
      </div>

      
      <div className="mt-4">
        <h3 className="text-gray-400 text-sm flex items-center gap-2">
          <Clock3 size={16} />
          {title}
        </h3>

        <p className="text-2xl font-bold text-white mt-2">{value}</p>

        <p className="text-gray-500 text-sm mt-1">
          {subtitle}
        </p>
      </div>
    </motion.div>
  );
}