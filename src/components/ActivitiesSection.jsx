import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  Target, 
  Trophy, 
  Users, 
  Clock, 
  Dumbbell,
  Calendar,
  Camera
} from "lucide-react";

export const ActivitiesSection = () => {
  const activities = [
    {
      id: 1,
      title: "Daily Training Sessions",
      description: "Structured coaching sessions focusing on technique, strategy, and skill development",
      icon: <Zap className="w-8 h-8" />,
      frequency: "Daily",
      programs: ["Grassroot", "Competitive Prep", "Adults"]
    },
    {
      id: 2,
      title: "Match Play Practice",
      description: "Regular sparring sessions to develop competitive skills and match experience",
      icon: <Target className="w-8 h-8" />,
      frequency: "3x/week",
      programs: ["All Programs"]
    },
    {
      id: 3,
      title: "Tournament Preparation",
      description: "Intensive coaching and mental preparation for upcoming competitions",
      icon: <Trophy className="w-8 h-8" />,
      frequency: "Weekly",
      programs: ["Competitive Prep"]
    },
    {
      id: 4,
      title: "Group Training",
      description: "Team-based training sessions promoting camaraderie and peer learning",
      icon: <Users className="w-8 h-8" />,
      frequency: "Daily",
      programs: ["All Programs"]
    },
    {
      id: 5,
      title: "Skills Assessment",
      description: "Regular evaluation of player progress and skill development tracking",
      icon: <Clock className="w-8 h-8" />,
      frequency: "Monthly",
      programs: ["All Programs"]
    },
    {
      id: 6,
      title: "Fitness Training",
      description: "Sport-specific conditioning and strength training with certified trainers",
      icon: <Dumbbell className="w-8 h-8" />,
      frequency: "3x/week",
      programs: ["Competitive", "Adults"]
    },
    {
      id: 7,
      title: "Workshop Sessions",
      description: "Special workshops on tactics, mental preparation, and equipment knowledge",
      icon: <Calendar className="w-8 h-8" />,
      frequency: "Occasional",
      programs: ["All Programs"]
    },
    {
      id: 8,
      title: "Video Analysis",
      description: "Professional video analysis of playing technique and match performance",
      icon: <Camera className="w-8 h-8" />,
      frequency: "Weekly",
      programs: ["Competitive Prep", "Private"]
    }
  ];

  return (
    <section id="activities" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Weekly <span className="text-orange-500">Activities</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive training activities designed to develop every aspect of your squash game
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className="bg-slate-800 rounded-xl p-6 h-full hover:bg-slate-700 transition-all duration-300 relative overflow-hidden"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <motion.div
                    className="text-orange-500 mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {activity.icon}
                  </motion.div>

                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-orange-400 transition-colors">
                    {activity.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {activity.description}
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400 uppercase tracking-wider">
                        Frequency
                      </span>
                      <span className="text-sm font-semibold text-orange-400">
                        {activity.frequency}
                      </span>
                    </div>

                    <div className="pt-2 border-t border-slate-600">
                      <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">
                        Available In
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {activity.programs.map((program, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-orange-500/20 text-orange-300 px-2 py-1 rounded-full"
                          >
                            {program}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover effect border */}
                <motion.div
                  className="absolute inset-0 border-2 border-orange-500 rounded-xl opacity-0 group-hover:opacity-100"
                  initial={false}
                  transition={{ duration: 0.2 }}
                />
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
          <p className="text-gray-300 mb-6">
            Ready to experience these activities firsthand?
          </p>
          <motion.button
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open("https://forms.google.com", "_blank")}
          >
            Book a Trial Session
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  );
};