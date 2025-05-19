"use client"

import type React from "react"
import { useState, useRef, useEffect, useLayoutEffect } from "react"
import { gsap } from "gsap"
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin"
import styles from "@/components/plant-animation.module.css"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(DrawSVGPlugin)
}

// Types
interface SceneProps {
  className?: string
}

interface PlantProps {
  id: number
  x: number
  y: number
  parentTimeline: gsap.core.Timeline
  maxHeight: number
  minHeight: number
}

interface LeafProps {
  id: string
  x: number
  y: number
  size: number
  side: number
  delay: number
  parentTimeline: gsap.core.Timeline
}

// Settings and utilities
const getSettings = () => {
  if (typeof window === "undefined") {
    return {
      colors: {
        background: "#9ab3f5",
        fill: "#a3d8f4",
        stroke: "#2d3436",
      },
      animation: {
        height: 800, // Default height for SSR
        width: 1200, // Default width for SSR
        maxPlantCount: 5,
        minPlantCount: 1,
      },
      plant: {
        maxHeight: 0.75,
        minHeight: 0.45,
        minNodes: 3,
        maxNodes: 6,
        strokeWidth: 2,
      },
      durations: {
        leaf: 0.035,
        stem: 0.008,
      },
      isAnimationOk: true,
    }
  }

  return {
    colors: {
      background: "#007a55",
      fill: "#00a63e",
      stroke: "#2d3436",
    },
    animation: {
      height: window.innerHeight,
      width: window.innerWidth,
      maxPlantCount: 5,
      minPlantCount: 1,
    },
    plant: {
      maxHeight: 0.75,
      minHeight: 0.45,
      minNodes: 3,
      maxNodes: 6,
      strokeWidth: window.innerHeight < 300 ? 1.25 : 2,
    },
    durations: {
      leaf: 0.035,
      stem: 0.008,
    },
    isAnimationOk: window.matchMedia("(prefers-reduced-motion: no-preference)").matches,
  }
}

const utils = {
  getRandFromRange: (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  },
}

// Leaf Component
const Leaf: React.FC<LeafProps> = ({ id, x, y, size, side, delay, parentTimeline }) => {
  const settings = getSettings()
  const leafRef = useRef<SVGGElement>(null)
  const stemRef = useRef<SVGPathElement>(null)
  const substemsLeftRef = useRef<Array<SVGPathElement | null>>([])
  const substemsRightRef = useRef<Array<SVGPathElement | null>>([])

  // Leaf properties
  const hasSolidFill = Math.random() > 0.75
  const hasMainStem = !hasSolidFill && Math.random() > 0.3
  const hasLeftSide = hasMainStem && Math.random() > 0.65
  const hasRightSide = hasMainStem && Math.random() > 0.65
  const rotation = utils.getRandFromRange(40, 70) * side

  const substemSpacing = 4 * settings.plant.strokeWidth
  const substemCount = Math.floor(size / substemSpacing / settings.plant.strokeWidth)

  // Get leaf path
  const getLeafPath = () => {
    const middle = size / 2
    const width = size / 3
    return `M ${x} ${y} Q ${x - width} ${y - middle} ${x} ${y - size} Q ${x + width} ${y - middle} ${x} ${y} Z`
  }

  // Animation effect
  useEffect(() => {
    if (!settings.isAnimationOk || !leafRef.current) return

    const timeline = gsap.timeline()
    const duration = size * settings.durations.leaf

    gsap.set(leafRef.current, { transformOrigin: "50% 100%" })

    timeline.from(leafRef.current, {
      duration: duration * 1.1,
      delay: delay,
      ease: "power4.out",
      rotation: 0,
      scale: 0,
    })

    if (stemRef.current) {
      timeline.fromTo(
        stemRef.current,
        {
          drawSVG: "0% 0%",
        },
        {
          duration: duration,
          delay: duration * 0.15,
          ease: "power3.out",
          drawSVG: "0% 100%",
        },
        "<",
      )
    }

    if (hasLeftSide) {
      timeline.fromTo(
        substemsLeftRef.current.filter(Boolean),
        {
          drawSVG: "0% 0%",
        },
        {
          duration: duration * 0.5,
          ease: "power2.out",
          drawSVG: "0% 100%",
          stagger: 0.4,
        },
        "<",
      )
    }

    if (hasRightSide) {
      timeline.fromTo(
        substemsRightRef.current.filter(Boolean),
        {
          drawSVG: "0% 0%",
        },
        {
          duration: duration * 0.5,
          ease: "power2.out",
          drawSVG: "0% 100%",
          stagger: 0.4,
        },
        "<",
      )
    }

    parentTimeline.add(timeline, "<")

    // Cleanup
    return () => {
      timeline.kill()
    }
  }, [delay, hasLeftSide, hasRightSide, parentTimeline, size, settings.durations.leaf, settings.isAnimationOk])

  const leafPath = getLeafPath()

  return (
    <g className="leaf" transform={`rotate(${rotation} ${x} ${y})`} ref={leafRef}>
      <defs>
        <clipPath id={`leaf-${id}`} clipPathUnits="userSpaceOnUse">
          <path d={leafPath} />
        </clipPath>
      </defs>
      <path className=" outline-none" d={leafPath} fill={hasSolidFill ? settings.colors.stroke : settings.colors.fill} />

      {hasMainStem && <path className="leaf-stem" d={`M ${x} ${y} L ${x} ${y - size}`} ref={stemRef} />}

      {hasLeftSide && (
        <g className="petalStems" clipPath={`url(#leaf-${id})`}>
          {[...Array(substemCount)].map((_, i) => {
            const yStart = y - (i * substemSpacing * settings.plant.strokeWidth + substemSpacing)
            const yEnd = yStart - 10 * settings.plant.strokeWidth

            return (
              <path
                key={`${id}-substem-left-${i}`}
                ref={(el) => { substemsLeftRef.current[i] = el; }}
                d={`M ${x} ${yStart} L ${x + (size / 6) * -1} ${yEnd}`}
              />
            )
          })}
        </g>
      )}

      {hasRightSide && (
        <g className="petalStems" clipPath={`url(#leaf-${id})`}>
          {[...Array(substemCount)].map((_, i) => {
            const yStart = y - (i * substemSpacing * settings.plant.strokeWidth + substemSpacing)
            const yEnd = yStart - 10 * settings.plant.strokeWidth

            return (
              <path
                key={`${id}-substem-right-${i}`}
                ref={(el) => { substemsRightRef.current[i] = el; }}
                d={`M ${x} ${yStart} L ${x + (size / 6) * 1} ${yEnd}`}
              />
            )
          })}
        </g>
      )}
    </g>
  )
}

// Plant Component
const Plant: React.FC<PlantProps> = ({ id, x, y, parentTimeline, maxHeight, minHeight }) => {
  const settings = getSettings()
  const stemRef = useRef<SVGPathElement>(null)

  // Plant properties
  const height = utils.getRandFromRange(minHeight, maxHeight)
  const nodes = utils.getRandFromRange(settings.plant.minNodes, settings.plant.maxNodes)
  const stemDuration = height * settings.durations.stem
  const plantDelay = Math.random() * 2
  const step = height / nodes

  // Animation effect
  useEffect(() => {
    if (!settings.isAnimationOk || !stemRef.current || !parentTimeline) return

    const timeline = gsap.timeline()

    timeline.fromTo(
      stemRef.current,
      {
        drawSVG: "0% 0%",
      },
      {
        duration: stemDuration,
        ease: "linear", 
        drawSVG: "0% 100%",
      },
      `<+${plantDelay}`,
    )

    parentTimeline.add(timeline, "<")

    // Cleanup
    return () => {
      timeline.kill()
    }
  }, [parentTimeline, plantDelay, stemDuration, settings.isAnimationOk])

  return (
    <g className="plant">
      <path className="stem" d={`M ${x} ${y} L ${x} ${y - height}`} ref={stemRef} />

      {[...Array(nodes)].map((_, i) => {
        const leafY = y - step * (i + 1)
        const size = height * 0.35 - height * 0.045 * i
        const delay = (stemDuration / nodes) * (i + 1)

        return (
          <g className="leaves" key={`leaf-group-${i}`}>
            <Leaf
              x={x}
              y={leafY}
              size={size}
              side={1}
              id={`${id}-${i}L`}
              parentTimeline={parentTimeline}
              delay={delay + plantDelay}
            />
            <Leaf
              x={x}
              y={leafY}
              size={size}
              side={-1}
              id={`${id}-${i}R`}
              parentTimeline={parentTimeline}
              delay={delay + plantDelay}
            />
          </g>
        )
      })}
    </g>
  )
}

// Main Scene Component
const PlantAnimation: React.FC<SceneProps> = ({ className }) => {
  // const [key, setKey] = useState<number>(Math.random())
  const settings = getSettings()
  const timelineRef = useRef<gsap.core.Timeline | null>(null)
  const [isReady, setIsReady] = useState(false)

  // Scene properties
  const height = settings.animation.height
  const width = settings.animation.width
  const plantCount = utils.getRandFromRange(settings.animation.minPlantCount, settings.animation.maxPlantCount)
  const margin = (height * settings.plant.maxHeight) / settings.plant.maxNodes
  const plantSection = (width - 2 * margin) / plantCount

  // Create timeline in effect to handle cleanup
  useLayoutEffect(() => {
    timelineRef.current = gsap.timeline()
    setIsReady(true)
    
    // Cleanup function
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill()
        timelineRef.current = null
      }
      setIsReady(false)
    }
  }, [])

  // Update function with proper cleanup
  // const update = () => {
  //   setIsReady(false)
  //   if (timelineRef.current) {
  //     timelineRef.current.kill()
  //     timelineRef.current = null
  //   }
  //   setKey(Math.random())
  // }

  return (
    <div className={`${styles.animation} ${className || ""}`}>
      <svg
        className={styles.scene}
        // key={key}
        stroke={settings.colors.stroke}
        strokeWidth={settings.plant.strokeWidth}
        strokeLinecap="round"
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax slice"
      >
        <rect x={0} y={0} height={height} width={width} fill={settings.colors.background} stroke="none" />

        {isReady && [...Array(plantCount)].map((_, i) => (
          <Plant
            key={`plant-${i}-${i}`}
            id={i}
            x={margin + (i + 0.5) * plantSection}
            y={height}
            parentTimeline={timelineRef.current!}
            maxHeight={height * settings.plant.maxHeight}
            minHeight={height * settings.plant.minHeight}
          />
        ))}
      </svg>

      {/* <button className={styles.btn} onClick={update} type="button">
        again
      </button> */}
    </div>
  )
}

export default PlantAnimation
