import React from 'react'

const Textarea = ({
  placeholder = '',
  label = '',
  error = '',
  disabled = false,
  rows = 4,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-[#111827] mb-2">
          {label}
        </label>
      )}
      <textarea
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        className={`
          w-full px-4 py-2.5 text-base
          border border-[#E5E7EB] rounded-lg
          bg-[#FFFFFF] text-[#111827]
          placeholder-[#9CA3AF]
          focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent
          disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed
          transition-all duration-200 resize-none
          ${error ? 'border-[#DC2626] focus:ring-red-500' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-[#DC2626]">{error}</p>
      )}
    </div>
  )
}

export default Textarea
