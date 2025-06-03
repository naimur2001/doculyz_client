'use client'

import { useEffect } from 'react'
import { useAuthStore } from '../store/useAuthStore'
import LoadingSkeleton from '../Components/loadingSkeleton'

//proving auth all over the app
const AuthProvider = ({ children }: { children: React.ReactNode }) =>{
  const fetchUser = useAuthStore((state) => state.fetchUser)
  const {authChecked} = useAuthStore()
  useEffect(() => {
    fetchUser() // 🔄 Fetch user once on first load
  }, [fetchUser])
  
  if (!authChecked) {
    return <LoadingSkeleton/>
  }
  return <>{children}</>
}
export default  AuthProvider