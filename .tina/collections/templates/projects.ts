import type { TinaTemplate } from '@tinacms/cli'

const projects: TinaTemplate = {
  name: 'projects',
  label: 'Projects',
  fields: [
    {
      type: 'object',
      label: 'Project',
      name: 'projectItem',
      list: true,
      fields: [
        {
          type: 'string',
          label: 'Link',
          name: 'link',
        },
        {
          type: 'image',
          label: 'Image',
          name: 'image',
        },
      ],
    },
  ],
}

export default projects
