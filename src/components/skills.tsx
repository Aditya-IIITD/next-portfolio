"use client"

import { motion } from "framer-motion"
import { Code, Server, Settings, Zap } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      color: "bg-blue-500",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "ShadCN",
        "Ant Design",
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "GraphQL/Apollo",
      ],
    },
    {
      title: "Backend",
      icon: Server,
      color: "bg-green-500",
      skills: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Redis",
        "Firebase",
        "AWS Lambda",
        "Serverless",
        "OAuth2",
        "JWT",
        "REST APIs",
      ],
    },
    {
      title: "DevOps & Testing",
      icon: Settings,
      color: "bg-purple-500",
      skills: [
        "Docker",
        "AWS Amplify/ECS",
        "CI/CD",
        "GitHub Actions",
        "AWS CodePipeline",
        "Jest",
        "Cypress",
        "Testing",
      ],
    },
    {
      title: "Others",
      icon: Zap,
      color: "bg-orange-500",
      skills: [
        "WebSockets",
        "Microservices",
        "System Design",
        "Caching Strategies",
        "Performance Optimization",
        "Scalability",
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto px-4">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className={`${category.color} p-2 sm:p-3 rounded-lg mr-3 sm:mr-4`}>
                  <category.icon size={20} className="sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white">{category.title}</h3>
              </div>

              <div className="space-y-2 sm:space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.1 }}
                    className="flex items-center"
                  >
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                    <span className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
