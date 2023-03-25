import Cookies from 'js-cookie'
import dayjs from 'dayjs'

interface SetCookie {
  name: string
  value: string
  days?: number
}

export function setCookie({ name, value, days = 7 }: SetCookie) {
  const date = dayjs().add(days, 'day').toDate()

  const expires = `expires=${date.toUTCString()}`
  const secure = location.protocol === 'https:' ? 'secure' : ''
  const cookieString = `${name}=${value}; ${expires}; path=/${secure}; HttpOnly`

  Cookies.set(name, value, { expires: date })
}

export function getCookie(name: string) {
  return Cookies.get(name)
}

export function deleteCookie(name: string) {
  Cookies.remove(name)
}
