import { mediaHandlerConfig, createMediaHandler } from 'next-tinacms-cloudinary/dist/handlers'
import { isAuthorized } from '@tinacms/auth'
import { isDev } from '@utils/envUtils'

export const config = mediaHandlerConfig

export default createMediaHandler({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  authorized: async (req) => {
    try {
      if (isDev) {
        return true
      }
      const user = await isAuthorized(req)
      return user?.verified || false
    } catch (e) {
      return false
    }
  },
})
