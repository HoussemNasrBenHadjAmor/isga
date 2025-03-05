import {defineField, defineType} from 'sanity'
import {RocketIcon} from '@sanity/icons'

export default defineType({
  name: 'jobBlock',
  title: 'Job Block',
  type: 'document',
  fields: [
    defineField({
      name: 'description',
      title: 'Description',
      validation: (rule) => rule.required(),
      description:
        'A description of our company highlighting both requested and essential responsibilities.',
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
    }),
  ],
  preview: {
    select: {
      title: 'description',
    },
    prepare: ({title}) => ({
      title,
      media: RocketIcon,
    }),
  },
})
