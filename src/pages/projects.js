import React from 'react'
import Head from 'next/head'
import Layout from './components/Layout'
import AnimatedText from './components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import projects1 from "../../public/images/projects/crypto-screener-cover-image.jpg"
import { motion } from 'framer-motion'
import GithubIcon from './components/GithubIcon'

const FramerImage = motion(Image)

const FeaturedProjects =({type, title, summary, img, link, github}) =>{
    return(
        <article className='w-full flex items-center justify-vetween rounded-3xl border border-solid border-dark bg-light shadow-2xl relative rounded-br-2xl'>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl' />
        <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
            <FramerImage src={img} alt={title} className="w-full h-auto"  whileHover={{scale: 1.05}} transition={{duration: 0.2}} />
        </Link>

        <div className='w-1/2 flex flex-col items-start justify-between pl-6 '>
            <span className='text-primary font-medium text-xl'>{type}</span>
            <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-4xl font-bold'> {title} </h2>
            </Link>
            <p className='my-2 font-medium text-dark'>{summary}</p>
            <div className='my-2 flex items-center'>
                <Link href={github} target="_blank" className='w-10'> <GithubIcon /> </Link>
                <Link href={link}  target="_blank" className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'> Visit Project </Link>
            </div>
        </div>
        

        </article>
    )
}

const Project = ({title, type, img, link, github}) => {
    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative'>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl' />
        <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
            <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{scale: 1.05}} transition={{duration: 0.2}} />
        </Link>

        <div className='w-full flex flex-col items-start justify-between mt-4 '>
            <span className='text-primary font-medium text-xl'>{type}</span>
            <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-3xl font-bold'> {title} </h2>
            </Link>
            <div className=' w-full my-2 flex items-center justify-between'>
                <Link href={link}  target="_blank" className=' text-lg font-semibold underline'> Visit </Link>
                <Link href={github} target="_blank" className='w-8'> <GithubIcon /> </Link>
                
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
                <AnimatedText text="Imagination Trumps Knowledge!"  className='mb-16'/>
                
                <div className='grid grid-cols-12 gap-24 gap-y-32'>
                    <div className=' col-span-12 '>
                            <FeaturedProjects 
                                title='Potholes Detection' 
                                img={projects1} 
                                summary='An object detection real time based model using Yolov8 for detecting potholes and webcracks. For the annotation part I have used Cvat. 
                                The project is based on real time data as I have recorded vedio then splitting vedio into per second frames and then annotate for detecting on the desired objects' 
                                link="/"
                                github="/"
                                type= "Featured Project"  />
                    </div>
                    
                    <div className=' col-span-6 '>
                            <Project
                                title='Potholes Detection' 
                                img={projects1} 
                                summary='An object detection real time based model using Yolov8 for detecting potholes and webcracks. For the annotation part I have used Cvat. 
                                The project is based on real time data as I have recorded vedio then splitting vedio into per second frames and then annotate for detecting on the desired objects' 
                                link="/"
                                github="/"
                                type= "Featured Project"  />

                    </div>

                    <div className=' col-span-6 '>
                            <Project
                                title='Potholes Detection' 
                                img={projects1} 
                                summary='An object detection real time based model using Yolov8 for detecting potholes and webcracks. For the annotation part I have used Cvat. 
                                The project is based on real time data as I have recorded vedio then splitting vedio into per second frames and then annotate for detecting on the desired objects' 
                                link="/"
                                github="/"
                                type= "Featured Project"  />        
                    </div>

                    <div className=' col-span-12 '>
                            <FeaturedProjects 
                                title='Potholes Detection' 
                                img={projects1} 
                                summary='An object detection real time based model using Yolov8 for detecting potholes and webcracks. For the annotation part I have used Cvat. 
                                The project is based on real time data as I have recorded vedio then splitting vedio into per second frames and then annotate for detecting on the desired objects' 
                                link="/"
                                github="/"
                                type= "Featured Project"  />    
                    </div>
                    
                    <div className=' col-span-6 '>
                            <Project
                                title='Potholes Detection' 
                                img={projects1} 
                                summary='An object detection real time based model using Yolov8 for detecting potholes and webcracks. For the annotation part I have used Cvat. 
                                The project is based on real time data as I have recorded vedio then splitting vedio into per second frames and then annotate for detecting on the desired objects' 
                                link="/"
                                github="/"
                                type= "Featured Project"  />    
                    </div>

                    <div className=' col-span-6 '>
                            <Project
                                title='Potholes Detection' 
                                img={projects1} 
                                summary='An object detection real time based model using Yolov8 for detecting potholes and webcracks. For the annotation part I have used Cvat. 
                                The project is based on real time data as I have recorded vedio then splitting vedio into per second frames and then annotate for detecting on the desired objects' 
                                link="/"
                                github="/"
                                type= "Featured Project"  />
                    </div>

                </div>
            </Layout>
        </main>
    </>
  )
}

export default projects