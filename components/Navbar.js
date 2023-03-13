import React from 'react'
import { logo } from "../assets"
import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
    return (
        <header className="w-full flex justify-between items-center px-2 sm:px-8 py-2 bg-white border-b-2 border-b-[#F1F1F4] ">
            <Link href={"/"}>
                <Image
                    src={logo}
                    width={1280}
                    height={720}
                    className="h-12 w-full object-contain"
                    alt='Pillu'
                    placeholder='blur'
                />
            </Link>
            <Link href={"/create-post"}>
                <p className="px-8 py-3 rounded-full bg-blue-500 text-white ">Create Post</p>
            </Link>
        </header>
    )
}

export default Navbar