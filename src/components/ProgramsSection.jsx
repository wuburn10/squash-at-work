import React, { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Users, Target, Star, ChevronDown, ChevronUp } from "lucide-react";

export const ProgramsSection = () => {
  const [showFullSchedule, setShowFullSchedule] = useState(false);

  const programs = [
    {
      id: 1,
      name: "Grassroots Development (Twinkles)",
      ageGroup: "6-12 years",
      level: "Beginner",
      frequency: "2-3 days a week",
      duration: "1 hour per session",
      focus: "Fun, Introductory to Squash",
      description: "Perfect for young beginners to learn the fundamentals of squash in a fun, supportive environment.",
      features: ["Basic technique development", "Hand-eye coordination", "Social skills", "Physical fitness"],
      icon: <Star className="w-8 h-8 text-orange-500" />
    },
    {
      id: 2,
      name: "Competitive Prep - Intermediate to Advanced",
      ageGroup: "8-17 years",
      level: "Intermediate/Advanced",
      frequency: "4 days a week",
      duration: "2 hours",
      focus: "Intensive Training & Tournament Athletes",
      description: "Designed for serious young players preparing for competitive tournaments.",
      features: ["Advanced technique", "Match strategies", "Mental preparation", "Tournament preparation"],
      icon: <Target className="w-8 h-8 text-orange-500" />
    },
    {
      id: 3,
      name: "Private 1-on-1",
      ageGroup: "All ages",
      level: "All levels",
      frequency: "Flexible",
      duration: "1 hour",
      focus: "Personalized coaching",
      description: "Individual coaching sessions tailored to your specific needs and goals.",
      features: ["Personalized training plan", "Flexible scheduling", "Rapid improvement", "One-on-one attention"],
      icon: <Users className="w-8 h-8 text-orange-500" />
    },
    {
      id: 4,
      name: "Sparring Sessions",
      ageGroup: "All ages",
      level: "All levels",
      frequency: "2-3 times a week",
      duration: "1.5 hours",
      focus: "Match Practice",
      description: "Regular sparring sessions to improve match play and competitive skills.",
      features: ["Junior Squad", "Senior Squad", "Match experience", "Competitive practice"],
      icon: <Target className="w-8 h-8 text-orange-500" />
    },
    {
      id: 5,
      name: "Strength & Conditioning",
      ageGroup: "12+ years",
      level: "All levels",
      frequency: "Flexible",
      duration: "1 hour",
      focus: "Physical Fitness",
      description: "Sports-specific fitness training with certified trainers.",
      features: ["Certified fitness trainer", "Sports-specific training", "Hand-eye coordination", "Injury prevention"],
      icon: <Users className="w-8 h-8 text-orange-500" />
    },
    {
      id: 6,
      name: "Holiday Squash Camps",
      ageGroup: "6-17 years",
      level: "All levels",
      frequency: "School holidays",
      duration: "Full day",
      focus: "Intensive training & Team bonding",
      description: "Intensive holiday camps combining training with fun activities and team bonding. Subject to changes.",
      features: ["Intensive training", "Team bonding activities", "Full day programs", "Holiday special"],
      icon: <Star className="w-8 h-8 text-orange-500" />
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-500">Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of programs designed for every age and skill level
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  {program.icon}
                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {program.level}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {program.name}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {program.description}
                </p>

                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>Age: {program.ageGroup}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{program.frequency} | {program.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="w-4 h-4 mr-2" />
                    <span>{program.focus}</span>
                  </div>
                </div>

                <div className="space-y-1 mb-4">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact for Details */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <button
            className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Contact Us for Program Details & Pricing
          </button>
        </motion.div>
      </div>
    </section>
  );
};