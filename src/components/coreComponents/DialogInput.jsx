import React from 'react'

const DialogInput = ({type, title, name, value, placeholderName, required, handleChange}) => {
  return (
    <div className='flex flex-col justify-end' style={{"gap":"4px", "height": "100%"}}>
        <label htmlFor={name} className="block text-[14px] font-medium font-poppins">{title}{required === true ? <span style={{"color":"#D86161"}}>*</span> : null}</label>
        <div>
            <input type={type} id={name} name={name} value={value} onChange={handleChange} className="bg-white border-[1px] border-solid border-CardBorder rounded-[5px]" style={{"height":"36px", "width":"100%","fontSize":"14px", "padding":"8px 12px 8px 12px"}} placeholder={placeholderName}/>
        </div>     
    </div> 
  )
}

export default DialogInput