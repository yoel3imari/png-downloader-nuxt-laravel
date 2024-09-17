export interface User {
  name: string
  email: string
  password: string
  email_verified: string
  created_at: string
  updated_at: string
}

export interface Credentials {
  email: string
  password: string
} 

export interface ApiResponse {
  message: string
  status: number
  data?: any
  error?: any 
}