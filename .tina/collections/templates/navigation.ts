import type { TinaTemplate } from '@tinacms/cli'

const navigation: TinaTemplate = {
  name: 'navigation',
  label: 'Navigation',
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
        {
          type: 'object',
          label: 'Sub Menu',
          name: 'subMenuItems',
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
    },
  ],
}

export default navigation
