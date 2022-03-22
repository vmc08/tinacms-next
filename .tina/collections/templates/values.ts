import type { TinaTemplate } from '@tinacms/cli'

const values: TinaTemplate = {
  name: 'values',
  label: 'Values',
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title',
    },
    {
      type: 'object',
      label: 'Values',
      name: 'valueItems',
      list: true,
      fields: [
        {
          type: 'image',
          label: 'Image',
          name: 'image',
        },
        {
          type: 'string',
          label: 'Description',
          name: 'description',
          ui: {
            component: 'textarea',
          },
        },
      ],
    },
  ],
}

export default values
