import React from "react";
import { motion } from "framer-motion";
import { 
  ExternalLink, 
  Clock, 
  Users, 
  Phone, 
  Mail, 
  MapPin,
  Facebook,
  Instagram,
  Youtube
} from "lucide-react";

export const CTAFooter = () => {
  return (
    <section className="bg-gradient-to-br from-orange-600 to-orange-800 text-white">
      {/* Main CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to start your{" "}
              <span className="text-orange-200">squash journey?</span>
            </h2>

            <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Join Malaysia's premier squash academy and unlock your potential with world-class coaching and facilities.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <motion.button
                onClick={() => window.open("https://forms.google.com", "_blank")}
                className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-full text-lg font-bold transition-colors shadow-lg flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Fill Up This Google Form</span>
                <ExternalLink className="w-5 h-5" />
              </motion.button>

              {/* <motion.button
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-full text-lg font-bold transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Trial Session
              </motion.button> */}
            </motion.div>

            {/* <motion.div
              className="flex items-center justify-center space-x-2 text-orange-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Clock className="w-5 h-5" />
              <span className="text-sm font-medium">
                ⚠️ Limited slots available per program
              </span>
            </motion.div> */}
          </motion.div>
        </div>
      </div>

      {/* Footer Information */}
      <div className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Academy Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-4">
                <img 
                  src="/src/assets/logo.png" 
                  alt="Squash@Work Logo" 
                  className="h-12 w-auto mr-3"
                />
                {/* <h3 className="text-2xl font-bold text-orange-500">
                  Squash@Work
                </h3> */}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Malaysia's premier squash academy dedicated to developing champions through world-class coaching and comprehensive training programs.
              </p>
              
              {/* Social Media */}
              <div className="flex space-x-4">
                {[
                  { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/squashatwork/" },
                  { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/squashatwork17/" },
                  // { icon: <Youtube className="w-5 h-5" />, href: "#" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    className="bg-slate-800 hover:bg-orange-500 p-3 rounded-full transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-orange-500" />
                  <span>+6016-9203537</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-orange-500" />
                  <span>squashatwork17@gmail.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-orange-500 mt-1" />
                  <div>
                    <p>SMK (L) Bukit Bintang</p>
                    <p>Jalan Utara, PJS 52</p>
                    <p>46200 PJ, Selangor, Malaysia</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Programs */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-bold text-white mb-4">Programs</h4>
              <ul className="space-y-2 text-gray-300">
                {[
                  "Grassroot Development",
                  "Competitive Prep",
                  "Private Coaching",
                  "Weekend Warriors",
                  "Holiday Camps",
                  "Strength & Conditioning"
                ].map((program, index) => (
                  <li key={index} className="hover:text-orange-400 cursor-pointer transition-colors">
                    {program}
                  </li>
                ))}
              </ul>
            </motion.div> */}

            {/* Quick Links */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                {[
                  // { name: "About Us", href: "#about" },
                  { name: "Our Coaches", href: "#coaches" },
                  { name: "Testimonials", href: "#testimonials" },
                  { name: "Events Calendar", href: "#calendar" },
                  { name: "Registration", href: "#" },
                  { name: "Contact", href: "#contact" }
                ].map((link, index) => (
                  <li key={index}>
                    <button 
                      className="hover:text-orange-400 transition-colors text-left"
                      onClick={() => {
                        if (link.href.startsWith('#')) {
                          document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div> */}
          </div>

          {/* Stats Bar */}
          {/* <motion.div
            className="mt-12 pt-8 border-t border-slate-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "500+", label: "Students Trained" },
                { number: "15+", label: "Tournaments Won" },
                { number: "9", label: "Countries Visited" },
                { number: "5", label: "Years Excellence" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-orange-500">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div> */}

          {/* Bottom Copyright */}
          <motion.div
            className="mt-8 pt-8 border-t border-slate-700 text-center text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p>&copy; 2024 Squash@Work. All rights reserved.</p>
              {/* <div className="flex space-x-6 mt-4 md:mt-0">
                <button className="hover:text-orange-400 transition-colors">Privacy Policy</button>
                <button className="hover:text-orange-400 transition-colors">Terms of Service</button>
                <button className="hover:text-orange-400 transition-colors">Refund Policy</button>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};