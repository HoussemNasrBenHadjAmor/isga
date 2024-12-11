import {defineField, defineType} from 'sanity'
import {RocketIcon} from '@sanity/icons'

export default defineType({
  name: 'job',
  title: 'Job',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      validation: (rule) => rule.required(),
      type: 'string',
    }),

    defineField({
      name: 'category',
      title: 'Job Category',
      type: 'reference',
      validation: (rule) => rule.required(),
      to: {type: 'jobCategory'},
    }),

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
            annotations: [{name: 'color', title: 'Color', type: 'color'}],
          },
        },
      ],
    }),

    defineField({
      name: 'qualifications',
      title: 'Qualifications',
      description: 'Job Requirements',
      validation: (rule) => rule.required(),
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          marks: {
            annotations: [{name: 'color', title: 'Color', type: 'color'}],
          },
        },
      ],
    }),
    defineField({
      name: 'display',
      title: 'Published',
      description: 'Show or Hide the job on the web site',
      type: 'boolean',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category.category',
    },
    prepare: ({title, subtitle}) => ({
      title,
      subtitle,
      media: RocketIcon,
    }),
  },
})
