import type { TinaTemplate } from '@tinacms/cli'

const footer: TinaTemplate = {
  name: 'footer',
  label: 'Footer',
  fields: [
    {
      type: 'object',
      label: 'Menu',
      name: 'menuItems',
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
      ],
    },
  ],
}

export default footer
