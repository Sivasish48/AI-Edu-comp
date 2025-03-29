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
      description: "Expert in calculus, algebra, and mathematical reasoning with 10+ years of teaching experience.",
      imageSrc: "/public/Oops.png",
    },
    {
      name: "Prof. Alan Turing",
      subject: "Computer Science",
      description: "Specializes in algorithms, data structures, and computational theory.",
      imageSrc: "/public/Os.png",
    },
    {
      name: "Dr. Marie Curie",
      subject: "Physics",
      description: "Expert in quantum mechanics, thermodynamics, and nuclear physics.",
      imageSrc: "/public/Cn.png",
    },
    {
      name: "Prof. Charles Darwin",
      subject: "Biology",
      description: "Specializes in evolutionary biology, genetics, and natural selection.",
      imageSrc: "/public/Cs.png",
    },
    {
      name: "Dr. Rosalind Franklin",
      subject: "Chemistry",
      description: "Expert in organic chemistry, molecular structures, and biochemistry.",
      imageSrc: "/public/Dsa.png",
    },
    {
      name: "Prof. Nikola Tesla",
      subject: "Engineering",
      description: "Specializes in electrical engineering, mechanics, and innovation.",
      imageSrc: "/public/Mlai.png",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 md:px-8 w-full">
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
        "rounded-xl overflow-hidden h-[26rem] w-[20rem] transition-all duration-300 flex flex-col",
        "bg-[#121218] border border-[#2a2a35] mx-auto",
        hovered !== null && hovered !== index && "opacity-80",
        hovered === index && [
          "scale-[1.02]",
          "shadow-[0_0_15px_rgba(139,92,246,0.15)]",
          "border-[#3b3b4f]",
        ],
      )}
    >
      {/* Image section - now exactly matches card width */}
      <div className="relative h-[50%] w-full overflow-hidden">
        <img
          src={expert.imageSrc || "/placeholder.svg"}
          alt={expert.name}
          className={cn(
            "w-full h-full object-cover object-center transition-transform duration-300 brightness-100",
            hovered === index && "scale-105"
          )}
        />
      </div>

      {/* Content section */}
      <div className="flex flex-col p-5 h-[50%]">
        <div className="mb-2 space-y-1">
          <h3 className="text-xl font-semibold text-white">
            {expert.name}
          </h3>
          <p className="text-sm font-medium text-purple-300">
            {expert.subject} Expert
          </p>
        </div>

        <p className="text-sm text-gray-300 mb-4 line-clamp-3 leading-relaxed">
          {expert.description}
        </p>

        <Button
          className={cn(
            "w-full mt-auto transition-all duration-200 flex items-center justify-center gap-2",
            "bg-[#1e1e2a] hover:bg-purple-900 text-white border border-[#3b3b4f]",
            hovered === index && "shadow-[0_0_10px_rgba(139,92,246,0.2)]"
          )}
        >
          <MessageSquare size={16} className="text-purple-300" />
          <span>Start Conversation</span>
        </Button>
      </div>
    </div>
  )
);

ExpertCard.displayName = "ExpertCard";