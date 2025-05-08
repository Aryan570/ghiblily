import React from 'react'

const Test = () => {
  return (
    <div className='min-h-[200vh]'>
      
    </div>
  )
}

export default Test

/* 
"use client"

import { useEffect, useRef } from "react"
import Lenis from "@studio-freight/lenis"
import { ArrowUpRight, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

// Sample project data - replace with your own
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with payment integration and inventory management.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    id: 2,
    title: "AI Content Generator",
    description: "An AI-powered application that generates marketing copy and social media content.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "OpenAI", "Node.js", "MongoDB"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    id: 3,
    title: "Task Management Dashboard",
    description: "A collaborative task management tool with real-time updates and analytics.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Vue.js", "Firebase", "Chart.js", "Sass"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    id: 4,
    title: "Fitness Tracking App",
    description: "A mobile-first application for tracking workouts, nutrition, and fitness goals.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React Native", "GraphQL", "AWS", "Redux"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    id: 5,
    title: "Real Estate Marketplace",
    description: "A platform connecting property buyers, sellers, and agents with virtual tours.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Angular", "Express", "PostgreSQL", "Three.js"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
  },
]

export default function HorizontalProjects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    })

    // Store the original scroll position and total scrollable width
    let scrollPosition = 0
    const scrollContainer = containerRef.current
    const section = sectionRef.current

    if (!scrollContainer || !section) return

    // Calculate the total scrollable width
    const totalWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth

    // Get section dimensions for scroll calculations
    const sectionHeight = section.clientHeight
    const sectionTop = section.offsetTop

    // Handle scroll events
    const handleScroll = () => {
      if (!scrollContainer || !section) return

      // Get current scroll position relative to the section
      const scrollTop = window.scrollY - sectionTop

      // Only apply horizontal scroll when within the section
      if (scrollTop >= 0 && scrollTop <= sectionHeight) {
        // Calculate horizontal scroll position based on vertical scroll
        const scrollProgress = scrollTop / sectionHeight
        scrollPosition = totalWidth * scrollProgress

        // Apply horizontal scroll
        scrollContainer.scrollLeft = scrollPosition
      }
    }

    // Set up Lenis scroll event
    lenis.on("scroll", handleScroll)

    // Start the Lenis animation loop
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Clean up
    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative h-[300vh] bg-black text-white">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="px-6 py-12 md:px-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">My Projects</h2>
          <p className="text-lg md:text-xl max-w-md mb-12 text-gray-300">
            Scroll to explore my latest work and projects. Each represents my skills and passion for creating meaningful
            digital experiences.
          </p>
        </div>

        <div
          ref={containerRef}
          className="flex items-start gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="min-w-[350px] md:min-w-[450px] snap-start bg-gray-900 rounded-xl overflow-hidden flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 border-gray-700 hover:bg-gray-800"
                    asChild
                  >
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex items-center gap-2" asChild>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
*/