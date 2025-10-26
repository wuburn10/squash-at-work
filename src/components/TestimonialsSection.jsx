import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight, Play, User, Heart } from "lucide-react";

export const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      type: "parent",
      name: "Mrs. Jennifer Lee",
      relationship: "Parent of Emma (Age 9)",
      program: "Grassroot Development",
      rating: 5,
      quote: "My child used to be shy and now looks forward to every training! The coaches here don't just teach squash – they build confidence and character. Emma has made so many friends and has become more outgoing.",
      avatar: "👩",
      duration: "6 months at academy"
    },
    {
      id: 2,
      type: "student",
      name: "Marcus Tan",
      relationship: "Former Student",
      program: "Competitive Prep",
      rating: 5,
      quote: "It's not just squash, it's life skills. The discipline, perseverance, and teamwork I learned here have helped me in school and beyond. I'm now studying abroad but still use the mental strategies Coach Ahmad taught me.",
      avatar: "👨‍🎓",
      duration: "4 years at academy"
    },
    {
      id: 3,
      type: "parent",
      name: "Mr. David Wong",
      relationship: "Parent of Twin Brothers (Age 12)",
      program: "Holiday Camps",
      rating: 5,
      quote: "Both my sons were getting into too much screen time during holidays. The squash camps here kept them active, engaged, and excited about sports. The international exposure through friendly matches was incredible.",
      avatar: "👨‍💼",
      duration: "3 summer camps"
    },
    {
      id: 4,
      type: "adult",
      name: "Sarah Krishnan",
      relationship: "Weekend Warrior",
      program: "Adult Classes",
      rating: 5,
      quote: "As a working mom, I thought I'd never have time for sports. The weekend warrior program fits perfectly into my schedule. I've lost weight, gained energy, and found a supportive community of fellow parents.",
      avatar: "👩‍💻",
      duration: "1 year at academy"
    },
    {
      id: 5,
      type: "student",
      name: "Aisha Rahman",
      relationship: "Current Student",
      program: "Competitive Prep",
      rating: 5,
      quote: "I started as a complete beginner last year. Now I'm competing in regional tournaments! The coaching here is world-class, and the video analysis sessions really helped improve my technique quickly.",
      avatar: "👧",
      duration: "1.5 years at academy"
    },
    {
      id: 6,
      type: "parent",
      name: "Dr. Kumar Patel",
      relationship: "Parent of Arjun (Age 15)",
      program: "Private Coaching",
      rating: 5,
      quote: "My son needed individual attention to improve his ranking. The private coaching here is exceptional – very technical and personalized. Arjun improved his national ranking by 20 positions in just 8 months.",
      avatar: "👨‍⚕️",
      duration: "8 months private coaching"
    }
  ];

  const videoTestimonials = [
    {
      id: 1,
      title: "Emma's Transformation Journey",
      description: "Watch Emma's progress from shy beginner to confident player",
      thumbnail: "🎬",
      duration: "2:15"
    },
    {
      id: 2,
      title: "Parents Share Their Experience",
      description: "Multiple parents discuss the academy's impact on their children",
      thumbnail: "🎥",
      duration: "3:42"
    },
    {
      id: 3,
      title: "International Tournament Success",
      description: "Our students showcase their achievements in international competitions",
      thumbnail: "🏆",
      duration: "4:18"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'parent': return 'from-blue-500 to-blue-600';
      case 'student': return 'from-green-500 to-green-600';
      case 'adult': return 'from-purple-500 to-purple-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'parent': return <Heart className="w-5 h-5" />;
      case 'student': return <Star className="w-5 h-5" />;
      case 'adult': return <User className="w-5 h-5" />;
      default: return <Star className="w-5 h-5" />;
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-orange-500">Family</span> Says
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from parents, students, and academy members
          </p>
        </motion.div>

        {/* Main Testimonial Slider */}
        <div className="relative mb-16">
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${getTypeColor(testimonials[currentSlide].type)} p-6 text-white relative`}>
                  <div className="absolute top-4 right-4 opacity-20">
                    <Quote className="w-16 h-16" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="text-4xl">{testimonials[currentSlide].avatar}</div>
                      <div>
                        <h3 className="text-xl font-bold">{testimonials[currentSlide].name}</h3>
                        <p className="opacity-90">{testimonials[currentSlide].relationship}</p>
                      </div>
                      <div className="ml-auto flex items-center space-x-1">
                        {getTypeIcon(testimonials[currentSlide].type)}
                        <span className="text-sm capitalize">{testimonials[currentSlide].type}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg text-gray-700 leading-relaxed mb-6">
                    "{testimonials[currentSlide].quote}"
                  </blockquote>

                  {/* Program and Duration */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-medium">
                      {testimonials[currentSlide].program}
                    </span>
                    <span>{testimonials[currentSlide].duration}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-orange-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Video Testimonials */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Video Testimonials
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoTestimonials.map((video, index) => (
              <motion.div
                key={video.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 h-48 flex items-center justify-center">
                  <div className="text-6xl">{video.thumbnail}</div>
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="font-bold text-gray-900 mb-2">{video.title}</h4>
                  <p className="text-sm text-gray-600">{video.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Want to share your own experience?
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Submit Your Story
            </button>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};