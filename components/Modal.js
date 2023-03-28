import Image from 'next/image'
import React from 'react'

import { FiCopy } from 'react-icons/fi';
import { BsDownload } from 'react-icons/bs';
import { RxCross1 } from 'react-icons/rx';
import { copy, downloadImage } from '../utils';
import { Zoom } from "react-reveal"
const Modal = ({ _id, name, photo, prompt, profilePhoto, setOpenImageId, photos }) => {
    console.log(photos)
    return (
        <div className=' overflow-hidden fixed flex items-center justify-center top-0 bottom-0 left-0 right-0 inset-0 bg-black/80 z-20 p-2' onClick={() => setOpenImageId(null)}>

            <div className="w-10 h-10 rounded gradientbg1 absolute top-1 left-1 m-2  items-center justify-center cursor-pointer z-50 hidden sm:flex" onClick={() => setOpenImageId(null)}>
                <RxCross1 size={20} color="white" />
            </div>

            <Zoom bottom>
                <div className="max-w-4xl m-auto  h-fit max-h-screen flex flex-col-reverse sm:flex-row  justify-center gradientbg p-2 sm:p-5 rounded sm:rounded gap-0 sm:gap-4 ">
                    <div className='py-5 sm:py-0 max-w-md'>
                        <div className="gradientbg1 rounded sm:rounded p-4  ">
                            <p className='text-white text-sm overflow-y-auto prompt inline-block sm:hidden'>
                                {
                                    prompt.length > 150 ? prompt.slice(0, 150) + "..." : prompt
                                }
                            </p>
                            <p className='text-white text-sm overflow-y-auto prompt sm:inline-block hidden'>
                                {prompt}
                            </p>
                            <div className="flex items-center space-x-2 flex-wrap">
                                <div className='rounded px-4 py-1.5 space-x-2 my-2 text-gray-100 hover:bg-[#3f3f46e4] gradientbg1 w-fit cursor-pointer flex items-center' onClick={() => copy(prompt)}>
                                    <FiCopy size={16} color="white" />
                                    <p className='text-sm'> Copy prompt</p>
                                </div>
                                <div className='rounded px-4 py-1.5 space-x-2 my-2 text-white bg-[#1dd79b] hover:bg-[#f5a523e4] w-fit cursor-pointer flex items-center' onClick={() => downloadImage(_id, photo)}>
                                    <BsDownload size={16} color="white" />
                                    <p className='text-sm'>Download</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 mt-4">
                            <Image
                                src={profilePhoto}
                                width={1980}
                                height={1080}
                                className={`h-10 w-10 object-contain rounded`}
                                alt={name}
                                placeholder='blur'
                                blurDataURL={profilePhoto}
                            />
                            <div className="">
                                <p className='text-white font-bold'>{name}</p>
                                <p className='text-white text-xs '>{_id}</p>
                            </div>
                        </div>
                    </div>
                    <div className='gradientbg flex items-center gap-5 overflow-x-auto overflow-y-hidden  p-2 w-full h-full rounded sm:rounded max-w-lg remove-scrollbar'>
                        {
                            photos?.length !== 0 ? photos.map((item) => <Image
                                src={item}
                                width={1980}
                                height={1080}
                                className={`h-auto w-full object-contain rounded`}
                                alt={prompt}
                                placeholder='blur'
                                blurDataURL={item}
                                key={item}
                            />) : <Image
                                src={photo}
                                width={1980}
                                height={1080}
                                className={`h-auto w-full object-contain rounded`}
                                alt={prompt}
                                placeholder='blur'
                                blurDataURL={photo}
                            />
                        }

                    </div>
                </div>
            </Zoom>

        </div>
    )
}

export default Modal
