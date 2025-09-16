import React, { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Users, Target, Star, ChevronDown, ChevronUp } from "lucide-react";

export const ProgramsSection = () => {
  const [showFullSchedule, setShowFullSchedule] = useState(false);

  const programs = [
    {
      id: 1,
      name: "Grassroot Development (Twinkles)",
      ageGroup: "6-12 years",
      level: "Beginner",
      frequency: "4 days a week",
      duration: "90 mins a session",
      focus: "Fun, Introductory to Squash",
      description: "Perfect for young beginners to learn the fundamentals of squash in a fun, supportive environment.",
      features: ["Basic technique development", "Hand-eye coordination", "Social skills", "Physical fitness"],
      price: "RM 200/month",
      icon: <Star className="w-8 h-8 text-orange-500" />
    },
    {
      id: 2,
      name: "Competitive Prep - Intermediate",
      ageGroup: "8-17 years",
      level: "Intermediate/Advanced",
      frequency: "4 days a week",
      duration: "2 hours",
      focus: "Intensive Training & Tournament Athletes",
      description: "Designed for serious young players preparing for competitive tournaments.",
      features: ["Advanced technique", "Match strategies", "Mental preparation", "Tournament preparation"],
      price: "RM 350/month",
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
      price: "RM 120/session",
      icon: <Users className="w-8 h-8 text-orange-500" />
    },
    {
      id: 4,
      name: "Weekend Warrior (Adults)",
      ageGroup: "18+ years",
      level: "Beginner/Intermediate",
      frequency: "1-2 days a week",
      duration: "2 hours",
      focus: "Adult Introduction to Squash",
      description: "Perfect for busy adults looking to learn squash or improve their game on weekends.",
      features: ["Adult-focused training", "Weekend convenience", "Fitness improvement", "Social networking"],
      price: "RM 180/month",
      icon: <Clock className="w-8 h-8 text-orange-500" />
    },
    {
      id: 5,
      name: "Sparring Sessions",
      ageGroup: "All ages",
      level: "All levels",
      frequency: "2-3 times a week",
      duration: "1.5 hours",
      focus: "Match Practice",
      description: "Regular sparring sessions to improve match play and competitive skills.",
      features: ["Junior Squad", "Senior Squad", "Match experience", "Competitive practice"],
      price: "RM 80/session",
      icon: <Target className="w-8 h-8 text-orange-500" />
    },
    {
      id: 6,
      name: "Strength & Conditioning",
      ageGroup: "12+ years",
      level: "All levels",
      frequency: "2-3 times a week",
      duration: "1 hour",
      focus: "Physical Fitness",
      description: "Sports-specific fitness training with certified trainers.",
      features: ["Certified fitness trainer", "Sports-specific training", "Hand-eye coordination", "Injury prevention"],
      price: "RM 150/month",
      icon: <Users className="w-8 h-8 text-orange-500" />
    },
    {
      id: 7,
      name: "Holiday Squash Camps",
      ageGroup: "6-17 years",
      level: "All levels",
      frequency: "School holidays",
      duration: "Full day",
      focus: "Intensive training & Team bonding",
      description: "Intensive holiday camps combining training with fun activities and team bonding.",
      features: ["Intensive training", "Team bonding activities", "Full day programs", "Holiday special"],
      price: "RM 300/week",
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

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-500">
                    {program.price}
                  </span>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                    Enroll Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full Schedule Toggle */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <button
            onClick={() => setShowFullSchedule(!showFullSchedule)}
            className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            See Full Program Schedule & Fees
            {showFullSchedule ? (
              <ChevronUp className="ml-2 w-5 h-5" />
            ) : (
              <ChevronDown className="ml-2 w-5 h-5" />
            )}
          </button>

          {showFullSchedule && (
            <motion.div
              className="mt-8 bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Complete Schedule & Pricing</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-orange-200">
                      <th className="py-3 px-4 font-semibold text-gray-900">Program</th>
                      <th className="py-3 px-4 font-semibold text-gray-900">Schedule</th>
                      <th className="py-3 px-4 font-semibold text-gray-900">Price</th>
                      <th className="py-3 px-4 font-semibold text-gray-900">Age Group</th>
                    </tr>
                  </thead>
                  <tbody>
                    {programs.map((program) => (
                      <tr key={program.id} className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">{program.name}</td>
                        <td className="py-3 px-4">{program.frequency}, {program.duration}</td>
                        <td className="py-3 px-4 font-semibold text-orange-500">{program.price}</td>
                        <td className="py-3 px-4">{program.ageGroup}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                * All prices are in Malaysian Ringgit (RM). Registration fees and equipment rentals may apply.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};