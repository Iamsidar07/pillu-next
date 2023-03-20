import Image from 'next/image'
import React, { useState } from 'react'
import { downloadImage } from "../utils"
import { BsDownload } from 'react-icons/bs';

const Card = ({ _id, name, photo, prompt, profilePhoto }) => {

  const [isLoadingComplete, setIsLoadingComplete] = useState(!false);
  return (
    <div className='rounded-2xl h-full w-full group relative  gradient card sm:hover:scale-105 transition-transform ease-out duration-200'>
      <Image
        src={photo}
        width={1080}
        height={1350}
        className={` w-full h-auto object-contain rounded-xl  ${isLoadingComplete ? "animate-none" : "animate-pulse"}`}
        alt={prompt}
        placeholder='blur'
        blurDataURL={photo}
        onLoadingComplete={() => setIsLoadingComplete(true)}
      />
      <div className="group-hover:flex flex-col max-h-[94%] hidden absolute bottom-0 left-0 right-0  gradientbg m-2 p-4 rounded-2xl">
        <p className='text-white text-sm overflow-y-auto prompt'>{prompt}</p>
        <div className="mt-5 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className='w-7 h-7 rounded-full bg-slate-100 '>
              
            {profilePhoto &&
              <Image
                src={profilePhoto}
                width={40}
                height={40}
                className={`w-full h-auto object-cover rounded-full  ${isLoadingComplete ? "animate-none" : "animate-pulse"}`}
                alt={name}
                placeholder='blur'
                blurDataURL={profilePhoto}
                onLoadingComplete={() => setIsLoadingComplete(true)}
              />
            }
            </div>
            <p className='text-white text-sm'
            >{name}</p>
          </div>
          <button type='button' onClick={() => downloadImage(_id, photo)} className='outline-none gradient border-none rounded-full p-2'>

            <BsDownload size={20} color={"white"} />

          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
