

import './App.css'
import { AIExpertCards } from "../src/components/FeatureExpert"
import  HeroSection  from './components/HeroSection'

function App() {
 

  return (
    <>
  <HeroSection/>
  <main className="flex min-h-screen flex-col items-center justify-center py-16 px-4 bg-black">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-orange-200 relative top-[0.5px]">
          AI Education Companions
        </h1>
        <p className="text-lg font-normal text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Connect with our subject matter experts powered by AI. Choose a specialist below to start learning.
        </p>
      </div>

      <AIExpertCards />
    </main>

    </>
  )
}

export default App
