import type { TinaTemplate } from '@tinacms/cli'

const vision: TinaTemplate = {
  name: 'vision',
  label: 'Vision',
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
      ui: {
        component: 'textarea',
      },
    },
  ],
}

export default vision
