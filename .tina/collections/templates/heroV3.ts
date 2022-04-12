import type { TinaTemplate } from '@tinacms/cli'

const heroV3: TinaTemplate = {
  name: 'heroV3',
  label: 'Hero v3',
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
      type: 'image',
      label: 'Background',
      name: 'background',
    },
    {
      type: 'object',
      label: 'Action Buttons',
      name: 'actionButtons',
      list: true,
      fields: [
        {
          type: 'string',
          label: 'Label',
          name: 'label',
        },
        {
          type: 'string',
          label: 'Link',
          name: 'link',
        },
        {
          type: 'string',
          label: 'Variant',
          name: 'variant',
          options: ['ghost', 'link', 'outline', 'solid', 'unstyled'],
        },
      ],
    },
  ],
}

export default heroV3
