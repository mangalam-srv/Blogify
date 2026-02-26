import React from 'react'

const Card = ({
  children,
  className = '',
  hover = false,
  ...props
}) => {
  const hoverClass = hover ? 'hover:shadow-lg hover:-translate-y-1 transition-all duration-300' : ''

  return (
    <div
      className={`bg-[#FFFFFF] rounded-xl border border-[#E5E7EB] shadow-sm ${hoverClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
