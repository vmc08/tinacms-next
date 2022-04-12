import type { TinaTemplate } from '@tinacms/cli'

const heroV2: TinaTemplate = {
  name: 'heroV2',
  label: 'Hero v2',
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
      label: 'Button',
      name: 'button',
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
      ],
    },
  ],
}

export default heroV2
