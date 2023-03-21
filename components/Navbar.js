import React from 'react'
import { logo } from "../assets"
import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
    return (
        <header className="w-full flex justify-between items-center px-2 sm:px-8 py-2 
       sticky top-0 left-0 z-10 bg-[#0d11176e] backdrop-blur-sm ">
            <Link href={"/"}>
                <Image
                    src={logo}
                    width={1280}
                    height={720}
                    className="h-10 w-full object-contain"
                    alt='Pillu'
                    placeholder='blur'
                />
            </Link>
            <Link href={"/create-post"}>
                <p className="p-3 sm:px-8  sm:py-4 rounded-full bg-[#f5a623] text-xl ">Create Post</p>
            </Link>
        </header>
    )
}

export default Navbar