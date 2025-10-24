import React from "react";
import { motion } from "framer-motion";
import { Award, Star, Quote, Users, Target, Zap } from "lucide-react";

// Import coach images
import shaunImage from "../assets/coaches/Shaun.jpg";
import sattchinImage from "../assets/coaches/Sattchin.jpg";
import lucasImage from "../assets/coaches/Lucas.jpg";

export const CoachesSection = () => {
  const coaches = [
    {
      id: 1,
      name: "Coach Shaun Low",
      title: "Head Coach & Academy Director",
      credentials: "Professional Coach, Academy Co-Founder",
      experience: "8+ years",
      specialization: "Youth Development & Academy Management",
      bio: "Co-founder and head coach of Squash@Work Academy with 8 years of coaching experience. Passionate about developing young talent and building a strong squash community.",
      quote: "Every champion was once a beginner who refused to give up.",
      achievements: [
        "Co-founded Squash@Work Academy",
        "Founder of Sparring Overload (Junior and Senior)",
        "8 years coaching experience",
        "Developed 25-30 active students",
        "Led 10 international friendlies"
      ],
      programs: ["All Programs", "Academy Management"],
      image: shaunImage,
      bgColor: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      name: "Coach Sattchin",
      title: "Professional Junior Development Coach",
      credentials: "Active PSA Squash Athlete",
      experience: "3+ Years Coaching, 10+ Years Squash Experience",
      specialization: "Tournament & Event Management",
      bio: "Professional junior development coach and active PSA squash athlete. Combines competitive experience with coaching expertise to develop the next generation of squash talent.",
      quote: "Dedication and practice lead to excellence.",
      achievements: [
        "State No.1 (2018-2020, 2024-Current)",
        "Former National No.4",
        "Led 8 National Junior Tournaments",
        "Assisted in International Friendlies (China, Singapore, Hong Kong, Taiwan)"
      ],
      programs: ["Junior Development", "Tournament Preparation"],
      image: sattchinImage,
      bgColor: "from-purple-500 to-purple-600"
    },
    {
      id: 3,
      name: "Coach Lucas",
      title: "Program Coach",
      credentials: "To be updated",
      experience: "To be confirmed",
      specialization: "To be confirmed",
      bio: "Bringing specialized expertise to enhance the academy's training programs. Details to be confirmed.",
      quote: "Excellence is achieved through continuous improvement.",
      achievements: [
        "Specialized training sessions",
        "Guest coaching expertise",
        "Program enhancement"
      ],
      programs: ["Specialized Sessions"],
      image: lucasImage,
      bgColor: "from-green-500 to-green-600"
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
                {/* Header with coach image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={coach.image} 
                    alt={coach.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                    <h3 className="text-xl font-bold mb-1 text-white">{coach.name}</h3>
                    <p className="text-sm text-orange-400 font-medium">{coach.title}</p>
                  </div>
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
        {/* <motion.div
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
        </motion.div> */}
      </div>
    </section>
  );
};