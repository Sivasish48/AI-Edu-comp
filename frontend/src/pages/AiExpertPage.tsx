
import { motion } from "framer-motion";

import { AIExpertCards } from "../components/FeatureExpert";

import { StackedCircularFooter } from "../components/ui/stacked-circular-footer";
import { ChevronRight } from "lucide-react";

const AIExpertPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative bg-gray-950 text-white overflow-hidden min-h-screen"
    >
      {/* Background elements matching HeroSectionDark */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 z-[0] h-screen w-screen bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(0,0,0,0))]"
      />

      {/* Grid background matching HeroSectionDark */}
      <div className="pointer-events-none absolute size-full overflow-hidden [perspective:200px] opacity-[0.5]">
        <div className="absolute inset-0 [transform:rotateX(65deg)]">
          <div className="animate-grid [background-image:linear-gradient(to_right,rgba(75,75,75,0.8)_1px,transparent_0),linear-gradient(to_bottom,rgba(75,75,75,0.8)_1px,transparent_0)] [background-repeat:repeat] [background-size:60px_60px] [height:300vh] [inset:0%_0px] [margin-left:-200%] [transform-origin:100%_0_0] [width:600vw]" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent to-90%" />
      </div>

      {/* Main content container */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-20 md:px-8">
        {/* Page header matching HeroSectionDark style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <motion.div className="relative -top-2 mb-8">
            <h1 className="text-sm text-gray-300 group font-geist mx-auto px-5 py-2 bg-gradient-to-tr from-zinc-700/30 via-gray-600/20 to-transparent border-[2px] border-white/10 rounded-3xl w-fit">
              AI Expert Companions
              <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
            </h1>
          </motion.div>

          <h1 className="text-4xl lg:text-6xl font-geist mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-orange-200">
            Meet Our AI Experts
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Connect with subject matter experts powered by AI. Choose a specialist to start learning.
          </p>
        </motion.div>

        {/* AI Expert Cards section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full mb-20"
        >
          <AIExpertCards />
        </motion.div>

       </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
      >
        <StackedCircularFooter />
      </motion.div>
    </motion.div>
  );
};

export { AIExpertPage };