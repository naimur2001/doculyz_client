'use client'

import { useEffect } from 'react'
import { useAuthStore } from '../store/useAuthStore'


export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const fetchUser = useAuthStore((state) => state.fetchUser)

  useEffect(() => {
    fetchUser() // 🔄 Fetch user once on first load
  }, [fetchUser])

  return <>{children}</>
}
