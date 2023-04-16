import Image from 'next/image'
import React, { useState } from 'react'
import { copy, downloadImage } from "../utils"
import { BsDownload } from 'react-icons/bs';

const Card = ({ _id, name, photo, prompt, profilePhoto, setOpenImageId }) => {

  return (
    <div onClick={() => setOpenImageId(_id)} className={`rounded-lgh-full w-full group relative  gradient card sm:hover:scale-[102%] transition-transform ease-out duration-200`}>
      <Image
        src={photo}
        width={1080}
        height={1350}
        className={` w-full h-auto object-contain rounded`}
        alt={prompt}
        placeholder='blur'
        blurDataURL={photo}
      />
      <div className="group-hover:flex flex-col max-h-[90%] hidden absolute bottom-0 left-0 right-0  gradientbg m-1 p-4 rounded">
        <p className='text-white text-sm overflow-y-auto break-words prompt'>{prompt}</p>
        


        <div className="mt-5 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className='w-7 h-7 rounded-full bg-slate-100 '>

              {profilePhoto &&
                <Image
                  src={profilePhoto}
                  width={30}
                  height={30}
                  className={`w-full h-auto object-cover rounded-full`}
                  alt={name}
                  placeholder='blur'
                  blurDataURL={profilePhoto}
                />
              }
            </div>
            <p className='text-white text-sm'
            >{name}</p>
          </div>
          <button type='button' onClick={() => downloadImage(_id, photo)} className='outline-none gradient border-none rounded-full p-2'>

            <BsDownload size={14} color={"white"} />

          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
