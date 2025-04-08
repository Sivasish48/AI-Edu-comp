import { Button } from "../ui/button";
import { Facebook, Linkedin, Twitter } from "lucide-react";

function StackedCircularFooter() {
  return (
    <footer className="bg-black text-white py-12 mt-16">
      {" "}
      {/* Added bg-black for contrast */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <h2 className="mb-8 text-3xl font-bold text-white">EduPal AI</h2>{" "}
          {/* Increased size and white text */}
          <div className="mb-8 flex space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-white text-white hover:bg-white/10"
            >
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-white text-white hover:bg-white/10"
            >
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-white text-white hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </div>
          <div className="text-center">
            <p className="text-sm text-white/90">
              {" "}
              {/* Slightly subtle but still bright white */}© 2025 EduPal AI.
              All rights reserved by Sivasish.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { StackedCircularFooter };
