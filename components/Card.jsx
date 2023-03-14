import Image from 'next/image'
import React from 'react'
import { downloadImage } from "../utils"
import { BsDownload } from 'react-icons/bs';

const Card = ({_id,name,photo,prompt}) => {
  return (
    <div className='rounded-2xl h-full w-full group relative shadow-card hover:shadow-cardhover bg-slate-100 card'>
      <Image
        src={photo}
        width={1280}
        height={1920}
        className="w-full h-auto object-contain rounded-2xl bg-white"
        alt={prompt}
        placeholder='blur'
        blurDataURL={photo}
      />
      <div className="group-hover:flex flex-col max-h-[94%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded">
        <p className='text-white text-sm overflow-y-auto prompt'>{prompt}</p>
        <div className="mt-5 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className='w-7 h-7 rounded-full object-cover bg-green-500 flex justify-center items-center text-white text-lg font-bold'>
              {name[0]}
            </div>
            <p className='text-white text-sm'
            >{name}</p>
          </div>
          <button type='button' onClick={()=>downloadImage(_id,photo)} className='outline-none bg-transparent border-none'>
           
            <BsDownload size={24} color={"white"}/>
            
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card