import { TinaCloudCollection } from '@tinacms/cli'

import navigation from './templates/navigation'
import heroV1 from './templates/heroV1'
import heroV2 from './templates/heroV2'
import heroV3 from './templates/heroV3'
import projects from './templates/projects'
import vision from './templates/vision'
import values from './templates/values'
import featuresV1 from './templates/featuresV1'
import featuresV2 from './templates/featuresV2'
import featuresV3 from './templates/featuresV3'
import foooterV1 from './templates/foooterV1'
import foooterV2 from './templates/foooterV2'

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
      templates: [
        navigation,
        heroV1,
        heroV2,
        heroV3,
        featuresV1,
        featuresV2,
        featuresV3,
        projects,
        vision,
        values,
        foooterV1,
        foooterV2,
      ],
    },
  ],
}

export default pages
