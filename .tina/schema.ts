import { defineSchema, defineConfig } from 'tinacms'
import { pages } from './collections'

export default defineSchema({
  collections: [pages],
})

// Your tina config
// ==============
const branch = 'main'
// When working locally, hit our local filesystem.
// On a Vercel deployment, hit the Tina Cloud API
export const tinaConfig = defineConfig({
  apiURL: process.env.NEXT_PUBLIC_TINA_API_URL,
  mediaStore: async () => {
    const pack = await import('next-tinacms-cloudinary')
    return pack.TinaCloudCloudinaryMediaStore
  },
  cmsCallback: (cms) => {
    //  add your CMS callback code here (if you want)

    // The Route Mapper
    /**
     * 1. Import `tinacms` and `RouteMappingPlugin`
     **/
    import('tinacms').then(({ RouteMappingPlugin }) => {
      /**
       * 2. Define the `RouteMappingPlugin` see https://tina.io/docs/tinacms-context/#the-routemappingplugin for more details
       **/
      const RouteMapping = new RouteMappingPlugin((collection, document) => {
        return undefined
      })
      /**
       * 3. Add the `RouteMappingPlugin` to the `cms`.
       **/
      cms.plugins.add(RouteMapping)
    })
  },
})
