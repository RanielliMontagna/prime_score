interface User {
  displayName: string | null
  email: string | null
  photoURL: string | null
  uid: string
}

export interface AuthState {
  token: string | null
  user: User | null
}

export interface AuthStore extends AuthState {
  login: (token: string, user: User) => void
  logout: () => void
  setToken: (token: string) => void
  setUser: (user: User) => void
}
