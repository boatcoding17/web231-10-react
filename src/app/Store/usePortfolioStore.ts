import { create } from 'zustand'

export interface Portfolio {
  id: string
  firstName: string
  lastName: string
  address?: string
  phone?: string
  school?: string
  gpa?: number
  skills?: string
  reason?: string
  major?: string
  university?: string
  photo?: string          // สำหรับรูปนักเรียน
  activities?: string[]   // กิจกรรม
  awards?: string[]       // รางวัล
  works?: string[]        // ผลงาน
}

interface PortfolioStore {
  portfolios: Portfolio[]
  addPortfolio: (data: Portfolio) => void
  getPortfolioById: (id: string) => Portfolio | undefined
}

export const usePortfolioStore = create<PortfolioStore>((set, get) => ({
  portfolios: [],
  addPortfolio: (data) => set({ portfolios: [...get().portfolios, data] }),
  getPortfolioById: (id) => get().portfolios.find((p) => p.id === id),
}))
