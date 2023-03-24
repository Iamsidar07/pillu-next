import React from 'react'
import { logo } from "../assets"
import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
    return (
        <header className="w-full flex justify-between items-center px-2 sm:px-8 py-2 
       fixed top-0 left-0 right-0 z-10 bg-[#181b216b]  backdrop-blur ">
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
                <p className="p-2.5 sm:px-6  sm:py-3.5 rounded-full bg-[#f5a623] ">Create Post</p>
            </Link>
        </header>
    )
}

export default Navbar