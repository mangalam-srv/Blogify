import React from 'react'

const Select = ({
  label = '',
  options = [],
  error = '',
  disabled = false,
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
      <select
        disabled={disabled}
        className={`
          w-full px-4 py-2.5 text-base
          border border-[#E5E7EB] rounded-lg
          bg-[#FFFFFF] text-[#111827]
          focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent
          disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed
          transition-all duration-200
          ${error ? 'border-[#DC2626] focus:ring-red-500' : ''}
          ${className}
        `}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-sm text-[#DC2626]">{error}</p>
      )}
    </div>
  )
}

export default Select
