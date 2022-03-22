import type { TinaTemplate } from '@tinacms/cli'

const hero: TinaTemplate = {
  name: 'hero',
  label: 'Hero Block',
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
      label: 'Image',
      name: 'image',
    },
  ],
}

export default hero
