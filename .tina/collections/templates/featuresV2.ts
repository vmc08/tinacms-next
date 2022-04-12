import type { TinaTemplate } from '@tinacms/cli'

const featuresV2: TinaTemplate = {
  name: 'featuresV2',
  label: 'Features v2',
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title',
    },
    {
      type: 'string',
      label: 'Description',
      name: 'description',
    },
    {
      type: 'object',
      label: 'Features',
      name: 'features',
      list: true,
      fields: [
        {
          type: 'string',
          label: 'Title',
          name: 'title',
        },
        {
          type: 'string',
          label: 'Description',
          name: 'description',
        },
      ],
    },
  ],
}

export default featuresV2
