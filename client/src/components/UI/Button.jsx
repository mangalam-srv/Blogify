import React from 'react'

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer'

  const variants = {
    primary: 'bg-[#2563EB] text-white hover:bg-blue-600 focus:ring-blue-500',
    secondary: 'bg-[#F8FAFC] text-[#111827] border border-[#E5E7EB] hover:bg-gray-100 focus:ring-blue-500',
    danger: 'bg-[#DC2626] text-white hover:bg-red-700 focus:ring-red-500',
    ghost: 'text-[#111827] hover:bg-gray-100 focus:ring-blue-500',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : ''

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
