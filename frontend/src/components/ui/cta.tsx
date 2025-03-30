

import { Button } from "../ui/button"
import { cn } from "../../lib/utils"

interface CTAProps {
  smallText?: string
  title: string
  description?: string
  action: {
    text: string
    href: string
  }
  className?: string
}

export function CTA({ smallText, title, description, action, className }: CTAProps) {
  return (
    <section className={cn("w-full overflow-hidden", className)}>
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 rounded-3xl bg-gradient-to-t from-amber-950/90 to-black px-6 py-16 text-center sm:px-10 md:px-16 md:py-20 lg:py-24">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(0,0,0,0))]" />

        {/* Small text at top */}
        {smallText && <span className="text-sm text-gray-400">{smallText}</span>}

        {/* Title */}
        <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">{title}</h2>

        {/* Description */}
        {description && <p className="max-w-2xl text-lg text-gray-300">{description}</p>}

        {/* Action Button */}
        <div className="mt-4">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-100 px-8 py-6 text-base font-medium h-auto"
            asChild
          >
            <a href={action.href}>{action.text}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

