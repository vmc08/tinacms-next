import type { TinaTemplate } from '@tinacms/cli'

const featuresV3: TinaTemplate = {
  name: 'featuresV3',
  label: 'Features v3',
  fields: [
    {
      type: 'object',
      label: 'Features',
      name: 'features',
      list: true,
      fields: [
        {
          type: 'image',
          label: 'Icon',
          name: 'imageIcon',
        },
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

export default featuresV3
