import React from 'react';
import { Home, Target, Compass, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const tileVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="grid grid-cols-4 grid-rows-2 gap-4 max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="col-span-4 mt-16 bg-yellow-300 p-6 rounded-xl flex flex-col justify-center items-center shadow-lg"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl text-white font-bold">Why We Are Doing It?</h1>
        </motion.div>

        {/* White Box Section */}
        <motion.div
          className="col-span-4 bg-white h-[80%] rounded-xl shadow-md flex justify-center items-center"
          variants={tileVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <div className="text-gray-800 text-xl font-semibold">
            <p>
              IN OUR <span className="text-yellow-600 font-bold">SEARCH</span>
            </p>
            <p>
              WE COULDN'T <span className="text-yellow-600 font-bold">LOCATE</span> IT,
            </p>
            <p>
              SO WE <span className="text-yellow-600 font-bold">CRAFTED</span> IT FOR YOU
            </p>
          </div>
        </motion.div>

        {/* Tiles */}
        <motion.div
          className="relative -top-6 col-span-1 bg-yellow-200 p-4 rounded-xl flex flex-col justify-center items-center shadow-md"
          variants={tileVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          <Home className="text-gray-800 w-12 h-12 mb-4" />
          <h2 className="text-xl font-bold text-gray-800 mb-2">Confined PGs?</h2>
          <p className="text-center text-gray-700">
            Feel trapped in limited housing options?
          </p>
        </motion.div>

        {/* Team Image */}
        <motion.div
          className="col-span-2 row-span-2 rounded-xl overflow-hidden shadow-lg relative -top-6"
          variants={tileVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          <img
            src="/images/aboutuspng.png"
            alt="Team"
            className="scale-[1.06] w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          className="col-span-1 bg-black text-yellow-300 p-4 rounded-xl flex flex-col justify-center items-center shadow-md relative -top-6"
          variants={tileVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          <Compass className="w-12 h-12 mb-4" color="#FDE047" />
          <h2 className="text-xl font-bold mb-2  text-yellow-300">Escape to Beiyo!</h2>
          <p className="text-center  text-yellow-300">Bid farewell to cramped quarters.</p>
        </motion.div>

        <motion.div
          className="col-span-1 bg-yellow-200 p-4 rounded-xl flex flex-col justify-center items-center shadow-md relative -top-6"
          variants={tileVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          <Target className="text-gray-800 w-12 h-12 mb-4" />
          <h2 className="text-xl font-bold text-gray-800 mb-2">Beiyo: Your Sanctuary</h2>
          <p className="text-center text-gray-700">
            Crafted by those who understand.
          </p>
        </motion.div>

        <motion.div
          className="col-span-1 bg-black text-yellow-300 p-4 rounded-xl flex flex-col justify-center items-center shadow-md relative -top-6"
          variants={tileVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
        > 
          <Heart className="w-12 h-12 mb-4" color="#FDE047" />
          <h2 className="text-xl font-bold mb-2  text-yellow-300 ">Where Comfort Awaits</h2>
          <p className="text-center  text-yellow-300">Your comfort is our priority.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
