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
      options: {
        list: [
          {
            title: 'Business & Technology Integration',
            value: 'Business & Technology Integration',
          },
          {
            title: 'Information Technology Operations',
            value: 'Information Technology Operations',
          },
          {
            title: 'Solution Architecture & Planning',
            value: 'Solution Architecture & Planning',
          },
          {
            title: 'Consulting',
            value: 'Consulting',
          },
          {
            title: 'Software Engineering',
            value: 'Software Engineering',
          },
          {
            title: 'Technology & Information Architectures',
            value: 'Technology & Information Architectures',
          },
          {
            title: 'Data & AI',
            value: 'Data & AI',
          },
        ],
      },
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
