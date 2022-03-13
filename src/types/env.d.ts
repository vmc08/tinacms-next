declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_TINA_CLIENT_ID: string
      NEXT_PUBLIC_TINA_EDIT_BRANCH: string
      NEXT_PUBLIC_TINA_API_URL: string
      NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: string
      NEXT_PUBLIC_CLOUDINARY_API_KEY: string
      CLOUDINARY_API_SECRET: string
    }
  }
}

export { }
