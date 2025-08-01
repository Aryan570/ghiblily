"use client"
import type React from "react"
import { useState, useRef, useEffect, useLayoutEffect } from "react"
import { gsap } from "gsap"
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin"
import styles from "@/components/plant-animation.module.css"
import Link from "next/link"
import { MoveRight, Download, BookOpen, ArrowDown } from "lucide-react"
import Image from "next/image"
import jiji from "@/../public/jiji_s.jpg"
gsap.registerPlugin(DrawSVGPlugin)

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

const getSettings = () => {
  if (typeof window === "undefined") {
    return {
      colors: {
        background: "#9ab3f5",
        fill: "#a3d8f4",
        stroke: "#2d3436",
      },
      animation: {
        height: 800,
        width: 1200,
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

const Leaf: React.FC<LeafProps> = ({ id, x, y, size, side, delay, parentTimeline }) => {
  const settings = getSettings()
  const leafRef = useRef<SVGGElement>(null)
  const stemRef = useRef<SVGPathElement>(null)
  const substemsLeftRef = useRef<Array<SVGPathElement | null>>([])
  const substemsRightRef = useRef<Array<SVGPathElement | null>>([])
  const hasSolidFill = Math.random() > 0.75
  const hasMainStem = !hasSolidFill && Math.random() > 0.3
  const hasLeftSide = hasMainStem && Math.random() > 0.65
  const hasRightSide = hasMainStem && Math.random() > 0.65
  const rotation = utils.getRandFromRange(40, 70) * side

  const substemSpacing = 4 * settings.plant.strokeWidth
  const substemCount = Math.floor(size / substemSpacing / settings.plant.strokeWidth)
  const getLeafPath = () => {
    const middle = size / 2
    const width = size / 3
    return `M ${x} ${y} Q ${x - width} ${y - middle} ${x} ${y - size} Q ${x + width} ${y - middle} ${x} ${y} Z`
  }

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
      <path
        className=" outline-none"
        d={leafPath}
        fill={hasSolidFill ? settings.colors.stroke : settings.colors.fill}
      />

      {hasMainStem && <path className="leaf-stem" d={`M ${x} ${y} L ${x} ${y - size}`} ref={stemRef} />}

      {hasLeftSide && (
        <g className="petalStems" clipPath={`url(#leaf-${id})`}>
          {[...Array(substemCount)].map((_, i) => {
            const yStart = y - (i * substemSpacing * settings.plant.strokeWidth + substemSpacing)
            const yEnd = yStart - 10 * settings.plant.strokeWidth

            return (
              <path
                key={`${id}-substem-left-${i}`}
                ref={(el) => {
                  substemsLeftRef.current[i] = el
                }}
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
                ref={(el) => {
                  substemsRightRef.current[i] = el
                }}
                d={`M ${x} ${yStart} L ${x + (size / 6) * 1} ${yEnd}`}
              />
            )
          })}
        </g>
      )}
    </g>
  )
}

const Plant: React.FC<PlantProps> = ({ id, x, y, parentTimeline, maxHeight, minHeight }) => {
  const settings = getSettings()
  const stemRef = useRef<SVGPathElement>(null)
  const height = utils.getRandFromRange(minHeight, maxHeight)
  const nodes = utils.getRandFromRange(settings.plant.minNodes, settings.plant.maxNodes)
  const stemDuration = height * settings.durations.stem
  const plantDelay = Math.random() * 2
  const step = height / nodes
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

const PlantAnimation: React.FC<SceneProps> = ({ className }) => {
  const settings = getSettings()
  const timelineRef = useRef<gsap.core.Timeline | null>(null)
  const [isReady, setIsReady] = useState(false)
  const height = settings.animation.height
  const width = settings.animation.width
  const plantCount = utils.getRandFromRange(settings.animation.minPlantCount, settings.animation.maxPlantCount)
  const margin = (height * settings.plant.maxHeight) / settings.plant.maxNodes
  const plantSection = (width - 2 * margin) / plantCount

  useLayoutEffect(() => {
    timelineRef.current = gsap.timeline()
    setIsReady(true)
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill()
        timelineRef.current = null
      }
      setIsReady(false)
    }
  }, [])

  return (
    <div className={`border-b-2 quicksand border-teal-800 relative ${styles.animation} ${className || ""}`}>
      <div className="absolute top-0 left-0 right-0 z-20 p-4 md:p-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
              {/* <Sparkles className="w-6 h-6 text-white" /> */}
              <Image className="object-cover" src={jiji} height={200} width={200} alt="cat" />
            </div>
            <div className="hidden sm:block">
              <h2 className="text-xl font-bold tracking-wide text-white drop-shadow-lg">This is Ghiblily</h2>
              <p className="text-sm text-emerald-100 drop-shadow">This is me.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              target="_blank"
              href={"https://drive.google.com/file/d/1NqKV6vp9Cr2h374g52ENN0bsxsnkx-oc/view?usp=sharing"}
              className="group px-4 py-2 md:px-6 md:py-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl text-white font-semibold hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <Download className="w-4 h-4 group-hover:animate-bounce" />
              <span className="hidden sm:inline tracking-wider">Resume</span>
            </Link>
            <Link
              href={"/blogs"}
              className="group px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 group-hover:animate-pulse" />
              <span className="hidden sm:inline text-base tracking-wider">Blogs</span>
              <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 max-w-xs lg:max-w-sm">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 rounded-full text-emerald-100 text-base font-medium mb-4">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              Welcome
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 leading-tight drop-shadow-lg font-right">
              Engineer with a heart 
              <br />
              <span className="text-emerald-300">full of dreams</span>
            </h1>
            <p className="text-emerald-100/90 leading-relaxed text-base md:text-lg drop-shadow">
              I hope you&apos;ll find something here that sparks your imagination or makes you smile.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <div className="text-lg font-bold text-white">30+</div>
              <div className="text-sm text-emerald-200">Projects</div>
            </div>
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <div className="text-lg font-bold text-white">3+</div>
              <div className="text-sm text-emerald-200">Years</div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm text-emerald-200/80 mb-2">Scroll to explore more</p>
            <ArrowDown className="w-5 h-5 text-emerald-300 mx-auto animate-bounce" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 right-6 z-20 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 shadow-xl max-w-xs">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <div>
              <p className="text-white font-medium text-base">Plants Growing</p>
              <p className="text-emerald-200 text-sm">Watch the magic happen</p>
            </div>
          </div>
        </div>
      </div>

      <svg
        className={styles.scene}
        stroke={settings.colors.stroke}
        strokeWidth={settings.plant.strokeWidth}
        strokeLinecap="round"
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax slice"
      >
        <rect x={0} y={0} height={height} width={width} fill={settings.colors.background} stroke="none" />

        {isReady &&
          [...Array(plantCount)].map((_, i) => (
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
    </div>
  )
}

export default PlantAnimation
