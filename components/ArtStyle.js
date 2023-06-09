import React, { useState } from 'react'

const ArtStyle = ({setArtStyle}) => {
    const styles=["Avatar","Art Nouveau","Cinematic","3D Render","Oil Painting","Steampunk","B&W Film"];
    const [selectedStyle,setSelectedStyle]=useState("");
  return (
    <div>
          <h3 className='text-white mb-2 font-bold'>Choose Art style</h3>
          <div className='flex gap-2 flex-wrap'>
            {styles.map((style,i)=>{
                return <p key={i} onClick={() => {
                    setSelectedStyle(style);
                    setArtStyle(style);
                }} className={` ${selectedStyle === style ? "border-[#1dd79b] scale-110 text-[#1dd79b]" : "border-white text-white"} outline-none border-[1px]  rounded border-[#181b23] px-3 py-1.5 sm:p-2 text-center cursor-pointer `}>{style}</p>
            })}
          </div>

    </div>
  )
}

export default ArtStyle
