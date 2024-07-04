import React from "react";
import { MacbookScroll } from "./ui/macbook-scroll"; // Adjust the path as per your project structure

export function Macbook() {
  return (
    <div className="relative overflow-hidden dark:bg-black w-full h-screen">
      {/* Gradient overlays */}
      <div className="absolute z-0 w-40% h-35% top-0 bg-blue-500" />
      <div className="absolute z-0 w-40% h-35% bottom-0 right-0 bg-blue-500" />

      {/* MacbookScroll component */}
      <MacbookScroll
        src="https://i.ibb.co/nnVYTtX/Screenshot-2024-07-04-205755.png"
        showGradient={false}
        title={
          <span>
            Explore the Creative and Technical Projects <br /> I've Crafted.
          </span>
        }
      />
    </div>
  );
}
