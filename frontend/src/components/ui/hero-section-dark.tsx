import * as React from "react";
import { cn } from "../../lib/utils";
import { ChevronRight } from "lucide-react";
import { AIExpertCards } from "../FeatureExpert";
import { TestimonialsSectionDemo } from "../Testimonial";
import CTASection from "../Cta";
import { StackedCircularFooter } from "./stacked-circular-footer";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

interface HeroSectionDarkProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: {
    regular: string;
    gradient: string;
  };
  description: string;
  ctaText: string;
  ctahref: string;
}

const RetroGridDark: React.FC = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="pointer-events-none absolute size-full overflow-hidden [perspective:200px]"
  >
    <div className="absolute inset-0 [transform:rotateX(65deg)]">
      <motion.div 
        animate={{ 
          backgroundPosition: ["0px 0px", "60px 60px"] 
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 20,
          ease: "linear"
        }}
        className="animate-grid [background-image:linear-gradient(to_right,rgba(75,75,75,0.8)_1px,transparent_0),linear-gradient(to_bottom,rgba(75,75,75,0.8)_1px,transparent_0)] [background-repeat:repeat] [background-size:60px_60px] [height:300vh] [inset:0%_0px] [margin-left:-200%] [transform-origin:100%_0_0] [width:600vw]" 
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent to-90%" />
  </motion.div>
);

export const HeroSectionDark = React.forwardRef<
  HTMLDivElement,
  HeroSectionDarkProps
>(
  (
    { className, title, subtitle, description, ctaText, ctahref, ...props },
    ref
  ) => {
    const navigate = useNavigate();
    const { scrollY } = useScroll();
    
    // Parallax effect for main title
    const titleOpacity = useTransform(scrollY, [0, 300], [1, 0]);
    const titleY = useTransform(scrollY, [0, 300], [0, -100]);
    
    // Parallax effect for gradient background
    const gradientY = useTransform(scrollY, [0, 500], [0, 150]);

    const handleExpertNavigation = () => {
      navigate(ctahref, { replace: true });
    };

    const handleScrollToExperts = () => {
      const expertSection = document.querySelector('.scroll-mt-16');
      if (expertSection) {
        expertSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const fadeInUpVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: custom * 0.2, duration: 0.8, ease: "easeOut" }
      })
    };

    return (
      <div
        className={cn(
          "relative bg-gray-950 text-white overflow-hidden",
          className
        )}
        ref={ref}
        {...props}
      >
        {/* Background gradients */}
        <motion.div 
          style={{ y: gradientY }}
          className="absolute top-0 z-0 h-screen w-screen bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(0,0,0,0))]" 
        />

        <section className="relative max-w-full mx-auto">
          <RetroGridDark />

          {/* Hero content */}
          <motion.div 
            style={{ opacity: titleOpacity, y: titleY }}
            className="max-w-screen-xl z-10 mx-auto px-4 py-20 gap-12 md:px-8"
          >
            <div className="space-y-8 max-w-3xl mx-auto text-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative -top-2"
              >
                <h1 className="text-sm text-gray-300 group font-geist mx-auto px-5 py-2 bg-gradient-to-tr from-zinc-700/30 via-gray-600/20 to-transparent border-[2px] border-white/10 rounded-3xl w-fit">
                  {title}
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, repeatDelay: 2, duration: 0.5 }}
                  >
                    <ChevronRight className="inline w-4 h-4 ml-2" />
                  </motion.span>
                </h1>
              </motion.div>

              <motion.h2 
                initial="hidden"
                animate="visible"
                variants={fadeInUpVariants}
                custom={1}
                className="text-4xl md:text-6xl font-geist mx-auto text-white pt-2 pb-0.5 leading-[1.15]"
              >
                <span className="relative inline-block">
                  <span className="relative top-[0.5px]">
                    {subtitle.regular}
                  </span>
                  <motion.span 
                    initial={{ backgroundPosition: "0% 50%" }}
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-orange-200 relative top-[0.5px]"
                  >
                    {subtitle.gradient}
                  </motion.span>
                </span>
              </motion.h2>

              <motion.p 
                variants={fadeInUpVariants}
                initial="hidden"
                animate="visible"
                custom={2}
                className="max-w-2xl mx-auto text-gray-300"
              >
                {description}
              </motion.p>
              
              {/* CTA Button - Moved up here */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="items-center justify-center gap-x-3 space-y-1 sm:flex sm:space-y-0 mt-6"
              >
                <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 text-xs font-medium backdrop-blur-3xl"
                  >
                    <button
                      onClick={() => {
                        handleExpertNavigation();
                        handleScrollToExperts();
                      }}
                      className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-zinc-700/30 via-purple-500/30 to-transparent text-white border-input border-[1px] border-white/10 hover:bg-gradient-to-tr hover:from-zinc-700/40 hover:via-purple-500/40 hover:to-transparent transition-all sm:w-auto py-4 px-10"
                    >
                      <motion.span
                        initial={{ opacity: 1 }}
                        whileHover={{ 
                          opacity: [1, 0.8, 1],
                          transition: { duration: 1.5, repeat: Infinity }
                        }}
                      >
                        {ctaText}
                      </motion.span>
                    </button>
                  </motion.div>
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Main content */}
          <main className="flex flex-col items-center justify-center py-16 px-4 mt-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.05 }}
              transition={{ duration: 2 }}
              className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-fixed"
            />
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/5"
            />

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16 relative z-10"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl lg:text-6xl font-normal mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-orange-200"
              >
                AI Education Companions
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-gray-400 max-w-2xl mx-auto"
              >
                Connect with our subject matter experts powered by AI. Choose a
                specialist below to start learning.
              </motion.p>
            </motion.div>

            {/* Features section */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="scroll-mt-16 w-full relative z-10"
            >
              <AIExpertCards />
            </motion.div>

            {/* Testimonials section */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="relative z-10 w-full"
            >
              <TestimonialsSectionDemo />
            </motion.div>

            {/* CTA section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="relative z-10 w-full"
            >
              <CTASection />
            </motion.div>
          </main>

          {/* Footer with proper z-index */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative z-20 w-full"
          >
            <StackedCircularFooter />
          </motion.div>
        </section>
      </div>
    );
  }
);

HeroSectionDark.displayName = "HeroSectionDark";