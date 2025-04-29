import { cn } from "../../lib/utils"
import React, { useEffect, useState } from "react"

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: {
    author: {
      name: string
      handle: string
      avatar: string
    }
    text: string
  }[]
  direction?: "left" | "right"
  speed?: "fast" | "normal" | "slow"
  pauseOnHover?: boolean
  className?: string
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollerRef = React.useRef<HTMLUListElement>(null)
  const [start, setStart] = useState(false)

  useEffect(() => {
    addAnimation()
    
    // Handle resize for responsiveness
    const handleResize = () => {
      if (containerRef.current && scrollerRef.current) {
        // Reset and reinitialize on resize for better responsiveness
        setStart(false)
        setTimeout(() => {
          addAnimation()
        }, 50)
      }
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      // Clear any existing cloned items first
      const originalItems = Array.from(scrollerRef.current.children).slice(0, items.length)
      scrollerRef.current.innerHTML = ''
      
      // Re-add original items
      originalItems.forEach(item => {
        scrollerRef.current?.appendChild(item)
      })
      
      // Clone items for infinite effect
      originalItems.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards")
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse")
      }
    }
  }

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s")
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s")
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s")
      }
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full max-w-full overflow-hidden",
        // Using a CSS gradient for fade effect instead of mask-image for better cross-browser support
        "before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-12 before:bg-gradient-to-r before:from-[#030303] before:to-transparent before:content-['']",
        "after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-12 after:bg-gradient-to-l after:from-[#030303] after:to-transparent after:content-['']",
        className,
      )}
      style={{
        // Adding this to prevent blurriness during animation
        willChange: "transform",
        backfaceVisibility: "hidden",
        WebkitFontSmoothing: "subpixel-antialiased"
      }}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
        style={{
          transform: "translateZ(0)", // Hardware acceleration
          willChange: "transform", // Hint for browser optimization
        }}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[280px] max-w-full shrink-0 rounded-2xl border border-zinc-700 bg-[#030303] px-4 py-5 sm:w-[320px] sm:px-6 md:w-[350px] md:px-8 md:py-6 lg:w-[400px]"
            key={item.author.name + idx}
            style={{
              transform: "translateZ(0)", // Apply hardware acceleration to each item
              willChange: "transform"
            }}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 block text-sm leading-[1.6] font-normal text-white">{item.text}</span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <div className="mr-3 h-10 w-10 overflow-hidden rounded-full sm:mr-4 sm:h-12 sm:w-12">
                  <img
                    src={item.author.avatar || "/placeholder.svg"}
                    alt={item.author.name}
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] font-medium text-gray-100">{item.author.name}</span>
                  <span className="text-xs leading-[1.6] font-normal text-gray-200 sm:text-sm">{item.author.handle}</span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  )
}