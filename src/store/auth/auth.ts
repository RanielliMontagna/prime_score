import { deleteCookie, getCookie, setCookie } from 'helpers/cookies'
import { create } from 'zustand'

import { AuthState, AuthStore } from './types'

const tokenCookieName = 'token'

const initialState: AuthState = {
  token: getCookie(tokenCookieName) || null,
  user: null,
}

export const useAuthStore = create<AuthStore>((set, get) => ({
  ...initialState,

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
  clearStore: () => set(initialState),
}))
