
import { HeroSectionDark } from "./ui/hero-section-dark"
function HeroSection() {
  return (
    <HeroSectionDark
    title="Introducing EduPal AI"
    subtitle={{
      regular: "Ace your upcoming exam's preparation with ",
      gradient: "AI-powered subject experts.",
    }}
    description="Master complex topics through smart, exam-focused guidance. Learn faster with interactive Q&A tailored for engineering students."
    ctaText="Start Learning Free"
    ctaHref="#"
/>
  )
}

export default HeroSection