import Image from 'next/image'
import React from 'react'
import { Button } from '../button'
import Link from 'next/link'

export default function Hero() {
    return (
        <div className='h-screen'>
            <div className='container mx-auto px-4 py-8 items-center justify-center h-full'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full'>
                    <div className='text-center md:text-left'>
                        <p className='md:text-6xl font-bold text-primary'>Start accepting crypto payments NOW</p>
                        <p className='text-white mt-6 text-xl font-light'>Boost your business with NOWPayments – the best crypto payment gateway for effortless payments!</p>
                        <Link href="/authentication/login"><Button className='mt-8'>Get Started</Button></Link>
                    </div>
                    <div className='flex justify-center'>
                        <Image src="/images/bank.png" width={300} height={300} alt="Hero Image" className='w-full max-w-md p-4' />
                    </div>
                </div>
            </div>
        </div>
    )
}
