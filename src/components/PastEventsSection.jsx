import React from "react";
import { motion } from "framer-motion";
import { Trophy, Calendar, MapPin, Users, Award, Globe, Star } from "lucide-react";

export const PastEventsSection = () => {
  const events = [
    {
      id: 1,
      year: "2024",
      title: "Summer Intensive Camp",
      description: "Comprehensive 2-week training program with international coaches",
      icon: <Calendar className="w-6 h-6" />,
      participants: "45 students",
      location: "Main Academy",
      achievement: "100% skill improvement recorded"
    },
    {
      id: 2,
      year: "2024",
      title: "Referee Certification Workshop",
      description: "Professional referee training program certified by Malaysia Squash Association",
      icon: <Award className="w-6 h-6" />,
      participants: "20 participants",
      location: "Academy Training Hall",
      achievement: "15 new certified referees"
    },
    {
      id: 3,
      year: "2023",
      title: "International Friendly - Taiwan",
      description: "Cultural exchange and competitive matches with Taiwan junior squad",
      icon: <Globe className="w-6 h-6" />,
      participants: "12 players",
      location: "Taiwan National Sports Complex",
      achievement: "8 wins out of 12 matches"
    },
    {
      id: 4,
      year: "2023",
      title: "Ultra Games Squash Tournament",
      description: "Hosted regional tournament with participants from 6 countries",
      icon: <Trophy className="w-6 h-6" />,
      participants: "120+ athletes",
      location: "Academy Courts 1-4",
      achievement: "Largest tournament hosted"
    },
    {
      id: 5,
      year: "2023",
      title: "International Friendly - China",
      description: "Elite training camp and friendly matches with Beijing Squash Academy",
      icon: <Globe className="w-6 h-6" />,
      participants: "10 players",
      location: "Beijing Sports University",
      achievement: "Technical skills exchange"
    },
    {
      id: 6,
      year: "2022",
      title: "International Friendly - Russia",
      description: "Winter training exchange program with Moscow Squash Federation",
      icon: <Globe className="w-6 h-6" />,
      participants: "8 players",
      location: "Moscow Sports Complex",
      achievement: "Cold weather adaptation training"
    },
    {
      id: 7,
      year: "2022",
      title: "International Friendly - Kuwait",
      description: "Desert training camp and cultural exchange program",
      icon: <Globe className="w-6 h-6" />,
      participants: "15 players",
      location: "Kuwait Olympic Committee",
      achievement: "Heat endurance training"
    },
    {
      id: 8,
      year: "2022",
      title: "International Friendly - Singapore",
      description: "Regional championship preparation with Singapore Squash Academy",
      icon: <Globe className="w-6 h-6" />,
      participants: "20 players",
      location: "Singapore Sports Complex",
      achievement: "Regional ranking improvement"
    },
    {
      id: 9,
      year: "2021",
      title: "International Friendly - USA",
      description: "Virtual training sessions and technique analysis with US coaches",
      icon: <Globe className="w-6 h-6" />,
      participants: "25 students",
      location: "Virtual Platform",
      achievement: "Digital coaching innovation"
    },
    {
      id: 10,
      year: "2021",
      title: "International Doubles Championship",
      description: "First-ever academy doubles tournament with international format",
      icon: <Trophy className="w-6 h-6" />,
      participants: "60 pairs",
      location: "Academy Courts",
      achievement: "New tournament format success"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-500">Legacy</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proud history of international exchanges, tournaments, and achievements
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - hidden on mobile, visible on md+ */}
          <div className="hidden xl:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-orange-300 transform -translate-x-0.5" />
          {/* Mobile line */}
          <div className="block xl:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-orange-300" />

          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className={`relative flex items-center mb-2 xl:mb-2 ${
                index % 2 === 0 ? "xl:flex-row" : "xl:flex-row-reverse"
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 xl:left-1/2 w-4 h-4 bg-orange-500 rounded-full transform -translate-x-2 xl:-translate-x-2 z-10 shadow-xl" />

              {/* Content card */}
              <div className={`ml-12 xl:ml-0 flex-1 ${index % 2 === 0 ? "xl:pr-8" : "xl:pl-8"} max-w-xl xl:max-w-xl ${index % 2 === 0 ? "xl:ml-auto" : "xl:mr-auto"}`}>
                <motion.div
                  className="bg-white rounded-xl shadow-xl p-6 hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {event.year}
                    </span>
                    <div className="text-orange-500">
                      {event.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {event.title}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    {event.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center text-gray-500">
                      <Users className="w-4 h-4 mr-2" />
                      {event.participants}
                    </div>
                    <div className="flex items-center text-gray-500">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                    {/* <div className="flex items-center text-orange-600 font-semibold">
                      <Trophy className="w-4 h-4 mr-2" />
                      {event.achievement}
                    </div> */}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement stats */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {[
            { number: "9", label: "Countries Visited", icon: <Globe className="w-8 h-8" /> },
            { number: "300+", label: "Students Trained", icon: <Users className="w-8 h-8" /> },
            { number: "15+", label: "Tournaments Hosted", icon: <Trophy className="w-8 h-8" /> },
            { number: "5", label: "Years Experience", icon: <Award className="w-8 h-8" /> }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="text-orange-500 flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};