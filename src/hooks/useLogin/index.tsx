import { useCallback } from 'react'

import { useAuthStore } from 'store/auth/auth'
import { useAppStore } from 'store/app/app'

export function useLogin() {
  const { setLoading } = useAppStore()
  const { login } = useAuthStore()

  const handleLogin = useCallback(async () => {
    setLoading(true)
    try {
      await login()
    } catch (err) {
      //TODO: adicionar tratamento de erro
      console.error(err)
    } finally {
      setLoading(false)
    }
  }, [])

  return { handleLogin }
}
