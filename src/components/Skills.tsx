/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { Code, Terminal, Globe, Sparkles } from "lucide-react"
import Image from "next/image"

const skillNodes = [
    { id: "rust", name: "Rust", x: 20, y: 30, category: "core", icon: "/rust.svg", connections: ["cpp", "algorithms"] },
    { id: "cpp", name: "C++", x: 35, y: 30, category: "core", icon: "/c-plusplus.svg", connections: [] },
    { id: "algorithms", name: "Algorithms", x: 50, y: 20, category: "core", icon: "/leetcode.svg", connections: ["sql", "cpp"] },
    { id: "nodejs", name: "Node.js", x: 65, y: 35, category: "core", icon: "/node.svg", connections: ["sql", "react", "nextjs"] },
    { id: "sql", name: "SQL", x: 80, y: 30, category: "core", icon: "/sql.svg", connections: ["mongodb"] },

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
        connections: ["html", "tailwind", "git"],
    },
    { id: "html", name: "HTML/CSS", x: 75, y: 60, category: "web", icon: "/html.svg", connections: ["tailwind"] },
    { id: "tailwind", name: "Tailwind", x: 85, y: 75, category: "web", icon: "/tailwind.svg", connections: [] },

    { id: "mongodb", name: "MongoDB", x: 25, y: 90, category: "tools", icon: "/mongo.svg", connections: ["postgresql"] },
    { id: "postgresql", name: "PostgreSQL", x: 40, y: 95, category: "tools", icon: "/postgresql.svg", connections: ["sql"] },
    { id: "git", name: "Git", x: 55, y: 95, category: "tools", icon: "/git_r.svg", connections: ["neovim", "rust"] },
    { id: "neovim", name: "NeoVim", x: 70, y: 90, category: "tools", icon: "/Neovim-mark.svg", connections: ["davinci"] },
    { id: "davinci", name: "DaVinci", x: 85, y: 90, category: "tools", icon: "/resolve.svg", connections: [] },
]

const categories = {
    core: { name: "Core", color: "#3B82F6", icon: Code },
    web: { name: "Web", color: "#10B981", icon: Globe },
    tools: { name: "Tools", color: "#8B5CF6", icon: Terminal },
}

const SkillNode = ({ node, isActive, onHover, onLeave }: any) => {
    const category = categories[node.category as keyof typeof categories]

    return (
        <div
            className={`
        absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer
        transition-all duration-700 ease-out group
        ${isActive ? "z-30" : "z-10"}
      `}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            onMouseEnter={() => onHover(node)}
            onMouseLeave={onLeave}
        >
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
                <Image src={node.icon} height={40} width={40} alt="skill_image" />
            </div>
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

    const backgroundDots = useMemo(
        () =>
            Array.from({ length: 50 }, () => ({
                left: Math.random() * 100,
                top: Math.random() * 100,
                animationDelay: Math.random() * 5,
                animationDuration: 2 + Math.random() * 3,
            })),
        []
    )

    return (
        <div className="min-h-screen  relative overflow-hidden quicksand bg-gray-900 -my-[1px]">
            <div className="absolute inset-0">
                {backgroundDots.map((dot, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-gray-200 rounded-full animate-pulse"
                        style={{
                            left: `${dot.left}%`,
                            top: `${dot.top}%`,
                            animationDelay: `${dot.animationDelay}s`,
                            animationDuration: `${dot.animationDuration}s`,
                        }}
                    />
                ))}
            </div>
            <div
                className={`
          relative z-10 text-center pt-20 transition-all duration-1000
          ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
            >
                <div className="relative max-w-md mx-auto">
                    <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-gray-600"></div>
                    <div className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2 border-gray-600"></div>
                    <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2 border-gray-600"></div>
                    <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-gray-600"></div>
                    <div className="py-8 px-12">
                        <div className="flex items-center justify-center gap-6 mb-2">
                            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gray-500"></div>
                            <Sparkles className="w-5 h-5 text-gray-500" />
                            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gray-500"></div>
                        </div>

                        <h1 className="text-6xl md:text-7xl font-bold text-white italic tracking-tight leading-none font-right">
                            Skills
                        </h1>

                        <div className="flex items-center justify-center gap-6 mt-2">
                            <div className="w-8 h-px bg-gradient-to-r from-transparent to-gray-600"></div>
                            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                            <div className="w-8 h-px bg-gradient-to-l from-transparent to-gray-600"></div>
                        </div>
                    </div>
                </div>
                <p className="text-gray-400 mt-5 text-lg font-light tracking-wide">Things I have learnt over the years.</p>
            </div>
            <div className="relative w-full h-full ">
                <div ref={containerRef} className="relative w-full h-[70vh] mx-auto max-w-6xl mb-16">
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
        </div>
    )
}
