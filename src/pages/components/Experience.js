import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null)
    return(
        <li ref={ref} className='my-8 first: mt-0 last: mb-0 w-[63%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>

            <LiIcon reference={ref} />
            <motion.div initial= {{y: 50}} whileInView={{y:0}} transition={{duration:0.5, type: "spring"}} > 
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg' > {position}&nbsp; <a href= {companyLink} target='_blank' className='text-primary capitalize'> @{company} </a> </h3>
                <span className='cappitalize font-medium text-dark/75 xs:text-sm'>
                    {time} |{address}  
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {work}
                </p>
            </motion.div>
        </li>
    )
}

function Experience() {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll(
      {
        target: ref,
        offset: ['start end', 'center start']
      }
    )


  return (
    <div className='my-64 '>
        <h2 className='font-bold text-8xl  mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
            Experience
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

<motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top
md:w-[2px] md:left-[30px] xs:left-[20px]'/>

            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
            <Details position='Python Associate Developer' company='Dask Technologies pvt. Lmt.' companyLink='https://www.zaubacorp.com/company/DASK-TECHNOLOGIES-PRIVATE-LIMITED/U72900PB2015PTC039636'
            time='May 2021 - September 2022' address='Mohali' work='It is a small scale start-up company. I perform multiple tasks which includes website maintenance, website development, Digital Marketing, Video editing, MS-Excel.'/>
            

            <Details position='Machine Learning Associate Developer' company='HanuAI' companyLink='https://roadathena.com/'
            time='January 2023 - April 2023' address='CPM-50 Phase 72 Mohali' work=' It is a startup innovative company which is building a product named as RoadAthena to analyze roads through ML. My role is in the feild of ComputerVision and OCR'/>

            </ul>
        </div>
    </div>
  )
}

export default Experience