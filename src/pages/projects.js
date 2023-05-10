import React from 'react'
import Head from 'next/head'
import Layout from './components/Layout'
import AnimatedText from './components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import projects1 from "../../public/images/projects/lightness1.jpg"
import projects2 from "../../public/images/projects/color2.png"
import projects3 from "../../public/images/projects/birds2.jpg"
import projects4 from "../../public/images/projects/ocr2.jpeg"
import projects5 from "../../public/images/projects/gpx.jpg"
import projects6 from "../../public/images/projects/school.jpeg"

import { motion } from 'framer-motion'
import GithubIcon from './components/GithubIcon'

const FramerImage = motion(Image)

const FeaturedProjects =({type, title, summary, img, link, github}) =>{
    return(
        <article className='w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light
        shadow-2xl p-12 lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 '>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl 
        xs:right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
        <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
            <FramerImage src={img} alt={title} className="w-full h-auto"  whileHover={{scale: 1.05}} transition={{duration: 0.2}}  priority
              sizes="(max-width: 768px) 100vw, 
              (max-width: 1200px) 50vw, 
              50vw" />
        </Link>

        <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
            <span className='text-primary font-medium text-xl xs:text-base'>{type}</span>
            <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-4xl font-bold sm:text-light sm:text-sm'> {title} </h2>
            </Link>
            <p className='my-2 font-medium text-dark'>{summary}</p>
            <div className='mt-2 flex items-center'>
                <Link href={github} target="_blank" className='w-10'> <GithubIcon /> </Link>
                <Link href={link}  target="_blank" className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base'> Visit Project </Link>
            </div>
        </div>
        

        </article>
    )
}

const Project = ({title, type, img, link, github}) => {
    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative xs:p-4'>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl md:right-2 
        md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />
        <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
            <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{scale: 1.05}} transition={{duration: 0.2}} />
        </Link>

        <div className='w-full flex flex-col items-start justify-between mt-4 '>
            <span className='text-primary font-medium text-xl lg:text-lg md:text-base'>{type}</span>
            <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'> {title} </h2>
            </Link>
            <div className=' w-full my-2 flex items-center justify-between'>
                <Link href={link}  target="_blank" className=' text-lg font-semibold underline md:text-base'> Visit </Link>
                <Link href={github} target="_blank" className='w-8 md:w-6'> <GithubIcon /> </Link>
                
            </div>
        </div>
        </article>
    )
}

function projects() {
  return (
    <>
        <Head>
                <title> DigvijaySinghNagarkoti | Project Page </title>
                <meta name="description" content="any description" />
        </Head>
        <main className='w-full mb-16 flex flex-col items-center justify-center '>
            <Layout className='pt-16'>
                <AnimatedText text="Imagination Trumps Knowledge!"  className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
                
                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className=' col-span-12 '>
                            <FeaturedProjects 
                                title='Lightness Detection' 
                                img={projects1} 
                                summary='An object detection real time based model using Yolov8 for detecting lightness in the image frame. For the annotation part I have used Cvat. 
                                The project is based on real time data as I have recorded vedio then splitting vedio into per second frames and then annotate for detecting on the desired objects' 
                                link="https://github.com/vigilante23?tab=repositories"
                                github="https://github.com/vigilante23?tab=repositories"
                                type= "Yolov8"  />
                    </div>
                    
                    <div className=' col-span-6 sm:col-span-12'>
                            <Project
                                title='yellow color detection' 
                                img={projects2} 
                                summary=' An opencv project to detect yellow color through webcam  ' 
                                link="https://github.com/vigilante23?tab=repositories"
                                github="https://github.com/vigilante23?tab=repositories"
                                type= "OpenCv"  />

                    </div>

                    <div className=' col-span-6 sm:col-span-12'>
                            <Project
                                title='Object detection' 
                                img={projects3} 
                                summary='An object detection real time based model using Yolov8 for detecting potholes and webcracks. For the annotation part I have used Cvat. 
                                The project is based on real time data as I have recorded vedio then splitting vedio into per second frames and then annotate for detecting on the desired objects' 
                                link="https://github.com/vigilante23?tab=repositories"
                                github="https://github.com/vigilante23?tab=repositories"
                                type= " OpenCv "  />        
                    </div>

                    <div className=' col-span-12 '>
                            <FeaturedProjects 
                                title='Object Character Recognition-(Reading Documents) ' 
                                img={projects4} 
                                summary='Reading of documents text and exctract the information from it. I used Pytesseract to read and recognize text 
                                and openCv to remove all the background noises and alignment of the image.' 
                                link="https://github.com/vigilante23?tab=repositories"
                                github="https://github.com/vigilante23?tab=repositories"
                                type= "OCR"  />    
                    </div>
                    
                    <div className=' col-span-6 sm:col-span-12'>
                            <Project
                                title='Gpx Smoothner' 
                                img={projects5} 
                                summary='An object detection real time based model using Yolov8 for detecting potholes and webcracks. For the annotation part I have used Cvat. 
                                The project is based on real time data as I have recorded vedio then splitting vedio into per second frames and then annotate for detecting on the desired objects' 
                                link="https://github.com/vigilante23?tab=repositories"
                                github="https://github.com/vigilante23?tab=repositories"
                                type= "Gpx"  />    
                    </div>

                    <div className=' col-span-6 sm:col-span-12'>
                            <Project
                                title='School management' 
                                img={projects6} 
                                summary='An object detection real time based model using Yolov8 for detecting potholes and webcracks. For the annotation part I have used Cvat. 
                                The project is based on real time data as I have recorded vedio then splitting vedio into per second frames and then annotate for detecting on the desired objects' 
                                link="https://github.com/vigilante23?tab=repositories"
                                github="https://github.com/vigilante23?tab=repositories"
                                type= "NextJs"  />
                    </div>

                </div>
            </Layout>
        </main>
    </>
  )
}

export default projects