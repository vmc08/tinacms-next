import { TinaCloudCollection } from '@tinacms/cli'

import navigation from './templates/navigation'
import hero from './templates/hero'
import projects from './templates/projects'
import vision from './templates/vision'
import values from './templates/values'
import footer from './templates/footer'

const pages: TinaCloudCollection = {
  label: 'Pages',
  name: 'pages',
  path: 'contents/pages',
  fields: [
    {
      type: 'object',
      list: true,
      label: 'Page Blocks',
      name: 'blocks',
      templates: [navigation, hero, projects, vision, values, footer],
    },
  ],
}

export default pages
