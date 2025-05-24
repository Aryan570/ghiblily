import Image from 'next/image'
import React from 'react'
import TagSkill from '@/components/TagSkill'

const WebSkills = [
    {
        skill: "HTML",
        url: "/html.svg"
    },
    {
        skill: "CSS",
        url: "/css.svg"
    },
    {
        skill: "JavaScript",
        url: "/js.svg"
    },
    {
        skill: "TypeScript",
        url: "/typescript-icon.svg"
    },
    {
        skill: "React",
        url: "/react.svg"
    },
    {
        skill: "Next.js",
        url: "/nextjs-icon.svg"
    },
    {
        skill: "TailwindCSS",
        url: "/tailwind.svg"
    },
    {
        skill : "shadcn",
        url : "/shad.svg"
    }
]

const CoreSkills = [
    {
        skill: "Rust",
        url: "/rust.svg"
    },
    {
        skill: "C++",
        url: "/c-plusplus.svg"
    },
    {
        skill : "Data Structures & Algorithms",
        url : "/leetcode.svg"
    },
    {
        skill: "NodeJS",
        url: "/node.svg"
    },
    {
        skill: "SQL",
        url: "/sql.svg"
    }
]

const OtherSkills = [
    {
        skill: "MongoDB",
        url: "/mongo.svg"
    },
    {
        skill : "PostgreSQL",
        url : "/postgresql.svg"
    },
    {
        skill : "Git",
        url : "/git_r.svg"
    },
    {
        skill : "NeoVim",
        url : "/Neovim-mark.svg"
    },
    {
        skill : "Davinci Resolve",
        url : "/resolve.svg"
    },
]
export default function Skills() {
    return (
        <div className='w-screen flex flex-col items-center'>
            <h1 className='decoration-wavy underline decoration-1 underline-offset-2 text-3xl float-left max-w-6xl w-full font-bold'>skills</h1>
            <div className='max-w-6xl flex justify-center items-center w-full mt-8'>
                <div className='grid grid-cols-12 grid-rows-12 gap-4 w-full'>
                    <div className='row-start-1 col-start-5 row-span-4 col-span-4 rotate-2 relative hover:rotate-0 transition-transform duration-300'>
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-emerald-600/80 rotate-6"></div>
                        <div className='flex flex-col rounded-2xl overflow-hidden bg-blue-500 border-4 border-white shadow-2xl shadow-emerald-400'>
                            <div className='w-full flex justify-center items-center bg-pink-400'>
                                <div className='flex gap-2 justify-center items-center'>
                                    <Image src='/setting.svg' height={10} width={30} alt='core' />
                                    <p className='decoration-wavy underline decoration-1 underline-offset-2 text-2xl font-bold'>Core</p>
                                </div>
                            </div>
                            <div className='p-2 text-lg w-full'>
                                <div className="flex flex-wrap gap-2">
                                    {CoreSkills.map((s) => (
                                        <TagSkill key={s.skill} skill={s.skill} url={s.url} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row-start-5 col-start-1 row-span-4 col-span-4 -rotate-2 relative hover:rotate-0 transition-transform duration-300'>
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-emerald-600/80 -rotate-4"></div>
                        <div className='flex flex-col rounded-2xl overflow-hidden bg-blue-500 border-4 border-white shadow-2xl shadow-emerald-400'>
                            <div className='w-full flex justify-center items-center bg-pink-400'>
                                <div className='flex gap-2 justify-center items-center'>
                                    <Image className='-m-2' src='/web.svg' height={10} width={50} alt='web' />
                                    <p className='decoration-wavy underline decoration-1 underline-offset-2 text-2xl font-bold'>Web Development</p>
                                </div>
                            </div>
                            <div className='p-2 text-lg w-full'>
                                <div className="flex flex-wrap gap-2">
                                    {WebSkills.map((s) => (
                                        <TagSkill key={s.skill} skill={s.skill} url={s.url} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row-start-5 col-start-9 row-span-4 col-span-4 rotate-2 relative hover:rotate-0 transition-transform duration-300'>
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-emerald-600/80 rotate-6"></div>
                        <div className='flex flex-col rounded-2xl overflow-hidden bg-blue-500 border-4 border-white shadow-2xl shadow-emerald-400'>
                            <div className='w-full flex justify-center items-center bg-pink-400'>
                                <div className='flex gap-2 justify-center items-center'>
                                    <Image src='/tools.svg' height={10} width={25} alt='others' />
                                    <p className='decoration-wavy underline decoration-1 underline-offset-2 text-2xl font-bold'>Others</p>
                                </div>
                            </div>
                            <div className='p-2 text-lg w-full'>
                                <div className="flex flex-wrap gap-2">
                                    {OtherSkills.map((s) => (
                                        <TagSkill key={s.skill} skill={s.skill} url={s.url} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
