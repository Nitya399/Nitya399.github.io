import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, Download, Database, Code, Brain, BarChart as ChartBar, Table, LineChart, Mail, Phone, Send, ExternalLink } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ParticlesBackground from './components/ParticlesBackground';
import SkillCard from './components/SkillCard';
import ProjectCard from './components/ProjectCard';
import TimelineItem from './components/TimelineItem';
import Navigation from './components/Navigation';
import ThemeToggle from './components/ThemeToggle';
import CertificationCard from './components/CertificationCard';
import Resume from '../assets/Nitya-Patel-final-resume.pdf'


function App() {
  const skills = [
    {
      name: 'Python',
      level: 85,
      description: 'Expert in data analysis, ML libraries, and automation scripts',
      icon: <Code className="w-6 h-6 text-blue-600" />,
    },
    {
      name: 'SQL',
      level: 90,
      description: 'Advanced database querying and optimization',
      icon: <Database className="w-6 h-6 text-blue-600" />,
    },
    {
      name: 'Power BI',
      level: 80,
      description: 'Creating insightful dashboards and reports',
      icon: <ChartBar className="w-6 h-6 text-blue-600" />,
    },
    {
      name: 'Machine Learning',
      level: 75,
      description: 'Experience with classification, regression, and clustering',
      icon: <Brain className="w-6 h-6 text-blue-600" />,
    },
    {
      name: 'Excel',
      level: 85,
      description: 'Advanced formulas, pivot tables, and VBA',
      icon: <Table className="w-6 h-6 text-blue-600" />,
    },
    {
      name: 'Statistical Analysis',
      level: 80,
      description: 'Hypothesis testing, regression analysis, and A/B testing',
      icon: <LineChart className="w-6 h-6 text-blue-600" />,
    },
  ];

  const projects = [
    {
      title: 'SQL Project: Pizza Sales Analysis',
      description: 'Analyzed pizza sales data to uncover key trends, optimize pricing, and improve inventory management through SQL queries and insights.',
      tech: ['SQL (MySQL/PostgreSQL)'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com/Nitya399/Sql_pizza_sales',
    },
    {
      title: 'Python Project: Stock Market Prediction',
      description: 'Developed a machine learning model to predict stock price movements based on historical data and technical indicators.',
      tech: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib'],
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com/Nitya399/stock_prediction',
    },
    {
      title: 'Power BI Dashboard: Portfolio Management Service',
      description: 'Created an interactive dashboard showcasing client investment data, portfolio performance, and profit analysis for a PMS business.',
      tech: ['Power BI', 'Excel'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com/Nitya399/PMS-Investment-Analysis',
    },
    {
      title: 'Power BI Dashboard: Sales Analysis',
      description: 'Designed a data-driven dashboard to analyze sales trends, product performance, and customer behavior for business decision-making.',
      tech: ['Power BI', 'SQL', 'Excel'],
      image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80',
      github: 'https://github.com/Nitya399/PMS-Investment-Analysis',
    },
  ];

  const experience = [
    {
      date: '2025',
      title: 'Software Developer Intern',
      company: 'NinezTech',
      description: [
        'Contributed to building a full-scale CRM system from the ground up.',
        'Worked closely with stakeholders to understand and document key business needs.',
        'Designed wireframes and crafted an intuitive user experience for seamless navigation.',
        'Developed the CRM\'s frontend, ensuring responsiveness and a user-friendly interface.',
      ],
    },
  ];

  const certifications = [
    {
      title: 'Power BI Virtual Internship',
      organization: 'PWC',
      description: 'Gained hands-on experience with data cleaning, power query, key metrics, and created dashboards by understanding Business requirements.',
    },
    {
      title: 'Excel Virtual Internship',
      organization: 'JP Morgan',
      description: 'Gained hands-on experience on VBA, macros, data visualization, and data-driven storytelling.',
    },
  ];

  // Contact form logic 
  const form = useRef<HTMLFormElement>(null); 
  
    
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
     
  
      const serviceId = process.env.REACT_APP_EMAIL_SERVICE_ID as string | undefined;
      const templateId = process.env.REACT_APP_EMAIL_TEMPLATE_ID as string | undefined;
      const publicKey = process.env.REACT_APP_PUBLIC_KEY as string | undefined;
  
      console.log("Service ID:", process.env.REACT_APP_EMAIL_SERVICE_ID);
      console.log("Template ID:", process.env.REACT_APP_EMAIL_TEMPLATE_ID);
      console.log("Public Key:", process.env.REACT_APP_PUBLIC_KEY);
  
      console.log("Form Data:", form.current);
  
      if (!serviceId || !templateId || !publicKey) {
        toast.error('Missing email service configuration', {
            position: 'bottom-center',
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
        });
        return; // Prevent form submission if environment variables are missing
    }
  
  
      emailjs.sendForm(
          serviceId,
          templateId,
          form.current!,
          publicKey
      ) .then(
          () => {
              toast.success('Message successfully sent!', {
                  position: 'bottom-center',
                  autoClose: 3500,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: 'dark',
              })
              const timeout = setTimeout(() => {
                  window.location.reload()
              }, 3900)
  
              return () => clearTimeout(timeout)
          },
          () => {
                toast.error('Failed to send the message, please try again', {
                 position: 'bottom-center',
                 autoClose: 3500,
                 hideProgressBar: false,
                 closeOnClick: true,
                 pauseOnHover: true,
                 draggable: true,
                 progress: undefined,
                 theme: 'dark',                
          })
      
          }
      )
    };




  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navigation />
      <ThemeToggle />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticlesBackground />
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Nitya Patel</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              A Passionate Data Enthusiast Turning Numbers into Insights
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href= "../assets/Nitya-Patel-final-resume.pdf"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                View Projects
              </motion.a>
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div>
                <p className="text-lg mb-4">
                 I'm Niya Patel, a Data & Business Analyst passionate about transforming data into actionable insights that drive business growth. With expertise in SQL, Python, Power BI, and Excel, I help businesses uncover trends, optimize operations, and make data-driven decisions. My focus is on solving complex problems, building interactive dashboards, and boosting efficiency through analytics. Let's connect and turn data into impact! 
                </p>
               
                <div className="flex flex-wrap gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-lg"
                  >
                    <Code className="w-5 h-5 mr-2 text-blue-600" />
                    <span>Business Analysis</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-lg"
                  >
                    <Database className="w-5 h-5 mr-2 text-blue-600" />
                    <span>Data Analytics</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-lg"
                  >
                    <Brain className="w-5 h-5 mr-2 text-blue-600" />
                    <span>Machine Learning</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            {experience.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} {...cert} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6"
          >
            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  placeholder="Name"
                  type="text"
                  name="from_name"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                   placeholder="Email"
                   type="email"
                   name="from_email"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  placeholder="Message" 
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </motion.button>
            </form>

            <div className="mt-8 space-y-4">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center text-gray-600 dark:text-gray-400"
              >
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:nitya.patel@example.com">patelnitya111@gmail.com</a>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center text-gray-600 dark:text-gray-400"
              >
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:+1234567890">+91 8238530020</a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default App;