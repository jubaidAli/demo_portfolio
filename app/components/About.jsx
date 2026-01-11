'use client'
import Heading from './sub/Heading'
import Image from 'next/image'
import Achievements from './sub/Achievements'

const About = () => {
  return (
    <div className='min-h-screen px-96 flex flex-col items-center justify-center'>
      <Heading text={"About Me"} />
      <div className='w-full flex items-center justify-between md:justify-center'>
        <Image src='/nada3.png' alt='about Nada Chougrati' width={300} height={500} 
            className='w-[300px] lg:w-[200px]' 
        />
        <div>
            <span>Arrow Left</span>
            <p>About text</p>
            <a href="/nick-cv.pdf" download='nick-cv.pdf'>
                <span>Download CV</span>
                <span>Download Icon</span>
            </a>
        </div>
      </div>
      <div>
        <Achievements />
      </div>
    </div>
  )
}

export default About