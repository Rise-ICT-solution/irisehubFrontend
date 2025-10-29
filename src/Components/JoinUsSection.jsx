import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const JoinUsSection = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24">
        {/* Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 p-12 md:p-16 lg:p-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Side - Title */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="relative"
              >
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                  Join Us
                </h2>
                
                {/* Geometric Shape around "Us" */}
                <div className="absolute -top-2 -right-4 w-24 h-24 opacity-30">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path
                      d="M20 20 L80 20 L80 40 L60 40 L60 60 L40 60 L40 80 L20 80 Z"
                      fill="none"
                      stroke="#00a7e1"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </motion.div>

              {/* Right Side - Description and CTA */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                className="space-y-8"
              >
                {/* Description Text */}
                <p className="text-lg md:text-xl text-white leading-relaxed">
                  If you are passionate about innovation, eager to make a difference, and ready to be part of a forward-thinking team, INNOVX is the place for you. Together, we can unlock the immense potential of technology to create a brighter, more sustainable future. Explore our current job openings and find out how you can be a part of our journey.
                </p>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg"
                >
                  <span className="text-sm uppercase tracking-wide">
                    Your Journey Starts Here
                  </span>
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                    <FaArrowRight className="text-white text-xs" />
                  </div>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinUsSection;
