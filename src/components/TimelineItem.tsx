import { motion } from 'framer-motion';
import { Calendar, Building2 } from 'lucide-react';

interface TimelineItemProps {
  date: string;
  title: string;
  company: string;
  description: string[];
}

export default function TimelineItem({ date, title, company, description }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="relative pl-8 pb-8 group"
    >
      <div className="absolute left-0 top-0 h-full w-0.5 bg-primary-200 dark:bg-primary-900" />
      <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1.5 rounded-full border-2 border-primary-600 bg-white dark:bg-gray-900 group-hover:scale-125 transition-transform duration-300" />
      <div className="glass-card p-6 rounded-lg shadow-lg">
        <div className="flex flex-wrap items-center gap-4 mb-3">
          <div className="flex items-center space-x-2 text-primary-600 dark:text-primary-400">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">{date}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <Building2 className="w-4 h-4" />
            <span className="text-sm">{company}</span>
          </div>
        </div>
        <h3 className="text-lg font-bold mb-3">{title}</h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          {description.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-600 dark:bg-primary-400 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}