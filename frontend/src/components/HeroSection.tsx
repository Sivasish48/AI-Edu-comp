
import { HeroSectionDark } from "./ui/hero-section-dark"
function HeroSection() {
  return (
    <HeroSectionDark
  className="!pb-0"
    title="Introducing EduPal AI"
    subtitle={{
      regular: "Ace your upcoming exam's preparation with ",
      gradient: "AI-powered subject experts.",
    }}
    description="Master complex topics through smart, exam-focused guidance. Learn faster and perform hard work in a smart way."
    ctaText="Start Learning Free"
    ctaHref="#"
/>

  )
}

export default HeroSection