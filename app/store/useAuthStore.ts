// store/useAuthStore.ts
import { create } from 'zustand'

type User = {
  id: string
  fullName: string
  email: string
}

type AuthStore = {
  user: User | null
  isLoggedIn: boolean
  setUser: (user: User) => void
  logout: () => void
  fetchUser: () => Promise<void>
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isLoggedIn: false,
  setUser: (user) => set({ user, isLoggedIn: true }),
 logout: async () => {
  try {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/logout`, {
      method: 'POST',
      credentials: 'include',
    })
  } catch (error) {
    console.error("Logout error:", error)
  } finally {
    set({ user: null, isLoggedIn: false });
  }
}
,
  fetchUser: async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/profile`, {
        method: 'GET',
        credentials: 'include',
      })
      if (!res.ok) throw new Error('Not authenticated')
      const data = await res.json()
      set({ user: data.user, isLoggedIn: true })
    } catch (err) {
      set({ user: null, isLoggedIn: false })
    }
  },
}))
