import type React from "react"
import { BookOpen, Code, FlaskRoundIcon as Flask, Calculator, Globe, Brain } from "lucide-react"

import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"

interface ExpertContent {
  badge: string
  name: string
  description: string
  buttonText: string
  imgSrc: string
  imgAlt: string
  expertise: string[]
}

interface Expert {
  value: string
  icon: React.ReactNode
  label: string
  content: ExpertContent
}

interface AIExpertsSectionProps {
  badge?: string
  heading?: string
  description?: string
  experts?: Expert[]
}

export default function AIExpertsSection({
  badge = "Meet Our Experts",
  heading = "Learn from AI-powered subject experts",
  description = "Master complex topics through smart, exam-focused guidance with our specialized AI tutors.",
  experts = [
    {
      value: "math",
      icon: <Calculator className="h-auto w-4 shrink-0" />,
      label: "Math Expert",
      content: {
        badge: "Mathematics",
        name: "MathGenius AI",
        description:
          "Master complex mathematical concepts with personalized guidance. From calculus to statistics, get step-by-step solutions and intuitive explanations.",
        buttonText: "Chat with Math Expert",
        imgSrc: "/placeholder.svg?height=400&width=400",
        imgAlt: "Math AI Expert",
        expertise: ["Calculus", "Algebra", "Statistics", "Geometry", "Number Theory"],
      },
    },
    {
      value: "science",
      icon: <Flask className="h-auto w-4 shrink-0" />,
      label: "Science Expert",
      content: {
        badge: "Science",
        name: "SciencePro AI",
        description:
          "Explore scientific concepts with interactive explanations. Get help with physics, chemistry, and biology problems through visual demonstrations and clear explanations.",
        buttonText: "Chat with Science Expert",
        imgSrc: "/placeholder.svg?height=400&width=400",
        imgAlt: "Science AI Expert",
        expertise: ["Physics", "Chemistry", "Biology", "Earth Science", "Astronomy"],
      },
    },
    {
      value: "coding",
      icon: <Code className="h-auto w-4 shrink-0" />,
      label: "Coding Expert",
      content: {
        badge: "Computer Science",
        name: "CodeMaster AI",
        description:
          "Learn programming languages and computer science concepts with hands-on guidance. Get help with debugging, algorithm design, and coding best practices.",
        buttonText: "Chat with Coding Expert",
        imgSrc: "/placeholder.svg?height=400&width=400",
        imgAlt: "Coding AI Expert",
        expertise: ["Python", "JavaScript", "Data Structures", "Algorithms", "Web Development"],
      },
    },
    {
      value: "literature",
      icon: <BookOpen className="h-auto w-4 shrink-0" />,
      label: "Literature Expert",
      content: {
        badge: "Literature & Language",
        name: "LitGenius AI",
        description:
          "Analyze literary works, improve your writing, and master language skills. Get help with essay writing, literary analysis, and language comprehension.",
        buttonText: "Chat with Literature Expert",
        imgSrc: "/placeholder.svg?height=400&width=400",
        imgAlt: "Literature AI Expert",
        expertise: ["Essay Writing", "Literary Analysis", "Grammar", "Creative Writing", "Poetry"],
      },
    },
    {
      value: "history",
      icon: <Globe className="h-auto w-4 shrink-0" />,
      label: "History Expert",
      content: {
        badge: "History & Social Studies",
        name: "HistoryScholar AI",
        description:
          "Explore historical events, cultural contexts, and social developments. Get comprehensive timelines, cause-effect analyses, and historical perspectives.",
        buttonText: "Chat with History Expert",
        imgSrc: "/placeholder.svg?height=400&width=400",
        imgAlt: "History AI Expert",
        expertise: ["World History", "Political Science", "Cultural Studies", "Geography", "Economics"],
      },
    },
    {
      value: "general",
      icon: <Brain className="h-auto w-4 shrink-0" />,
      label: "Study Coach",
      content: {
        badge: "Study Skills & Exam Prep",
        name: "StudyCoach AI",
        description:
          "Develop effective study strategies, time management skills, and exam techniques. Get personalized study plans, memory techniques, and test-taking strategies.",
        buttonText: "Chat with Study Coach",
        imgSrc: "/placeholder.svg?height=400&width=400",
        imgAlt: "Study Coach AI Expert",
        expertise: ["Study Planning", "Memory Techniques", "Test Strategies", "Time Management", "Note-Taking"],
      },
    },
  ],
}: AIExpertsSectionProps) {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge variant="outline" className="border-purple-500 text-purple-300">
            {badge}
          </Badge>
          <h2 className="max-w-3xl text-4xl mt-18 bg-clip-text text-gradient-to-r from-purple-300 to-orange-200">{heading}</h2>
          <p className="text-gray-300 max-w-2xl">{description}</p>
        </div>
        <Tabs defaultValue={experts[0].value} className="mt-20">
          <TabsList className="container flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 bg-transparent">
            {experts.map((expert) => (
              <TabsTrigger
                key={expert.value}
                value={expert.value}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-gray-300 border border-purple-900/50 hover:bg-purple-900/30 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-900 data-[state=active]:to-purple-700 data-[state=active]:text-white data-[state=active]:border-purple-500 transition-all"
              >
                {expert.icon} {expert.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mx-auto mt-10 max-w-screen-xl rounded-2xl bg-[#13113a]/70 p-6 lg:p-12 border border-purple-900/30">
            {experts.map((expert) => (
              <TabsContent
                key={expert.value}
                value={expert.value}
                className="grid place-items-center gap-12 lg:grid-cols-2 lg:gap-10"
              >
                <div className="flex flex-col gap-5">
                  <Badge variant="outline" className="w-fit bg-purple-900/50 text-purple-300 border-purple-500">
                    {expert.content.badge}
                  </Badge>
                  <h3 className="text-3xl font-semibold lg:text-4xl text-white">{expert.content.name}</h3>
                  <p className="text-gray-300 lg:text-lg">{expert.content.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {expert.content.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs rounded-full bg-purple-900/40 text-purple-200 border border-purple-800/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <Button
                    className="mt-4 w-fit gap-2 bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-600 hover:to-purple-400 text-white border-none"
                    size="lg"
                  >
                    {expert.content.buttonText}
                  </Button>
                </div>
                <div className="relative w-full aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-2xl -rotate-6 scale-95 opacity-70"></div>
                  <img
                    src={expert.content.imgSrc || "/placeholder.svg"}
                    alt={expert.content.imgAlt}
                    width={400}
                    height={400}
                    className="rounded-2xl relative z-10 border border-purple-500/30"
                  />
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

