import React from 'react';
import { motion } from 'framer-motion';

const ValuesSection = () => {
  const values = [
    {
      title: "Niya",
      phrase: "Confidence and ambition.",
      description: "Niya guides our actions with a focus on sincere intention, innovation, and excellence. It is the cultural foundation of our way of",
      bgColor: "bg-[#00bbb4]"
    },
    {
      title: "Nefs",
      phrase: "Soul and spirit.",
      description: "Nefs embodies a mindset of growth and continuous improvement. As a cultural symbol of Morocco, it represents our commitment to fully investing in our projects with unwavering determination to achieve success.",
      bgColor: "bg-[#7d65a9]"
    },
    {
      title: "Passion",
      phrase: "Enthusiasm and commitment.",
      description: "Passion reflects our commitment and enthusiasm. It drives our determination and perseverance in overcoming challenges, ensuring personal and professional development.",
      bgColor: "bg-[#59b784]"
    },
    {
      title: "Solidarity",
      phrase: "Collaboration and mutual support.",
      description: "Solidarity means acting collaboratively and empathetically with all our stakeholders. It fosters cooperation, mutual aid, and positive impact, enhancing our collective intelligence through kindness.",
      bgColor: "bg-[#00a7e1]"
    },
    {
      title: "Boldness",
      phrase: "Doing things differently.",
      description: "Boldness is shown through decisive, responsible, and creative decision-making. We embrace risks, exhibit flexibility, and adapt to emerging opportunities, always respecting the trust placed in us.",
      bgColor: "bg-[#2e509e]"
    }
  ];

  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <section className="w-full">
      {values.map((value, index) => (
        <motion.div
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ 
            once: true, 
            amount: 0.3,
            margin: "-100px 0px -100px 0px"
          }}
          variants={sectionVariants}
          className={`${value.bgColor} w-full min-h-[300px] flex items-center px-8 md:px-16 lg:px-24 border-0`}
        >
          <div className="max-w-6xl mx-auto w-full">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
              <div className="flex-1 mb-6 md:mb-0">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                  {value.title}
                </h2>
                <p className="text-xl md:text-2xl font-medium text-white mb-4">
                  {value.phrase}
                </p>
              </div>
              <div className="flex-1 md:ml-8">
                <p className="text-lg md:text-xl text-white text-opacity-90 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default ValuesSection;
