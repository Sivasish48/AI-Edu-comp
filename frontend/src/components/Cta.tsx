import { CTA } from "../components/ui/cta"

export default function CTASection() {
  return (
    <main className=" w-full py-12">
      <CTA
       smallText="Join the future of learning"
       title="Accelerate Education"
       description="Get personalized AI-powered tutoring in computer science concepts."
        action={{
          text: "Get Started",
          href: "/ai-expert",
        }}
      />
    </main>
  )
}