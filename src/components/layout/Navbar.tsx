import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ModeToggle } from '../ui/modeToggle'

export default function Navbar() {
    return (
        <header>
            <div className='h-16 w-full z-50 bg-clip-text border-b border-foreground/10 border-dashed fixed top-0 flex justify-start md:justify-between items-center px-5 border-grid bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
                <Link href={'/'} className="text-3xl font-meow-script font-extrabold bg-clip-text text-primary tracking-[0.5rem]">
                    Ra<span className="text-main">M</span>arkit
                </Link>
                <div className='hidden md:flex justify-center items-center gap-5 '>
                    <Button>
                        <Link href={'/login'}>
                            Login
                        </Link>
                    </Button>
                    <Button>
                        <Link href={'/register'}>
                            Register
                        </Link>
                    </Button>
                    <ModeToggle />
                </div>
            </div>
            <div className='h-16 w-full' />
        </header>
    )
}
