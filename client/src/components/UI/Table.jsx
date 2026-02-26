import React from 'react'

const Table = ({ children, className = '' }) => (
  <div className={`overflow-x-auto border border-[#E5E7EB] rounded-lg ${className}`}>
    <table className="w-full text-sm text-[#6B7280]">
      {children}
    </table>
  </div>
)

const TableHead = ({ children }) => (
  <thead className="text-xs font-semibold text-[#111827] bg-[#F9FAFB] border-b border-[#E5E7EB] uppercase">
    {children}
  </thead>
)

const TableBody = ({ children }) => (
  <tbody>{children}</tbody>
)

const TableRow = ({ children, className = '', hover = true }) => (
  <tr className={`border-b border-[#E5E7EB] ${hover ? 'hover:bg-[#F9FAFB] transition-colors' : ''} ${className}`}>
    {children}
  </tr>
)

const TableCell = ({ children, className = '', header = false }) => {
  const Tag = header ? 'th' : 'td'
  return (
    <Tag className={`px-6 py-3 text-left ${className}`}>
      {children}
    </Tag>
  )
}

export { Table, TableHead, TableBody, TableRow, TableCell }
