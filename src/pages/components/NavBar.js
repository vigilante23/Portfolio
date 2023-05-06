import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import TwitterIcon from './TwitterIcon'
import DribbbleIcon from './TwitterIcon'
import GithubIcon from './GithubIcon'
import LinkedInIcon from './LinkedInIcon'
import PinterestIcon from './PinterestIcon'
import SunIcon from './SunIcon'
import MoonIcon from './MoonIcon'
import {motion} from "framer-motion"
import useThemSwitcher from './hooks/useThemSwitcher'



const CustomLink = ({href, title, className=""}) => {
  const router = useRouter()
  return (
    <Link href={href} className={`${className} relative group` }>
        {title}
        <span className={ `h-[1px] inline-block absolute bg-dark  left-0 -bottom-0.5  
        group-hover:w-full transition-[width] ease duration-300 
        ${router.asPath === href ? 'w-full ' : 'w-0' }` }> &nbsp; </span>
    </Link>
  )
}


function NavBar() {
  const [mode, setMode] = useThemSwitcher()
  return (
    <header className= 'w-full px-32 py-8 font-medium flex items-center justify-between' >
       <nav>
        <CustomLink href="/"     title="Home"  className='mr-4'  /> 
        <CustomLink href="/about"    title="About" className='mx-4'/> 
        <CustomLink href="/projects"  title="Projects"  className='mx-4' /> 
        <CustomLink href="/articles"   title="Articles"  className='ml-4' /> 
       </nav>
      
       <nav className="flex items-center justify-center flex-wrap ">
        <motion.a href="https://twitter.com" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className="w-6 mr-3"> <TwitterIcon /> </motion.a>
        <motion.a href="/https://github.com" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className="w-6 mx-3" > <GithubIcon /> </motion.a>
        <motion.a href="https://linkedin.com" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className="w-6 mx-3" > <LinkedInIcon /> </motion.a>
        <motion.a href="https://pinterest.com" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className="w-6 mx-3" > <PinterestIcon /> </motion.a>
        <motion.a href="https://dribbleicon.com" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.9}} className="w-6 ml-3" > <DribbbleIcon /> </motion.a>

       <button
        onClick={() => setMode(mode === "light" ? "dark" : "light" )} className='ml-3 flex items-center justify-center rounded-full p-1'>
        {
          mode === "dark" ?
          <SunIcon className={"fill-dark"} />
          : <MoonIcon className={"fill-dark"} />
        }
       </button>

       </nav>

       <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo/>
       </div>
    </header>
  )
}

export default NavBar