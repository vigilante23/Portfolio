import React from 'react'
import CircularText from './CircularText'
import Link from 'next/link'

function HireMe() {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden 
    md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute  lg:right-8 lg:left-auto lg:top-0 lg:bottom-auto lg:absolute '>
        <div className='w-48 h-auto flex items-center justify-center relative md:w-24 lg:w-32 sm:right-0'>
            <CircularText className={'fill-dark animate-spin-slow'} />
            <Link href='mailto: digvijay1999nagarkoti@gmail.com' className='flex items-center justify-center absolute left-1/2 
            top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 
            rounded-full font-semibold hover:bg-light hover:text-dark md:w-12 md:h-12 md:text-[10px] lg:w-16 lg:h-16 lg:text-[15px] '> Hire Me</Link>
        </div>
    </div>
  )
}

export default HireMe