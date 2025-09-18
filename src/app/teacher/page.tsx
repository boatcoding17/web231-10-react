'use client'

import Link from 'next/link'
import { usePortfolioStore } from '@/app/Store/usePortfolioStore'
import { useState } from 'react'

export default function TeacherPage() {
  const portfolios = usePortfolioStore((state) => state.portfolios)
  const [sortKey, setSortKey] = useState<'firstName' | 'gpa'>('firstName')

  const sorted = [...portfolios].sort((a, b) =>
    sortKey === 'gpa' ? (b.gpa ?? 0) - (a.gpa ?? 0) : a.firstName.localeCompare(b.firstName)
  )

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Student Portfolios</h1>

      <div className="mb-4 space-x-2">
        <button onClick={() => setSortKey('firstName')} className="px-2 py-1 bg-gray-200 rounded">Sort by Name</button>
        <button onClick={() => setSortKey('gpa')} className="px-2 py-1 bg-gray-200 rounded">Sort by GPA</button>
      </div>

      <table className="w-full border border-gray-300 rounded overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2 text-left">Name</th>
            <th className="border p-2 text-left">GPA</th>
            <th className="border p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((p) => (
            <tr key={p.id} className="hover:bg-gray-50">
              <td className="border p-2">{p.firstName} {p.lastName}</td>
              <td className="border p-2">{p.gpa?.toFixed(2) ?? '-'}</td>
              <td className="border p-2">
                <Link href={`/portfolio/${p.id}`} className="text-blue-500 hover:underline">
                  View Details
                </Link>
              </td>
            </tr>
          ))}
          {sorted.length === 0 && (
            <tr>
              <td colSpan={3} className="border p-2 text-center text-gray-500">
                No students yet
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
