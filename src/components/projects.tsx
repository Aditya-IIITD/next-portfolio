"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";
import { Button } from "@components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import { Badge } from "@components/ui/badge";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      subtitle: "Full-stack marketplace with real-time features",
      description:
        "Built a scalable e-commerce platform serving 50K+ users with real-time inventory management, payment processing, and advanced analytics. Implemented microservices architecture with Redis caching for optimal performance.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Redis", "AWS", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Real-Time Chat Application",
      subtitle: "WebSocket-powered messaging platform",
      description:
        "Developed a real-time chat application with WebSocket connections, supporting 10K+ concurrent users. Features include file sharing, message encryption, and custom emoji reactions with optimistic UI updates.",
      tech: ["React", "Socket.io", "Express.js", "MongoDB", "JWT"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Analytics Dashboard",
      subtitle: "Data visualization and business intelligence",
      description:
        "Created a comprehensive analytics dashboard processing 1M+ data points daily. Implemented real-time data streaming, interactive charts, and automated reporting with 99.9% uptime.",
      tech: ["Next.js", "D3.js", "GraphQL", "PostgreSQL", "Docker"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Task Management System",
      subtitle: "Collaborative project management tool",
      description:
        "Built a comprehensive task management system with drag-and-drop functionality, team collaboration features, and automated workflow triggers. Supports 1000+ teams with real-time synchronization.",
      tech: ["React", "Node.js", "GraphQL", "PostgreSQL", "AWS Lambda"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "AI-Powered Content Generator",
      subtitle: "Machine learning content creation platform",
      description:
        "Developed an AI-powered content generation platform using OpenAI APIs, serving 25K+ content creators. Features include template management, bulk generation, and content optimization suggestions.",
      tech: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL", "Vercel"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Fitness Tracking App",
      subtitle: "Mobile-first health and wellness platform",
      description:
        "Created a comprehensive fitness tracking application with workout planning, progress analytics, and social features. Integrated with wearable devices and supports offline functionality.",
      tech: ["React Native", "Node.js", "MongoDB", "Firebase", "HealthKit"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      image: "/placeholder.svg?height=300&width=500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 lg:py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto px-4">
            A showcase of full-stack applications built with modern technologies
            and best practices
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full bg-white dark:bg-slate-900 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2 sm:space-x-4">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/90 text-slate-900 hover:bg-white text-xs sm:text-sm"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Eye size={14} className="mr-1 sm:mr-2" />
                        <span className="hidden sm:inline">Live Demo</span>
                        <span className="sm:hidden">Demo</span>
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/90 text-slate-900 hover:bg-white text-xs sm:text-sm"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={14} className="mr-1 sm:mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>

                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-tight">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-blue-600 dark:text-blue-400 font-medium text-sm sm:text-base">
                    {project.subtitle}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 p-4 sm:p-6 pt-0">
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs px-2 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-2 sm:space-x-3 pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 bg-transparent text-xs sm:text-sm"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={12} className="mr-1 sm:mr-2" />
                        <span className="hidden sm:inline">Live Demo</span>
                        <span className="sm:hidden">Demo</span>
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 bg-transparent text-xs sm:text-sm"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={12} className="mr-1 sm:mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
