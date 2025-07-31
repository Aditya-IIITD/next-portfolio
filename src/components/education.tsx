"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { Badge } from "@components/ui/badge";

export default function Education() {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      year: "2019",
      honors: "Magna Cum Laude",
      description:
        "Specialized in Software Engineering and Distributed Systems",
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "University of California, Berkeley",
      year: "2017",
      honors: "Summa Cum Laude",
      description: "Focus on Web Technologies and Database Systems",
    },
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      logo: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      year: "2023",
      logo: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "ISTQB Certified Tester",
      issuer: "International Software Testing Qualifications Board",
      year: "2022",
      logo: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      year: "2022",
      logo: "/placeholder.svg?height=60&width=60",
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
    <section id="education" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Education & Certifications
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Continuous learning and professional development in cutting-edge
            technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <div className="bg-blue-500 p-3 rounded-lg mr-4">
                <GraduationCap size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Education
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  <Card className="bg-slate-50 dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                            {edu.degree}
                          </CardTitle>
                          <p className="text-blue-600 dark:text-blue-400 font-medium">
                            {edu.institution}
                          </p>
                        </div>
                        <div className="flex items-center text-slate-500 dark:text-slate-400">
                          <Calendar size={16} className="mr-2" />
                          <span className="text-sm">{edu.year}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <Badge
                          variant="secondary"
                          className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300"
                        >
                          {edu.honors}
                        </Badge>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">
                          {edu.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <div className="bg-purple-500 p-3 rounded-lg mr-4">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Certifications
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="bg-slate-50 dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <CardContent className="p-6 text-center">
                      <div className="mb-4">
                        <img
                          src={cert.logo || "/placeholder.svg"}
                          alt={`${cert.name} logo`}
                          className="w-16 h-16 mx-auto rounded-lg"
                        />
                      </div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-sm">
                        {cert.name}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 text-xs mb-2">
                        {cert.issuer}
                      </p>
                      <Badge variant="outline" className="text-xs">
                        {cert.year}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
