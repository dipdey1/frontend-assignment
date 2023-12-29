import React from 'react'

const Button = ({type,color,style,additionalClass ,handleClick,children}) => {

  return (
    <button type={type} className={`button-lg bg-${color} hover:bg-${color}/90 ml-2.5 rounded-md shadow-md ${additionalClass}`} style={style} onClick={handleClick}>
        {children}
    </button>     
    
)
}

export default Button