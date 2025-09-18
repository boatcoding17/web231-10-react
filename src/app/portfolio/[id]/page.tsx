'use client'
import { useParams } from 'next/navigation'
import { usePortfolioStore } from '@/app/Store/usePortfolioStore'

export default function PortfolioDetail() {
  const params = useParams<{ id?: string }>()
  const portfolio = usePortfolioStore((state) =>
    params.id ? state.getPortfolioById(params.id) : undefined
  )

  if (!portfolio)
    return (
      <div className="p-6 text-center text-red-600 text-lg font-semibold">
        ❌ Student not found
      </div>
    )

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white shadow-xl rounded-2xl p-6">
        {/* Profile Photo */}
        {portfolio.photo ? (
          <img
            src={portfolio.photo}
            alt="student"
            className="mb-4 w-40 h-40 object-cover rounded-full mx-auto border-4 border-blue-200 shadow-md"
          />
        ) : (
          <div className="mb-4 w-40 h-40 rounded-full mx-auto bg-gray-200 flex items-center justify-center text-gray-500">
            No Photo
          </div>
        )}

        {/* Name */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {portfolio.firstName} {portfolio.lastName}
        </h1>

        {/* Details */}
        <div className="bg-gray-50 rounded-xl p-4 shadow-inner">
          <ul className="space-y-3">
            <li><strong>📍 Address:</strong> {portfolio.address}</li>
            <li><strong>📞 Phone:</strong> {portfolio.phone}</li>
            <li><strong>🏫 School:</strong> {portfolio.school}</li>
            <li><strong>🎓 GPA:</strong> <span className="text-blue-600 font-semibold">{portfolio.gpa}</span></li>
            <li><strong>🛠 Skills:</strong> {portfolio.skills}</li>
            <li><strong>💡 Reason:</strong> {portfolio.reason}</li>
            <li><strong>📚 Major:</strong> {portfolio.major}</li>
            <li><strong>🏛 University:</strong> {portfolio.university}</li>

            {portfolio.activities?.length ? (
              <li><strong>🎉 Activities:</strong> {(portfolio.activities ?? []).join(', ')}</li>
            ) : null}

            {portfolio.awards?.length ? (
              <li><strong>🏆 Awards:</strong> {(portfolio.awards ?? []).join(', ')}</li>
            ) : null}

            {portfolio.works?.length ? (
              <li><strong>🖼 Works:</strong> {(portfolio.works ?? []).join(', ')}</li>
            ) : null}
          </ul>
        </div>

        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="mt-6 w-full py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition duration-200"
        >
          ← Back to Portfolio
        </button>
      </div>
    </div>
  )
}
