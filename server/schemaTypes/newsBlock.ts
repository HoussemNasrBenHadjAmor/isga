import {defineField, defineType} from 'sanity'
import {DocumentSheetIcon} from '@sanity/icons'

export default defineType({
  name: 'newsBlock',
  title: 'NewsBlock',
  type: 'document',
  fields: [
    defineField({
      name: 'details',
      title: 'Details',
      validation: (rule) => rule.required(),
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          marks: {
            annotations: [
              {name: 'color', title: 'Color', type: 'color'},
              {
                name: 'link',
                type: 'object',
                title: 'External Link',
                fields: [
                  {
                    name: 'href',
                    title: 'Link',
                    type: 'url',
                    description: 'Please provide a valid url link',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
        },
      ],
      description: 'The article details text',
    }),
  ],
  preview: {
    select: {
      title: 'details',
    },
    prepare: ({title}) => ({
      title,
      media: DocumentSheetIcon,
    }),
  },
})
