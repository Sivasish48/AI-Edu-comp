import React, { useState } from "react";
import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import { MessageSquare } from "lucide-react";

type Expert = {
  name: string;
  subject: string;
  description: string;
  imageSrc: string;
};

export function AIExpertCards() {
  const [hovered, setHovered] = useState<number | null>(null);

  const experts: Expert[] = [
    {
      name: "Dr. Ada Lovelace",
      subject: "Mathematics",
      description:
        "Expert in calculus, algebra, and mathematical reasoning with 10+ years of teaching experience.",
      imageSrc: "/placeholder.svg?height=400&width=300",
    },
    {
      name: "Prof. Alan Turing",
      subject: "Computer Science",
      description:
        "Specializes in algorithms, data structures, and computational theory.",
      imageSrc: "/placeholder.svg?height=400&width=300",
    },
    {
      name: "Dr. Marie Curie",
      subject: "Physics",
      description:
        "Expert in quantum mechanics, thermodynamics, and nuclear physics.",
      imageSrc: "/placeholder.svg?height=400&width=300",
    },
    {
      name: "Prof. Charles Darwin",
      subject: "Biology",
      description:
        "Specializes in evolutionary biology, genetics, and natural selection.",
      imageSrc: "/placeholder.svg?height=400&width=300",
    },
    {
      name: "Dr. Rosalind Franklin",
      subject: "Chemistry",
      description:
        "Expert in organic chemistry, molecular structures, and biochemistry.",
      imageSrc: "/placeholder.svg?height=400&width=300",
    },
    {
      name: "Prof. Nikola Tesla",
      subject: "Engineering",
      description:
        "Specializes in electrical engineering, mechanics, and innovation.",
      imageSrc: "/placeholder.svg?height=400&width=300",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto px-4 md:px-8 w-full">
      {experts.map((expert, index) => (
        <ExpertCard
          key={expert.name}
          expert={expert}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}

const ExpertCard = React.memo(
  ({
    expert,
    index,
    hovered,
    setHovered,
  }: {
    expert: Expert;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-xl overflow-hidden h-[26rem] sm:h-[28rem] w-full transition-all duration-300 ease-out flex flex-col",
        "bg-black border border-purple-900",
        "hover:border-purple-700 hover:shadow-md",
        hovered !== null &&
          hovered !== index &&
          "blur-sm scale-[0.98] opacity-80",
        hovered === index && "scale-[1.02] shadow-lg purple-glow"
      )}
    >
      <div className="relative h-[45%] sm:h-1/2 w-full overflow-hidden">
        <div className="absolute inset-0 bg-purple-900/70" />
        <img
          src={expert.imageSrc}
          alt={`${expert.name}, ${expert.subject} Expert`}
          className="absolute h-full w-full object-cover transition-transform duration-500 hover:scale-105 opacity-80"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/placeholder.svg";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div
        className={cn(
          "flex flex-col flex-grow p-5 sm:p-6 transition-all duration-300 relative",
          "after:absolute after:top-0 after:left-[10%] after:right-[10%] after:h-[1px]",
          "after:bg-gradient-to-r after:from-transparent after:via-purple-900 after:to-transparent"
        )}
      >
        <div className="mb-3 space-y-1 animate-subtle-float">
          <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-white">
            {expert.name}
          </h3>
          <p className="text-sm font-medium text-purple-300">
            {expert.subject} Expert
          </p>
        </div>

        <p className="text-sm text-purple-100/90 mb-4 sm:mb-6 flex-grow leading-relaxed">
          {expert.description}
        </p>

        <Button
          className={cn(
            "w-full mt-auto transition-all duration-300 flex items-center justify-center gap-2",
            "bg-purple-900 hover:bg-purple-800 text-white border-none",
            hovered === index ? "translate-y-0" : "translate-y-1"
          )}
        >
          <MessageSquare
            size={16}
            className="text-white"
          />
          <span>Start Conversation</span>
        </Button>
      </div>
    </div>
  )
);

ExpertCard.displayName = "ExpertCard";
