import React from 'react'

const Container = ({containerClasses, containerStyles, children, handleClick}) => {
  return (
    <div className={containerClasses} style={containerStyles} onClick={handleClick}>
      {children}
    </div>
  )
}

export default Container