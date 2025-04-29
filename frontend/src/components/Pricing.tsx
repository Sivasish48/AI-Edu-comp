import { useState } from "react"
import { Button } from "../components/ui/button"
import { Badge } from "./../components/ui/badge"
import { cn } from "../lib/utils"
import { ArrowBigRight, Check, X } from "lucide-react"
import { motion } from 'framer-motion';

interface Feature {
  name: string
  description: string
  included: boolean
}

interface PricingTier {
  name: string
  price: {
    monthly: number
    yearly: number
  }
  description: string
  features: Feature[]
  highlight?: boolean
  badge?: string
  icon: React.ReactNode
  hideButton?: boolean
}

interface PricingSectionProps {
  tiers: PricingTier[]
  className?: string
}

function PricingSection({ tiers, className }: PricingSectionProps) {
  const [isYearly, setIsYearly] = useState(false)

  const buttonStyles = {
    default: cn(
      "h-10 bg-white dark:bg-zinc-900",
      "hover:bg-zinc-50 dark:hover:bg-zinc-800",
      "text-zinc-900 dark:text-zinc-100",
      "border border-zinc-200 dark:border-zinc-800",
      "hover:border-zinc-300 dark:hover:border-zinc-700",
      "shadow-sm hover:shadow-md",
      "text-xs font-medium",
    ),
    highlight: cn(
      "h-10 bg-zinc-900 dark:bg-zinc-100",
      "hover:bg-zinc-800 dark:hover:bg-zinc-300",
      "text-white dark:text-zinc-900",
      "shadow-[0_1px_10px_rgba(0,0,0,0.1)]",
      "hover:shadow-[0_1px_15px_rgba(0,0,0,0.15)]",
      "font-semibold text-sm",
    ),
  }

  const badgeStyles = cn(
    "px-3 py-1 text-xs font-medium",
    "bg-zinc-900 dark:bg-zinc-100",
    "text-white dark:text-zinc-900",
    "border-none shadow-lg",
  )

  return (
    <section
      className={cn(
        "relative bg-[#030303] text-foreground",
        "py-6 px-3 sm:py-8 md:py-12 lg:py-16",
        "overflow-hidden",
        className,
      )}
    >
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-3 mb-6 sm:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 p-3 sm:p-4"
          >
            <motion.h2
              initial={{ 
                backgroundPosition: "200% 50%",
                opacity: 0.5
              }}
              whileInView={{ 
                backgroundPosition: "0% 50%",
                opacity: 1
              }}
              transition={{ 
                duration: 1.9,
                ease: "easeInOut"
              }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl p-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 bg-[length:200%_100%] text-center"
            >
              Simple, Transparent Pricing
            </motion.h2>
          </motion.div>
          <div className="inline-flex items-center p-1 bg-black dark:bg-zinc-800/50 rounded-full border border-zinc-200 dark:border-zinc-700 shadow-sm">
            {["Monthly", "Yearly"].map((period) => (
              <button
                key={period}
                onClick={() => setIsYearly(period === "Yearly")}
                className={cn(
                  "px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 text-xs font-medium rounded-full transition-all duration-300",
                  (period === "Yearly") === isYearly
                    ? "  !bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 dark:bg-zinc-100 text-black dark:text-zinc-900 shadow-lg"
                    : "text-white dark:text-zinc-400  ",
                )}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative group",
                "rounded-xl sm:rounded-2xl transition-all duration-300",
                "flex flex-col",
                "bg-transparent", 
                "border",
                tier.highlight
                  ? "border-zinc-400/50 dark:border-zinc-400/20 shadow-md"
                  : "border-zinc-200 dark:border-zinc-700 shadow-sm",
                "hover:translate-y-0 hover:shadow-md",
              )}
            >
              {tier.badge && tier.highlight && (
                <div className="absolute -top-2 sm:-top-3 left-3 sm:left-4">
                  <Badge className={badgeStyles}>{tier.badge}</Badge>
                </div>
              )}

              <div className="p-4 sm:p-5 flex-1">
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={cn(
                      "p-1.5 sm:p-2 rounded-md sm:rounded-lg",
                      tier.highlight
                        ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
                        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400",
                    )}
                  >
                    {tier.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white dark:text-zinc-100">
                    {tier.name}
                  </h3>
                </div>

                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl font-bold text-white ">
                      ${isYearly ? tier.price.yearly : tier.price.monthly}
                    </span>
                    <span className="text-xs text-white dark:text-zinc-400">
                      /{isYearly ? "year" : "month"}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-white ">
                    {tier.description}
                  </p>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  {tier.features.map((feature) => (
                    <div key={feature.name} className="flex gap-2 sm:gap-3">
                      <div
                        className={cn(
                          "mt-0.5 p-0.5 rounded-full transition-colors duration-200",
                          feature.included
                            ? "text-emerald-600 dark:text-emerald-400"
                            : "text-red-500 dark:text-red-400",
                        )}
                      >
                        {feature.included ? (
                          <Check className="w-3 h-3" />
                        ) : (
                          <X className="w-3 h-3" />
                        )}
                      </div>
                      <div>
                        <div className="text-xs text-zinc-400 dark:text-zinc-400">
                          {feature.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {!tier.hideButton && (
                <div className="p-4 sm:p-5 pt-0 mt-auto">
                  <Button
                    className={cn(
                      "w-full relative transition-all duration-300 !bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 text-xs",
                      tier.highlight
                        ? buttonStyles.highlight
                        : buttonStyles.default,
                    )}
                  >
                    <span className="text-black font-bold relative z-10 flex items-center justify-center gap-1">
                      {tier.highlight ? (
                        <>
                          Buy now
                          <ArrowBigRight className="w-2.5 h-2.5" />
                        </>
                      ) : (
                       <></>
                      )}
                    </span>
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { PricingSection }