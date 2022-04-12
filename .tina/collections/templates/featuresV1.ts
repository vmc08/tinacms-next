import type { TinaTemplate } from '@tinacms/cli'

const featuresV1: TinaTemplate = {
  name: 'featuresV1',
  label: 'Features v1',
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title',
    },
    {
      type: 'string',
      label: 'Sub Title',
      name: 'subtitle',
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

export default featuresV1
