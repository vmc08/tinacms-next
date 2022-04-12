import { TinaCloudCollection } from '@tinacms/cli'

import navigation from './templates/navigation'
import heroV1 from './templates/heroV1'
import heroV2 from './templates/heroV2'
import heroV3 from './templates/heroV3'
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
      templates: [navigation, heroV1, heroV2, heroV3, projects, vision, values, footer],
    },
  ],
}

export default pages
