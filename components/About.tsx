import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <section className="max-container padding-container gap-20 py-10 pb-32 
    md:gap-28 lg:py-20">
        <div className="text-center bold-18 uppercase tracking-[1rem] 
         text-green-500 pb-20">About</div>

         <div className="flex flex-col gap-20 md:gap-28 xl:flex-row">
            <div className="flex-1 flexCenter flex-col m-auto">
                <p className='mb-6'>
                    <span className="font-extrabold">MERN Stack Developer</span>
                    "I'm a dedicated MERN stack developer passionate about building dynamic 
                    and responsive web applications. With expertise in MongoDB, Express, React, and Node.js,
                    I create seamless, user-centric experiences that bring ideas to life on the web. My journey has been fueled by a commitment to coding excellence and a drive to solve complex problems with clean, efficient solutions. Whether I'm working on the front end or back end, I strive to build applications that blend functionality and creativity,
                    enhancing user experiences across the board."
                </p>
                <button className=''
                type='button'
                title='Download Resume'
                />
            </div>

            <div className="flex-1 flexCenter">
               <Image src={'/profile.png'} alt="about" width={400} height={400} 
               className='w-auto rounded-full shadow-sm'  />
            </div>
         </div>
    </section>
  )
}

export default About