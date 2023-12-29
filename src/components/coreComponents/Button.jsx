import React from 'react'

const Button = ({type,style ,handleClick,children}) => {

  return (
    <button type={type} className='button-lg bg-Primary hover:bg-Primary/90 ml-2.5 rounded-md shadow-md' style={style} onClick={handleClick}>
        {children}
    </button>     
    
)
}

export default Button