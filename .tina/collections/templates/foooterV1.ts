import type { TinaTemplate } from '@tinacms/cli'

const foooterV1: TinaTemplate = {
  name: 'foooterV1',
  label: 'Footer v1',
  fields: [
    {
      type: 'image',
      label: 'Logo',
      name: 'logo',
    },
    {
      type: 'string',
      label: 'Description',
      name: 'description',
    },
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
      label: 'Footer Groups',
      name: 'groups',
      list: true,
      fields: [
        {
          type: 'string',
          label: 'Group Name',
          name: 'groupName',
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
