import React from 'react'

const Projects = () => {
    return (
        <section id='projects' className='w-full flex flex-col justify-center items-center my-16'>
            <div className='flex flex-col justify-center items-center w-full max-w-6xl'>
                <div>
                    <p>Projects</p>
                </div>
                <div>
                    <p>Project 1</p>
                    <p>Project 2</p>
                    <p>Project 3</p>
                </div>
            </div>
            <div className='w-full max-w-6xl flex justify-center items-center'><hr className="h-px w-full mx-2 max-w-6xl my-8 bg-[#ededed] border-0" /></div>
        </section>
    )
}

export default Projects
