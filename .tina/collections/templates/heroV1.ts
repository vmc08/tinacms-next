import type { TinaTemplate } from '@tinacms/cli'

const heroV1: TinaTemplate = {
  name: 'heroV1',
  label: 'Hero v1',
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
      label: 'Form',
      name: 'form',
      fields: [
        {
          type: 'string',
          label: 'Placeholder',
          name: 'placeholder',
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
            {
              type: 'string',
              label: 'Variant',
              name: 'variant',
              options: ['ghost', 'link', 'outline', 'solid', 'unstyled'],
            },
          ],
        },
      ],
    },
    {
      type: 'image',
      label: 'Background',
      name: 'background',
    },
  ],
}

export default heroV1
