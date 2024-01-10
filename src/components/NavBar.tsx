"use client"

import Link from 'next/link'
import React, { useState } from 'react'

export function NavBar() {
    const [activeItem, setActiveItem] = useState<string>('')

    return (
        <div>
            <span className='font-bold text-green'>{activeItem}</span>
            <div className='text-red font-lg'>
                {activeItem !== 'About' && (
                    <Link href={'/'}>

                        <span>About</span>
                    </Link>)}
                {activeItem !== 'Projects' && (
                    <Link href={'/Project'}>

                        <span>Projects</span>

                    </Link>)}
                {activeItem !== 'Resume' && (
                    <Link href={'/Resume'}>

                        <span>Resume</span>

                    </Link>)}
            </div>
        </div>
    )
}
