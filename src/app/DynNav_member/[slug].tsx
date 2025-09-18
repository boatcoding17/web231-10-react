'use client'

import { useRouter } from 'next/navigation'

export default function MemberPage() {
  const router = useRouter()

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        type="button"
        onClick={() => router.push('/DynNav_member')}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md 
                   hover:bg-blue-700 hover:shadow-lg transition-all duration-200"
      >
        DynNav_member_BUS*12
      </button>
    </div>
  )
}
