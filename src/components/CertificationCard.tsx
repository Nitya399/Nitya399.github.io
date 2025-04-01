import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  organization: string;
  description: string;
}

export default function CertificationCard({ title, organization, description }: CertificationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
          <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{organization}</p>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </motion.div>
  );
}