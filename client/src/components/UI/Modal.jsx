import React from 'react'
import Button from './Button'

const Modal = ({
  isOpen = false,
  onClose = () => {},
  title = '',
  children,
  actions = null,
}) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#FFFFFF] rounded-xl shadow-xl max-w-md w-full mx-4">
        {/* Header */}
        {title && (
          <div className="px-6 py-4 border-b border-[#E5E7EB]">
            <h2 className="text-lg font-semibold text-[#111827]">{title}</h2>
          </div>
        )}

        {/* Body */}
        <div className="px-6 py-4">{children}</div>

        {/* Footer */}
        {actions && (
          <div className="px-6 py-4 border-t border-[#E5E7EB] flex justify-end gap-3">
            {actions}
          </div>
        )}
      </div>
    </div>
  )
}

export default Modal
