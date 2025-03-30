import { cn } from "../lib/utils"
import { TestimonialCard } from "../components/ui/testimonial-card"
import { type TestimonialAuthor } from "../components/ui/testimonial-card"

interface TestimonialsSectionProps {
  title: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
  }>
  className?: string
}

function TestimonialsSection({ 
  title,
  testimonials,
  className 
}: TestimonialsSectionProps) {
  return (
    <section className={cn(
      "bg-background text-foreground",
      "py-12 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8", // Added horizontal padding for smaller screens
      className
    )}>
      <div className="mx-auto flex max-w-container flex-col items-center text-center gap-8 sm:gap-16 mt-16">
        {/* Title Section - Made Responsive */}
        <div className="w-full flex flex-col items-center">
          <h2 className={cn(
            "w-full font-normal bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-orange-200",
            "text-2xl leading-[1.15] md:text-5xl md:leading-[1.15] lg:text-6xl lg:leading-[1.15]", // Responsive font sizes
            "px-4 max-w-4xl mx-auto", // Proper width constraints and centering
            "drop-shadow-md" // Optional: adds subtle shadow for better readability
          )}>
            {title}
          </h2>
          
          {/* Optional decorative elements (can be removed) */}
          <div className="mt-6 h-1 w-24 bg-gradient-to-r from-purple-400 to-orange-300 rounded-full opacity-80" />
        </div>

        {/* Testimonials Marquee */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mt-8 sm:mt-16">
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:240s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {[...Array(4)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-background sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-background sm:block" />
        </div>
      </div>
    </section>
  )
}

export { TestimonialsSection }