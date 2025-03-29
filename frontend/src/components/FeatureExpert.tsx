import React, { useState } from "react";
import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { MessageSquare } from "lucide-react";

type Expert = {
  name: string;
  subject: string;
  keywords: string[];
  imageSrc: string;
};

export function AIExpertCards() {
  const [hovered, setHovered] = useState<number | null>(null);

  const experts: Expert[] = [
    {
      name: "Dr. Alan Turing",
      subject: "Operating Systems",
      keywords: [
        "Process Management", 
        "Memory Allocation", 
        "Scheduling",
        "Concurrency",
        "Virtual Memory"
      ],
      imageSrc: "/public/Os.png",
    },
    {
      name: "Dr. Barbara Liskov",
      subject: "OOP Principles",
      keywords: [
        "Encapsulation", 
        "Inheritance", 
        "Polymorphism",
        "Abstraction",
        "Design Patterns",
      ],
      imageSrc: "/public/Oops.png",
    },
    {
      name: "Dr. Donald Knuth",
      subject: "Data Structures",
      keywords: [
        "Algorithms", 
        "Complexity Analysis", 
        "Optimization",
        "Dynamic Programming"
      ],
      imageSrc: "/public/Dsa.png",
    },
    {
      name: "Dr. Vint Cerf",
      subject: "Computer Networking",
      keywords: [
        "Routing Protocols", 
        "Network Security",
        "DNS",
        "Load Balancing"
      ],
      imageSrc: "/public/Cn.png",
    },
    {
      name: "Dr. Fei-Fei Li",
      subject: "AI & ML",
      keywords: [
        "Neural Networks", 
        "Computer Vision", 
        "NLP",
        "Deep Learning",
        "Reinforcement Learning",
        "Model Optimization"
      ],
      imageSrc: "/public/Mlai.png",
    },
    {
      name: "Dr. Michael Stonebraker",
      subject: "Database Systems",
      keywords: [

        "Query Optimization",
        "Indexing",
        "Transactions",
        "Database Design"
      ],
      imageSrc: "/public/Cs.png",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-10 max-w-7xl mx-auto px-4 w-full">
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
        "rounded-xl overflow-hidden h-[35rem] w-[20rem] transition-all duration-300 flex flex-col gap-4",
        "bg-[#121218] border border-[#2a2a35] mx-auto",
        hovered !== null && hovered !== index && "opacity-80",
        hovered === index && [
          "scale-[1.02]",
          "shadow-[0_0_15px_rgba(139,92,246,0.15)]",
          "border-[#3b3b4f]",
        ],
      )}
    >
      {/* Image section */}
      <div className="relative h-[55%] w-full overflow-hidden">
        <img
          src={expert.imageSrc || "/placeholder.svg"}
          alt={expert.name}
          className={cn(
            "w-full h-full object-cover object-center transition-transform duration-300",
            hovered === index && "scale-105"
          )}
        />
      </div>

      {/* Content section with increased space for badges */}
      <div className="flex flex-col p-5 h-[45%]">
        <div className="mb-3 space-y-1">
          <h3 className="text-xl font-semibold text-white">
            {expert.name}
          </h3>
          <p className="text-sm font-medium text-purple-300">
            {expert.subject} Expert
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4 min-h-[6rem]">
          {expert.keywords.map((keyword) => (
            <Badge 
              key={keyword}
              variant="outline"
              className="text-[0.7rem] text-purple-300 border-purple-400/30 bg-purple-900/10 hover:bg-purple-900/20 px-2 py-1"
            >
              {keyword}
            </Badge>
          ))}
        </div>

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