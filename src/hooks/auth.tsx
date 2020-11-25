import React, { createContext, useCallback, useState, useContext } from 'react'
import jwtDecode from 'jwt-decode'

import User from 'src/interfaces/User'

import api from 'src/services/api'

interface SignInCredentials {
  email: string
  password: string
}

interface AuthState {
  token: string
  user: User
}

interface AuthContextData {
  user: User
  signIn(credentials: SignInCredentials): Promise<void>
  signOut(): void
  updateUser(user: User): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@fmm-sensor:token')
    const user = localStorage.getItem('@fmm-sensor:user')
    const isTokenValid =
      token && Date.now() / 1000 <= (jwtDecode(token) as any).exp

    if (!isTokenValid) {
      localStorage.removeItem('@fmm-sensor:token')
      localStorage.removeItem('@fmm-sensor:user')
    }

    if (user && token && isTokenValid) {
      console.log((jwtDecode(token) as any).exp, Date.now() / 1000)
      api.defaults.headers.authorization = `Bearer ${token}`

      return { token, user: JSON.parse(user) }
    }

    return {} as AuthState
  })

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post<AuthState>('user/authenticate', {
      email,
      password,
    })

    const { token, user } = response.data

    localStorage.setItem('@fmm-sensor:token', token)
    localStorage.setItem('@fmm-sensor:user', JSON.stringify(user))

    api.defaults.headers.authorization = `Bearer ${token}`

    setData({ token, user })
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem('@fmm-sensor:token')
    localStorage.removeItem('@fmm-sensor:user')

    setData({} as AuthState)
  }, [])

  const updateUser = useCallback(
    (user: User) => {
      localStorage.setItem('@fmm-sensor:user', JSON.stringify(user))

      setData({
        token: data.token,
        user,
      })
    },
    [data.token],
  )

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}
