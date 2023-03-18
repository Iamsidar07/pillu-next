import React from 'react'

const FormField = ({labelName,name,isSupriseMe,handleChange,handleSupriseMe,value,placeholder,type}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor={name} className="font-semibold text-white" >{labelName}</label>
        {
          isSupriseMe && (
            <button type='button' onClick={handleSupriseMe} className="bg-[#f5a623] text-xs px-2 py-1 rounded-full font-semibold">Suprise me</button>
          )
        }
      </div>
      <input id={name} name={name} required onChange={handleChange} value={value} placeholder={placeholder} type={type} spellCheck={false} className="w-full rounded-2xl  text-white px-3 py-4 outline-none focus:ring-1 bg-[#1e1e1e] shadow-lg" />
    </div>
  )
}

export default FormField