import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  Users, 
  Trophy,
  AlertCircle,
  Star,
  Filter
} from "lucide-react";

export const CalendarSection = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const events = [
    {
      id: 1,
      title: "Winter Holiday Camp Registration Opens",
      date: "October 1, 2024",
      time: "9:00 AM",
      type: "registration",
      location: "Online Registration",
      description: "Early bird registration for December holiday camp. Limited to 30 participants.",
      priority: "high",
      category: "camp",
      participants: "Ages 6-17"
    },
    {
      id: 2,
      title: "Inter-Academy Championship",
      date: "October 15-16, 2024",
      time: "8:00 AM - 6:00 PM",
      type: "tournament",
      location: "Academy Courts 1-4",
      description: "Regional championship featuring 8 academies from Malaysia and Singapore.",
      priority: "high",
      category: "tournament",
      participants: "Competitive Players"
    },
    {
      id: 3,
      title: "Parent-Child Fun Tournament",
      date: "October 22, 2024",
      time: "10:00 AM - 2:00 PM",
      type: "event",
      location: "All Academy Courts",
      description: "Fun doubles tournament for parents and children to play together.",
      priority: "medium",
      category: "family",
      participants: "All Ages"
    },
    {
      id: 4,
      title: "Technical Workshop: Advanced Serve Techniques",
      date: "November 5, 2024",
      time: "2:00 PM - 4:00 PM",
      type: "workshop",
      location: "Court 2",
      description: "Specialized workshop focusing on advanced serving techniques with Coach David.",
      priority: "medium",
      category: "workshop",
      participants: "Intermediate/Advanced"
    },
    {
      id: 5,
      title: "International Friendly - Thailand Academy",
      date: "November 12-14, 2024",
      time: "All Day",
      type: "exchange",
      location: "Bangkok, Thailand",
      description: "Cultural and sports exchange program with Bangkok Squash Academy.",
      priority: "high",
      category: "international",
      participants: "Selected Players"
    },
    {
      id: 6,
      title: "Adult Beginner Course Starts",
      date: "November 18, 2024",
      time: "7:00 PM - 9:00 PM",
      type: "program",
      location: "Court 3",
      description: "6-week beginner course for adults new to squash.",
      priority: "medium",
      category: "adult",
      participants: "Adults 18+"
    },
    {
      id: 7,
      title: "Annual Academy Awards Ceremony",
      date: "December 3, 2024",
      time: "6:00 PM - 9:00 PM",
      type: "ceremony",
      location: "Academy Hall",
      description: "Celebrating student achievements, coach recognition, and year highlights.",
      priority: "high",
      category: "ceremony",
      participants: "All Academy Members"
    },
    {
      id: 8,
      title: "Winter Holiday Intensive Camp",
      date: "December 16-27, 2024",
      time: "9:00 AM - 4:00 PM",
      type: "camp",
      location: "All Academy Facilities",
      description: "Two-week intensive training camp with guest international coaches.",
      priority: "high",
      category: "camp",
      participants: "All Levels"
    },
    {
      id: 9,
      title: "New Year Challenge Tournament",
      date: "January 4-5, 2025",
      time: "8:00 AM - 6:00 PM",
      type: "tournament",
      location: "Academy Courts",
      description: "Start the new year with competitive matches across all age categories.",
      priority: "high",
      category: "tournament",
      participants: "All Levels"
    }
  ];

  const filters = [
    { key: "all", label: "All Events", icon: <CalendarIcon className="w-4 h-4" /> },
    { key: "tournament", label: "Tournaments", icon: <Trophy className="w-4 h-4" /> },
    { key: "camp", label: "Camps", icon: <Star className="w-4 h-4" /> },
    { key: "workshop", label: "Workshops", icon: <Users className="w-4 h-4" /> },
    { key: "international", label: "International", icon: <MapPin className="w-4 h-4" /> }
  ];

  const filteredEvents = selectedFilter === "all" 
    ? events 
    : events.filter(event => event.category === selectedFilter);

  const getEventTypeColor = (type) => {
    const colors = {
      tournament: "from-red-500 to-red-600",
      camp: "from-blue-500 to-blue-600",
      workshop: "from-green-500 to-green-600",
      exchange: "from-purple-500 to-purple-600",
      program: "from-yellow-500 to-yellow-600",
      ceremony: "from-pink-500 to-pink-600",
      event: "from-teal-500 to-teal-600",
      registration: "from-orange-500 to-orange-600"
    };
    return colors[type] || "from-gray-500 to-gray-600";
  };

  const getPriorityIcon = (priority) => {
    if (priority === "high") return <AlertCircle className="w-4 h-4 text-red-500" />;
    return <Clock className="w-4 h-4 text-gray-400" />;
  };

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Upcoming <span className="text-orange-500">Events</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay up-to-date with tournaments, camps, workshops, and special events
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setSelectedFilter(filter.key)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                selectedFilter === filter.key
                  ? "bg-orange-500 text-white"
                  : "bg-slate-800 text-gray-300 hover:bg-slate-700"
              }`}
            >
              {filter.icon}
              <span className="text-sm font-medium">{filter.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className="bg-slate-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-full"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${getEventTypeColor(event.type)} p-4 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                        {event.type}
                      </span>
                      {getPriorityIcon(event.priority)}
                    </div>
                    <h3 className="text-lg font-bold text-white leading-tight">
                      {event.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Date and Time */}
                  <div className="flex items-center mb-3 text-orange-400">
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">{event.date}</span>
                  </div>

                  <div className="flex items-center mb-3 text-gray-300">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.time}</span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center mb-4 text-gray-300">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {event.description}
                  </p>

                  {/* Participants */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-400">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="text-xs">{event.participants}</span>
                    </div>
                    
                    {event.priority === "high" && (
                      <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded-full text-xs font-medium">
                        Priority
                      </span>
                    )}
                  </div>

                  {/* Action Button */}
                  <div className="mt-4 pt-4 border-t border-slate-700">
                    <motion.button
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {event.type === "registration" ? "Register Now" : 
                       event.type === "tournament" ? "View Details" : 
                       "Learn More"}
                    </motion.button>
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
          <div className="bg-slate-800 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Never Miss an Event
            </h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our event calendar and get notifications about upcoming tournaments, camps, and special programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe to Calendar
              </motion.button>
              <motion.button
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Schedule
              </motion.button>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};