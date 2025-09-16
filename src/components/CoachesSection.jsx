import React from "react";
import { motion } from "framer-motion";
import { Award, Star, Quote, Users, Target, Zap } from "lucide-react";

export const CoachesSection = () => {
  const coaches = [
    {
      id: 1,
      name: "Coach Ahmad Rahman",
      title: "Head Coach & Academy Director",
      credentials: "Ex-National Player, Level 3 Certified",
      experience: "15+ years",
      specialization: "Tournament Preparation & Advanced Technique",
      bio: "Former Malaysian national team player with extensive international coaching experience. Specializes in developing competitive players for professional tournaments.",
      quote: "Every champion was once a beginner who refused to give up.",
      achievements: [
        "Malaysian National Team (5 years)",
        "Asian Games Bronze Medalist",
        "Coached 20+ national junior champions"
      ],
      programs: ["Competitive Prep", "Private Coaching"],
      avatar: "👨‍🏫", // Placeholder
      bgColor: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      name: "Coach Sarah Lim",
      title: "Youth Development Specialist",
      credentials: "Level 2 Certified, Sports Psychology Diploma",
      experience: "8+ years",
      specialization: "Youth Development & Mental Coaching",
      bio: "Passionate about nurturing young talent with a focus on building confidence and mental resilience alongside technical skills.",
      quote: "It's not just about the game; it's about building character.",
      achievements: [
        "Youth Coach of the Year 2023",
        "50+ junior players developed",
        "Sports Psychology Certified"
      ],
      programs: ["Grassroot Development", "Holiday Camps"],
      avatar: "👩‍🏫", // Placeholder
      bgColor: "from-purple-500 to-purple-600"
    },
    {
      id: 3,
      name: "Coach David Chen",
      title: "Technical Director",
      credentials: "Ex-Professional Player, Level 3 Certified",
      experience: "12+ years",
      specialization: "Technical Analysis & Match Strategy",
      bio: "Former professional circuit player with deep expertise in technical analysis and strategic game planning for competitive players.",
      quote: "Precision in technique leads to excellence in performance.",
      achievements: [
        "Professional PSA Circuit (6 years)",
        "Technical Analysis Expert",
        "Video Analysis Specialist"
      ],
      programs: ["Competitive Prep", "Video Analysis"],
      avatar: "👨‍💼", // Placeholder
      bgColor: "from-green-500 to-green-600"
    },
    {
      id: 4,
      name: "Coach Maria Santos",
      title: "Adult Program Coordinator",
      credentials: "Level 2 Certified, Adult Education Specialist",
      experience: "6+ years",
      specialization: "Adult Learning & Fitness Integration",
      bio: "Specializes in teaching adult beginners with a focus on fitness, fun, and practical skill development for busy professionals.",
      quote: "It's never too late to discover your passion for squash.",
      achievements: [
        "Adult Education Certified",
        "100+ adult beginners coached",
        "Corporate Training Specialist"
      ],
      programs: ["Weekend Warriors", "Corporate Training"],
      avatar: "👩‍💼", // Placeholder
      bgColor: "from-pink-500 to-pink-600"
    },
    {
      id: 5,
      name: "Coach Kevin Tan",
      title: "Fitness & Conditioning Coach",
      credentials: "Certified Strength Coach, Sports Science Degree",
      experience: "10+ years",
      specialization: "Sports-Specific Fitness & Injury Prevention",
      bio: "Sports science graduate specializing in squash-specific fitness training and injury prevention protocols for athletes of all levels.",
      quote: "Strong body, strong mind, strong game.",
      achievements: [
        "Sports Science Degree",
        "Certified Strength Coach",
        "Injury Prevention Specialist"
      ],
      programs: ["Strength & Conditioning", "All Programs"],
      avatar: "🏋️‍♂️", // Placeholder
      bgColor: "from-orange-500 to-red-500"
    },
    {
      id: 6,
      name: "Coach Lisa Wong",
      title: "Junior Development Coach",
      credentials: "Level 2 Certified, Child Development Specialist",
      experience: "7+ years",
      specialization: "Early Child Development & Fun-based Learning",
      bio: "Expert in making squash enjoyable for young children while building fundamental skills through creative and engaging training methods.",
      quote: "Learning through play creates lifelong passion.",
      achievements: [
        "Child Development Certified",
        "Fun-based Learning Expert",
        "200+ children coached"
      ],
      programs: ["Twinkles Program", "Holiday Camps"],
      avatar: "👩‍🎓", // Placeholder
      bgColor: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section id="coaches" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Your <span className="text-orange-500">Coaches</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn from experienced professionals who are passionate about developing squash talent at every level
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coaches.map((coach, index) => (
            <motion.div
              key={coach.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className="bg-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 h-full"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Header with gradient background */}
                <div className={`bg-gradient-to-r ${coach.bgColor} p-6 text-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative z-10">
                    <div className="text-6xl mb-4">{coach.avatar}</div>
                    <h3 className="text-xl font-bold mb-1">{coach.name}</h3>
                    <p className="text-sm opacity-90 font-medium">{coach.title}</p>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-white/10 rounded-full" />
                  <div className="absolute -bottom-5 -left-5 w-15 h-15 bg-white/10 rounded-full" />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Credentials */}
                  <div className="flex items-center mb-4">
                    <Award className="w-5 h-5 text-orange-500 mr-2" />
                    <span className="text-sm text-gray-300">{coach.credentials}</span>
                  </div>

                  {/* Experience */}
                  <div className="flex items-center mb-4">
                    <Star className="w-5 h-5 text-orange-500 mr-2" />
                    <span className="text-sm text-gray-300">Experience: {coach.experience}</span>
                  </div>

                  {/* Specialization */}
                  <div className="flex items-start mb-4">
                    <Target className="w-5 h-5 text-orange-500 mr-2 mt-0.5" />
                    <span className="text-sm text-gray-300">{coach.specialization}</span>
                  </div>

                  {/* Bio */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {coach.bio}
                  </p>

                  {/* Quote */}
                  <div className="bg-slate-700 rounded-lg p-4 mb-6 relative">
                    <Quote className="w-6 h-6 text-orange-500 mb-2" />
                    <p className="text-gray-300 italic text-sm">
                      "{coach.quote}"
                    </p>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-orange-500 mb-3 flex items-center">
                      <Zap className="w-4 h-4 mr-1" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-1">
                      {coach.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-xs text-gray-300 flex items-start">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Programs */}
                  <div>
                    <h4 className="text-sm font-semibold text-orange-500 mb-2 flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      Programs
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {coach.programs.map((program, idx) => (
                        <span
                          key={idx}
                          className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {program}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-300 mb-6 text-lg">
            Ready to train with our expert coaching team?
          </p>
          <motion.button
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open("https://forms.google.com", "_blank")}
          >
            Meet Our Coaches
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};