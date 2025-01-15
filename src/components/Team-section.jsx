import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Twitter, ChevronLeft, ChevronRight, Facebook, FacebookIcon } from 'lucide-react';

// interface TeamMember {
//   id: number;
//   name: string;
//   role: string;
//   image: string;
//   bio: string;
//   social: {
//     twitter: string;
//     linkedin: string;
//     github: string;
//   };
// }

const teamMembers= [
  {
    id: 1,
    name: "Mbassi Rick",
    role: "Createur web & mobile / ux designer",
    image: "/images/b3.jpg",
    // bio: "Leading creative strategies with over 10 years of experience in brand development.",
    social: {
      twitter: "#",
      linkedin: "#",
      facebook: "#"
    }
  },
  {
    id: 2,
    name: "Hugues Abena",
    role: "Manager General / designer graphique",
    image: "/images/G.jpg",
    // bio: "Passionate about creating innovative solutions and mentoring future tech leaders.",
    social: {
      twitter: "#",
      linkedin: "#",
      facebook: "#"
    }
  },
  {
    id: 3,
    name: "Patrick",
    role: "createur web / designer graphique",
    image: "/images/P-one.jpg",
    // bio: "Crafting compelling narratives that connect brands with their audience.",
    social: {
      twitter: "#",
      linkedin: "#",
      facebook: "#"
    }
  },
  {
    id: 4,
    name: "Mukwade Jacques",
    role: "chairman",
    image: "/images/J-two.jpg",
    // bio: "Creating intuitive and delightful user experiences through research-driven design.",
    social: {
      twitter: "#",
      linkedin: "#",
      facebook: "#"
    }
  },
  {
    id: 5,
    name: "Mol rodrigue",
    role: "monteur video / community manager",
    image: "/images/A.jpg",
    // bio: "Creating intuitive and delightful user experiences through research-driven design.",
    social: {
      twitter: "#",
      linkedin: "#",
      facebook: "#"
    }
  },
  {
    id: 6,
    name: "Gabin",
    role: "commercial representative / RH",
    image: "/images/Ga.jpg",
    // bio: "Leading creative strategies with over 10 years of experience in brand development.",
    social: {
      twitter: "#",
      linkedin: "#",
      facebook: "#"
    }
  },
];

const CARDS_PER_PAGE = {
  lg: 4,
  md: 2,
  sm: 1
};

const TeamSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const totalPages = Math.ceil(teamMembers.length / CARDS_PER_PAGE.lg);

  const goToPage = (pageIndex) => {
    setDirection(pageIndex > currentPage ? 1 : -1);
    setCurrentPage(pageIndex);
  };

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setDirection(1);
      setCurrentPage(prev => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage(prev => prev - 1);
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const paginationVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    hover: { scale: 1.2 }
  };

  const startIndex = currentPage * CARDS_PER_PAGE.lg;
  const visibleMembers = teamMembers.slice(startIndex, startIndex + CARDS_PER_PAGE.lg);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Notre Équipe
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Nous sommes un groupe diversifié de personnes passionnées, engagées à fournir des solutions de communication exceptionnelles à nos clients.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentPage}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {visibleMembers.map((member) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="group"
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2">
                    <div className="relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-64 object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex space-x-4">
                          <a href={member.social.twitter} className="text-white hover:text-[#08c1dc] transition-colors">
                            <Twitter size={24} />
                          </a>
                          <a href={member.social.linkedin} className="text-white hover:text-[#08c1dc] transition-colors">
                            <Linkedin size={24} />
                          </a>
                          <a href={member.social.facebook} className="text-white hover:text-[#08c1dc] transition-colors">
                            <FacebookIcon size={24} />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-[#08c1dc] font-medium mb-3">{member.role}</p>
                      <p className="text-gray-600 text-sm">{member.bio}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
            <button
              onClick={prevPage}
              className={`p-2 rounded-full bg-white shadow-lg pointer-events-auto transform transition-transform hover:scale-110 ${
                currentPage === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'
              }`}
              disabled={currentPage === 0}
            >
              <ChevronLeft size={24} className="text-gray-600" />
            </button>
            <button
              onClick={nextPage}
              className={`p-2 rounded-full bg-white shadow-lg pointer-events-auto transform transition-transform hover:scale-110 ${
                currentPage === totalPages - 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'
              }`}
              disabled={currentPage === totalPages - 1}
            >
              <ChevronRight size={24} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {[...Array(totalPages)].map((_, index) => (
            <motion.button
              key={index}
              variants={paginationVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              onClick={() => goToPage(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                currentPage === index ? 'bg-[#08c1dc]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;