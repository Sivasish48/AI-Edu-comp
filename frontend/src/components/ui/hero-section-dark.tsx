import * as React from "react"
import { cn } from "../../lib/utils"
import { ChevronRight } from "lucide-react"
import { TabsTrigger } from "../ui/tabs" // Make sure to import TabsTrigger
import { AIExpertCards } from "../FeatureExpert"
import { TestimonialsSectionDemo } from "../Testimonial"
import CTASection from "../Cta"
import { StackedCircularFooter } from "./stacked-circular-footer"


interface HeroSectionDarkProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  subtitle?: {
    regular: string
    gradient: string
  }
  description?: string
  ctaText?: string
  ctaHref?: string
  gridOptions?: {
    angle?: number
    cellSize?: number
    opacity?: number
    lineColor?: string
  }
  experts?: Array<{
    value: string
    icon: React.ReactNode
    label: string
  }>
}

const RetroGridDark = ({ angle = 65, cellSize = 60, opacity = 0.5, lineColor = "rgba(75, 75, 75, 0.8)" }) => {
  const gridStyles = {
    "--grid-angle": `${angle}deg`,
    "--cell-size": `${cellSize}px`,
    "--opacity": opacity,
    "--line-color": lineColor,
  } as React.CSSProperties

  return (
    <div
      className={cn(
        "pointer-events-none absolute size-full overflow-hidden [perspective:200px]",
        `opacity-[var(--opacity)]`,
      )}
      style={gridStyles}
    >
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div className="animate-grid [background-image:linear-gradient(to_right,var(--line-color)_1px,transparent_0),linear-gradient(to_bottom,var(--line-color)_1px,transparent_0)] [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-200%] [transform-origin:100%_0_0] [width:600vw]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent to-90%" />
    </div>
  )
}

const HeroSectionDark = React.forwardRef<HTMLDivElement, HeroSectionDarkProps>(
  (
    {
      className,
      title = "Build products for everyone",
      subtitle = {
        regular: "Designing your projects faster with ",
        gradient: "the largest figma UI kit.",
      },
      description = "Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
      ctaText = "Browse courses",
      ctaHref = "#",
      gridOptions,
      experts = [], // Default empty array for experts
      ...props
    },
    ref,
  ) => {
    return (
      <div className={cn("relative bg-gray-950 text-white overflow-hidden", className)} ref={ref} {...props}>
        <div className="absolute top-0 z-[0] h-screen w-screen bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(0,0,0,0))]" />
        <section className="relative max-w-full mx-auto z-1">
          <RetroGridDark {...gridOptions} />
          <div className="max-w-screen-xl z-10 mx-auto px-4 py-28 gap-12 md:px-8">
            <div className="space-y-8 max-w-3xl mx-auto text-center">
              <div className="relative -top-2">
                <h1 className="text-sm text-gray-300 group font-geist mx-auto px-5 py-2 bg-gradient-to-tr from-zinc-700/30 via-gray-600/20 to-transparent border-[2px] border-white/10 rounded-3xl w-fit">
                  {title}
                  <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
                </h1>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-geist mx-auto text-white pt-2 pb-0.5 leading-[1.15]">
  <span className="relative inline-block">
    <span className="relative top-[0.5px]">
      {subtitle.regular}
    </span>
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-orange-200 relative top-[0.5px]">
      {subtitle.gradient}
    </span>
  </span>
</h2>   
              <p className="max-w-2xl mx-auto text-gray-300">{description}</p>
              
              {experts.length > 0 && (
                <div className="flex flex-wrap justify-center gap-3 w-full">
                  {experts.map((expert) => (
                    <TabsTrigger
                      key={expert.value}
                      value={expert.value}
                      className="flex-shrink-0 flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-gray-300 border border-purple-900/50 hover:bg-purple-900/30 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-900 data-[state=active]:to-purple-700 data-[state=active]:text-white data-[state=active]:border-purple-500 transition-all w-[180px] text-center justify-center"
                    >
                      {expert.icon} {expert.label}
                    </TabsTrigger>
                  ))}
                </div>
              )}
              
              <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 text-xs font-medium backdrop-blur-3xl">
                    <a
                      href={ctaHref}
                      className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-zinc-700/30 via-purple-500/30 to-transparent text-white border-input border-[1px] border-white/10 hover:bg-gradient-to-tr hover:from-zinc-700/40 hover:via-purple-500/40 hover:to-transparent transition-all sm:w-auto py-4 px-10"
                    >
                      {ctaText}
                    </a>
                  </div>
                </span>
              </div>
            </div>
          </div>
          <main className="flex min-h-screen flex-col items-center justify-center py-16 px-4">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-5 bg-fixed"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/5"></div>

      <div className="text-center mb-16 relative z-10">
        <h1 className="text-4xl lg:text-6xl font-normal mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-orange-200">
          AI Education Companions
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Connect with our subject matter experts powered by AI. Choose a specialist below to start learning.
        </p>
      </div>

      <div className="relative z-10 w-full">
        <AIExpertCards />
      </div>
      <TestimonialsSectionDemo />
      <div className="relative z-10 w-full">
  <CTASection />
</div>
<div className="block">
      <StackedCircularFooter />
    </div>
    </main>
    <div>
   
    </div>
    
        </section>
      </div>
    )
  },
)
HeroSectionDark.displayName = "HeroSectionDark"

export { HeroSectionDark }