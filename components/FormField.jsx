import React from 'react'

const FormField = ({labelName,name,isSupriseMe,handleChange,handleSupriseMe,value,placeholder,type,...otherProps}) => {
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
      {type==="range" && <p className='text-white'>{value}</p>}
      <input id={name} name={name} required onChange={handleChange} value={value} placeholder={placeholder} type={type} spellCheck={false} {...otherProps} className={`w-full rounded  text-white px-3 py-4 ${type === 'range' ? "focus:ring-0 max-w-xs cursor-pointer" :"focus:ring-1"} outline-none  bg-[#181B21] shadow-lg`} />
    </div>
  )
}

export default FormField