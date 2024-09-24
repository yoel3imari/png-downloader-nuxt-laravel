// tokenService.ts
import { useStorage } from '@vueuse/core'
import { EncryptJWT, jwtDecrypt } from 'jose'

const TOKEN_KEY = 'auth_token'
const tokenStorage = useStorage(TOKEN_KEY, '')

// This should be a secure, randomly generated key
const SECRET_KEY = new TextEncoder().encode(process.env.NUXT_JWT_SECRET_KEY || '0af4e75074159cda99c1256cd9fd1b30')

export const tokenService = {
  /**
   * 
   * @param token 
   */
  async setToken(token: string): Promise<void> {
    const encryptedToken = await new EncryptJWT({ token })
      .setProtectedHeader({ alg: 'dir', enc: 'A256GCM' })
      .encrypt(SECRET_KEY)
    
    tokenStorage.value = encryptedToken
  },

  /**
   * 
   * @returns 
   */
  async getToken(): Promise<string | null> {
    const encryptedToken = tokenStorage.value
    if (!encryptedToken) return null

    try {
      const { payload } = await jwtDecrypt(encryptedToken, SECRET_KEY)
      return payload.token as string
    } catch (error) {
      console.error('Token decryption failed:', error)
      return null
    }
  },

  /**
   * 
   */
  removeToken(): void {
    localStorage.removeItem(TOKEN_KEY)
  },

  /**
   * 
   * @returns boolean
   */
  hasToken(): boolean {
    return !!tokenStorage.value
  }
}