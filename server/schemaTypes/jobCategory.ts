import {defineField, defineType} from 'sanity'
import {ProjectsIcon} from '@sanity/icons'

export default defineType({
  name: 'jobCategory',
  title: 'Job Category',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Job type',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {
            title: 'Freelance',
            value: 'Freelance',
          },
          {
            title: 'Full Time',
            value: 'Full Time',
          },
          {
            title: 'Internship',
            value: 'Internship',
          },
          {
            title: 'Part Time',
            value: 'Part Time',
          },
          {
            title: 'Temporary',
            value: 'Temporary',
          },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'category',
      subtitle: 'type',
    },
    prepare: ({title, subtitle}) => ({
      title,
      subtitle,
      media: ProjectsIcon,
    }),
  },
})
