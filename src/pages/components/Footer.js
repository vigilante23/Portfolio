import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

function Footer() {
  return (
    <footer className='w-full border-t-2 border-solid border-dark'>
       <Layout className='py-8 flex items-center justify-between'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className='flex items-center'>
          Build with 
          <span className='text-primary text-2xl px-1'>&#9825;</span>
          by&nbsp; <span className='underline underline-offset-2'>DigvijaySinghNagarkoti</span> 
        </div>
        <span> Say hello </span>
       </Layout>
    </footer>
)
}

export default Footer