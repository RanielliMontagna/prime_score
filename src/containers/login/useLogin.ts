import { useCallback } from 'react'

import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import app from 'libs/firebase'
import { useAuthStore } from 'store/auth/auth'
import { useAppStore } from 'store/app/app'

export function useLogin() {
  const { setLoading } = useAppStore()
  const { login } = useAuthStore()
  const provider = new GoogleAuthProvider()

  const handleLogin = useCallback(async () => {
    setLoading(true)
    try {
      const auth = getAuth(app)
      const result = await signInWithPopup(auth, provider)

      const credential = GoogleAuthProvider.credentialFromResult(result)

      const token = credential?.accessToken
      const user = result.user

      if (!token || !user) {
        throw new Error('Não foi possível fazer login')
      }

      login(token, {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
      })
    } catch (err) {
      //TODO: adicionar tratamento de erro
      console.error(err)
    } finally {
      setLoading(false)
    }
  }, [])

  return { handleLogin }
}
