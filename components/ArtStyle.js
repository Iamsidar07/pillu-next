import React, { useState } from 'react'

const ArtStyle = ({artStyle,setArtStyle}) => {
    const styles=["Art Nouveau","Cinematic","3D Render","Oil Painting","Steampunk","B&W Film"];
    const [selectedStyle,setSelectedStyle]=useState(styles[0]);
  return (
    <div>
          <h3 className='text-white mb-2'>Choose Art style</h3>
          <div className='flex gap-2 flex-wrap'>
            {styles.map((style,i)=>{
                return <p key={i} onClick={() => {
                    setSelectedStyle(style);
                    setArtStyle(style);
                }} className={` ${selectedStyle === style ? "border-[#f5a623] scale-110 text-[#f5a623]" : "border-white text-white"} outline-none border-[1px]  rounded-full px-3 p-2 text-center cursor-pointer `}>{style}</p>
            })}
          </div>

    </div>
  )
}

export default ArtStyle