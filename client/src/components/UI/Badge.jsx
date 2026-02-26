import React from 'react'

const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  ...props
}) => {
  const variants = {
    default: 'bg-[#2563EB] text-white',
    secondary: 'bg-[#F3F4F6] text-[#111827]',
    success: 'bg-[#16A34A] text-white',
    danger: 'bg-[#DC2626] text-white',
    muted: 'bg-[#E5E7EB] text-[#6B7280]',
  }

  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  }

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}

export default Badge
