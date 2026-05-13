export interface Backenders {
  id: number
  name: string
  surname: string
  years_of_experience: number
  preference: string
}

// This is the shape of every API response from your Express server
export interface ApiResponse<T = null> {
  success: boolean
  data?: T
  error?: string
  message?: string
}