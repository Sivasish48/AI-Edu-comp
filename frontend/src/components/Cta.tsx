import { CTA } from "../components/ui/cta"

export default function CTASection() {
  return (
    <main className=" w-full py-12">
      <CTA
        smallText="Get started"
        title="Start building with Launch UI"
        description="Get started with Launch UI and build your landing page in no time"
        action={{
          text: "Get Started",
          href: "#",
        }}
      />
    </main>
  )
}