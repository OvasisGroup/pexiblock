import Image from 'next/image'
import React from 'react'

export default function Navbar() {
  return (
    <div className='bg-transparent text-white sticky absolute top-0 left-0 w-full z-50'>
        <div className='container mx-auto px-4 py-6 flex items-center justify-between'>
            <Image src="/images/pexiblock_logo.svg" alt="Logo" width={150} height={100} />
        <div>
            <ul className='flex space-x-6'>
                <li className='hover:text-primary transition-colors duration-300'><a href="#features">Features</a></li>
                <li className='hover:text-primary transition-colors duration-300'><a href="#pricing">Pricing</a></li>
                <li className='hover:text-primary transition-colors duration-300'><a href="#about">About</a></li>
                <li className='hover:text-primary transition-colors duration-300'><a href="#contact">Contact</a></li>
            </ul>
        </div>
        </div>
    </div>
  )
}
