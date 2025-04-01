import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillCardProps {
  name: string;
  level: number;
  description: string;
  icon: React.ReactNode;
}

export default function SkillCard({ name, level, description, icon }: SkillCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="glass-card group relative p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">{name}</h3>
            <span className="text-sm font-medium text-primary-600 dark:text-primary-400">{level}%</span>
          </div>
          <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: `${level}%` } : {}}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="absolute h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={inView ? { opacity: 1, height: 'auto' } : {}}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="mt-4"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}