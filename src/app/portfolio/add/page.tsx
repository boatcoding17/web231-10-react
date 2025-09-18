'use client'

import { useForm } from 'react-hook-form'
import { usePortfolioStore, Portfolio } from '@/app/Store/usePortfolioStore'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function AddPortfolio() {
  const { register, handleSubmit, reset } = useForm<Omit<Portfolio, 'id'>>()
  const addPortfolio = usePortfolioStore((state) => state.addPortfolio)
  const router = useRouter()
  const [photo, setPhoto] = useState<string | undefined>()

  const onSubmit = (data: Omit<Portfolio, 'id'>) => {
    addPortfolio({ ...data, id: crypto.randomUUID(), photo })
    reset()
    setPhoto(undefined)
    router.push('/portfolio') // กลับหน้ารายชื่อ
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onloadend = () => setPhoto(reader.result as string)
    reader.readAsDataURL(file)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto p-6 space-y-4">
      <input {...register('firstName', { required: true })} placeholder="ชื่อ" className="border p-2 rounded w-full" />
      <input {...register('lastName', { required: true })} placeholder="นามสกุล" className="border p-2 rounded w-full" />
      <input {...register('address')} placeholder="ที่อยู่" className="border p-2 rounded w-full" />
      <input {...register('phone')} placeholder="เบอร์โทร" className="border p-2 rounded w-full" />
      <input {...register('school')} placeholder="โรงเรียน" className="border p-2 rounded w-full" />
      <input {...register('gpa', { valueAsNumber: true })} placeholder="GPA" type="number" step="0.01" className="border p-2 rounded w-full" />
      <input {...register('skills')} placeholder="ความสามารถพิเศษ" className="border p-2 rounded w-full" />
      <input {...register('reason')} placeholder="เหตุผลในการสมัคร" className="border p-2 rounded w-full" />
      <input {...register('major')} placeholder="สาขาที่เลือก" className="border p-2 rounded w-full" />
      <input {...register('university')} placeholder="มหาวิทยาลัย" className="border p-2 rounded w-full" />

      {/* อัปโหลดรูป */}
      <div className="space-y-2">
  <label className="block mb-2 font-semibold">Upload Photo</label>

  {/* ปุ่มเลือกไฟล์ */}
  <input
    type="file"
    accept="image/*"
    id="photoUpload"
    onChange={handleFileChange}
    className="hidden" // ซ่อน input จริง
  />
  <div className="flex items-center space-x-2">
    <label
      htmlFor="photoUpload"
      className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700 transition duration-200"
    >
      Choose File
    </label>

    {/* ปุ่มลบรูป */}
    {photo && (
      <button
        type="button"
        onClick={() => setPhoto(undefined)}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-200"
      >
        Remove
      </button>
    )}
  </div>

  {/* แสดง preview */}
  {photo && (
    <img
      src={photo}
      alt="preview"
      className="mt-2 w-32 h-32 object-cover rounded-full border"
    />
  )}
</div>


      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        เพิ่ม Portfolio
      </button>
    </form>
  )
}
