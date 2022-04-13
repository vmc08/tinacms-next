import type { TinaTemplate } from '@tinacms/cli'

const foooterV1: TinaTemplate = {
  name: 'foooterV2',
  label: 'Footer v2',
  fields: [
    {
      type: 'object',
      label: 'Socials',
      name: 'socials',
      list: true,
      fields: [
        {
          type: 'string',
          label: 'Type',
          name: 'type',
          options: ['facebook', 'instagram', 'twitter', 'github', 'dribbble'],
        },
        {
          type: 'string',
          label: 'Link',
          name: 'link',
        },
      ],
    },
    {
      type: 'object',
      label: 'Links',
      name: 'links',
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
    {
      type: 'string',
      label: 'Foot Note',
      name: 'footNote',
    },
  ],
}

export default foooterV1
