import { deleteCookie, getCookie, setCookie } from 'helpers/cookies'
import { create } from 'zustand'
import { AuthStore } from './types'

const tokenCookieName = 'token'

console.log(getCookie(tokenCookieName))

export const useAuthStore = create<AuthStore>((set, get) => ({
  token: getCookie(tokenCookieName) || null,
  user: null,

  login: (token, user) => {
    get().setToken(token)
    get().setUser(user)
  },
  logout: () => {
    deleteCookie(tokenCookieName)
    set({ token: null, user: null })
  },
  setToken: (token) => {
    setCookie({ name: tokenCookieName, value: token })
    set({ token })
  },
  setUser: (user) => set({ user }),
}))
