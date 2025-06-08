/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, useEffect, useRef } from "react"
import { Code, Terminal, Globe, Sparkles } from "lucide-react"
import Image from "next/image"

const skillNodes = [
    // Core Programming
    { id: "rust", name: "Rust", x: 20, y: 30, category: "core", icon: "/rust.svg", connections: ["cpp", "algorithms"] },
    { id: "cpp", name: "C++", x: 35, y: 30, category: "core", icon: "/c-plusplus.svg", connections: [] },
    { id: "algorithms", name: "Algorithms", x: 50, y: 20, category: "core", icon: "/leetcode.svg", connections: ["sql", "cpp"] },
    { id: "nodejs", name: "Node.js", x: 65, y: 35, category: "core", icon: "/node.svg", connections: ["sql", "react"] },
    { id: "sql", name: "SQL", x: 80, y: 30, category: "core", icon: "/sql.svg", connections: ["mongodb"] },

    // Web Development
    { id: "react", name: "React", x: 15, y: 60, category: "web", icon: "/react.svg", connections: ["nextjs", "typescript"] },
    { id: "nextjs", name: "Next.js", x: 30, y: 55, category: "web", icon: "/nextjs-icon.svg", connections: ["typescript", "tailwind"] },
    {
        id: "typescript",
        name: "TypeScript",
        x: 45,
        y: 65,
        category: "web",
        icon: "/typescript-icon.svg",
        connections: ["javascript", "tailwind"],
    },
    {
        id: "javascript",
        name: "JavaScript",
        x: 60,
        y: 75,
        category: "web",
        icon: "/js.svg",
        connections: ["html", "tailwind"],
    },
    { id: "html", name: "HTML/CSS", x: 75, y: 60, category: "web", icon: "/html.svg", connections: ["tailwind"] },
    { id: "tailwind", name: "Tailwind", x: 85, y: 75, category: "web", icon: "/tailwind.svg", connections: [] },

    // Tools & Database
    { id: "mongodb", name: "MongoDB", x: 25, y: 90, category: "tools", icon: "/mongo.svg", connections: ["postgresql", "git"] },
    { id: "postgresql", name: "PostgreSQL", x: 40, y: 95, category: "tools", icon: "/postgresql.svg", connections: ["sql"] },
    { id: "git", name: "Git", x: 55, y: 85, category: "tools", icon: "/git_r.svg", connections: ["neovim"] },
    { id: "neovim", name: "NeoVim", x: 70, y: 90, category: "tools", icon: "/Neovim-mark.svg", connections: ["davinci"] },
    { id: "davinci", name: "DaVinci", x: 85, y: 90, category: "tools", icon: "/resolve.svg", connections: [] },
]

const categories = {
    core: { name: "Core", color: "#3B82F6", icon: Code },
    web: { name: "Web", color: "#10B981", icon: Globe },
    tools: { name: "Tools", color: "#8B5CF6", icon: Terminal },
}

const SkillNode = ({ node, isActive, onHover, onLeave }: any) => {
    const [isVisible, setIsVisible] = useState(false)
    const category = categories[node.category as keyof typeof categories]

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), Math.random() * 1000 + 500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div
            className={`
        absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer
        transition-all duration-700 ease-out group
        ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"}
        ${isActive ? "z-30" : "z-10"}
      `}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            onMouseEnter={() => onHover(node)}
            onMouseLeave={onLeave}
        >
            {/* Node Glow */}
            <div
                className={`
          absolute inset-0 rounded-full blur-lg transition-all duration-500
          ${isActive ? "scale-150 opacity-60" : "scale-100 opacity-30"}
        `}
                style={{
                    backgroundColor: category.color,
                    width: "60px",
                    height: "60px",
                }}
            />

            {/* Node Core */}
            <div
                className={`
          relative w-12 h-12 rounded-full border-2 border-white
          flex items-center justify-center transition-all duration-500
          ${isActive ? "scale-125" : "scale-100 group-hover:scale-110"}
        `}
                style={{
                    backgroundColor: category.color,
                    boxShadow: isActive ? `0 0 30px ${category.color}80` : `0 0 15px ${category.color}40`,
                }}
            >
                {/* <span className="text-lg">{node.icon}</span> */}
                <Image src={node.icon} height={40} width={40} alt="skill_image"/>
            </div>

            {/* Node Label */}
            <div
                className={`
          absolute top-full left-1/2 transform -translate-x-1/2 mt-2
          text-sm font-medium text-gray-200 whitespace-nowrap
          transition-all duration-300
          ${isActive ? "opacity-100 scale-110" : "opacity-70 group-hover:opacity-100"}
        `}
            >
                {node.name}
            </div>

            {/* Pulse Ring */}
            {isActive && (
                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2 animate-ping"
                    style={{
                        borderColor: category.color,
                        width: "60px",
                        height: "60px",
                    }}
                />
            )}
        </div>
    )
}

const ConnectionLine = ({ from, to, isActive }: any) => {
    const [isDrawn, setIsDrawn] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setIsDrawn(true), 2000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <line
                x1={`${from.x}%`}
                y1={`${from.y}%`}
                x2={`${to.x}%`}
                y2={`${to.y}%`}
                stroke={isActive ? "#3B82F6" : "#E5E7EB"}
                strokeWidth={isActive ? "3" : "1"}
                strokeDasharray="5,5"
                className={`transition-all duration-500 ${isDrawn ? "opacity-100" : "opacity-0"}`}
                style={{
                    filter: isActive ? "drop-shadow(0 0 8px #3B82F680)" : "none",
                }}
            />
        </svg>
    )
}

export default function Skills() {
    const [activeNode, setActiveNode] = useState<any>(null)
    const [activeConnections, setActiveConnections] = useState<string[]>([])
    const [isLoaded, setIsLoaded] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    const handleNodeHover = (node: any) => {
        setActiveNode(node)
        setActiveConnections(node.connections)
    }

    const handleNodeLeave = () => {
        setActiveNode(null)
        setActiveConnections([])
    }

    return (
        <div className="min-h-screen  relative overflow-hidden quicksand bg-gray-900 -my-[1px]">
            {/* Animated Background */}
            <div className="absolute inset-0">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-gray-200 rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${2 + Math.random() * 3}s`,
                        }}
                    />
                ))}
            </div>

            {/* Header */}
            <div
                className={`
          relative z-10 text-center pt-12 pb-8 transition-all duration-1000
          ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
            >
                <div className="inline-flex items-center gap-3 mb-4">
                    <Sparkles className="w-8 h-8 text-blue-500" />
                    <h1 className="text-4xl md:text-5xl font-black text-gray-200">Skill <span className="bg-gradient-to-br from-blue-600 to-blue-800 p-2 rounded-lg">Universe</span></h1>
                    {/* <Zap className="w-8 h-8 text-blue-500" /> */}
                </div>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                    Explore the interconnected web of my technical skills and expertise
                </p>
            </div>

            {/* Main Universe Container */}
            <div className="relative w-full h-full ">
                <div ref={containerRef} className="relative w-full h-[70vh] mx-auto max-w-6xl ">
                    {/* Connection Lines */}
                    {skillNodes.map((node) =>
                        node.connections.map((connId) => {
                            const connectedNode = skillNodes.find((n) => n.id === connId)
                            if (!connectedNode) return null

                            const isActive =
                                (activeNode?.id === node.id && activeConnections.includes(connId)) ||
                                (activeNode?.id === connId && node.connections.includes(activeNode.id))

                            return <ConnectionLine key={`${node.id}-${connId}`} from={node} to={connectedNode} isActive={isActive} />
                        }),
                    )}

                    {/* Skill Nodes */}
                    {skillNodes.map((node) => (
                        <SkillNode
                            key={node.id}
                            node={node}
                            isActive={activeNode?.id === node.id || activeConnections.includes(node.id)}
                            onHover={handleNodeHover}
                            onLeave={handleNodeLeave}
                        />
                    ))}
                </div>
            </div>

            {/* Category Legend */}
            {/* <div className="relative z-10 flex justify-center gap-4 mt-8 px-4">
        {Object.keys(categories).map((category) => (
          <CategoryLegend key={category} category={category} isActive={getActiveCategories().includes(category)} />
        ))}
      </div> */}

            {/* Active Skill Info */}
            {/* {activeNode && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <div className="bg-white rounded-xl px-6 py-4 shadow-2xl border border-gray-200">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{activeNode.icon}</span>
              <div>
                <h3 className="font-bold text-gray-800">{activeNode.name}</h3>
                <p className="text-sm text-gray-600">Connected to {activeConnections.length} other skills</p>
              </div>
            </div>
          </div>
        </div>
      )} */}

            {/* Instructions */}
            {/* <div className="relative z-10 text-center mt-8 pb-12">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200">
          <Palette className="w-5 h-5 text-gray-500" />
          <span className="text-gray-700 font-medium">Hover over nodes to explore connections</span>
        </div>
      </div> */}
        </div>
    )
}
