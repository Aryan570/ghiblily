import Image from 'next/image';
import React from 'react';

const AboutSection = () => {
  return (
    <section id='AboutSite' name="About" className="bg-gray-100 py-16 font-Pompiere ">
      <hr className="h-px max-w-6xl mx-auto my-8 bg-gray-200 border-0"/>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl mb-6">About this <span className='text-emerald-400'>Site</span></h2>
            <p className="text-gray-700 mb-6 text-xl">
            So, I decided to do something related to Web Development in the summer of 2023, and what&apos;s better than creating your portfolio website? Well, I thought about it and wanted to make something that reflects me and the things that I love. You might have an idea by now that I&apos;m a big Studio Ghibli fan. I decided to make a hybrid Studio Ghibli & Portfolio Website.
            </p>
            <p className="text-gray-700 mb-6 text-xl">
            This website was made using NextJS, TailwindCSS, and a bunch of other react libraries. This may not be the best website in terms of design because I was not following any particular design nor I had any design idea in my mind at the time. This was meant to be something other than professional. The idea was to introduce you to this magical world of Ghibli and myself.
            </p>
            <p className="text-gray-700 text-xl">
            I could have easily made a professional portfolio, but portfolio should reflect the true self and at the time of creating this website, I&apos;m all Ghibli. I wish to redesign the website soon. But for now, I fulfilled my purpose of making a Studio Ghibli-inspired portfolio. Do give me your valuable suggestions and tell me what&apos;s your favorite Studio Ghibli Movie. via Contact.
            </p>
          </div>
          <div>
            <Image
              src="/../public/rises.gif"
              alt="Website_Image"
              width={100} height={100}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      <hr className="h-px max-w-6xl mx-auto my-8 bg-gray-200 border-0"/>
    </section>
  );
};

export default AboutSection;



