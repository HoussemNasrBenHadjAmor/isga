import {defineField, defineType} from 'sanity'
import {DocumentSheetIcon} from '@sanity/icons'

export default defineType({
  name: 'newsPage',
  title: 'News Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        {name: 'en', type: 'string', title: 'English'},
        {name: 'fr', type: 'string', title: 'French'},
        {name: 'ar', type: 'string', title: 'Arabic'},
      ],
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'subtitle',
      title: 'subtitle',
      type: 'object',
      fields: [
        {name: 'en', type: 'string', title: 'English'},
        {name: 'fr', type: 'string', title: 'French'},
        {name: 'ar', type: 'string', title: 'Arabic'},
      ],
    }),

    defineField({
      name: 'image',
      title: 'Landing Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'metadata',
      title: 'Page Metadata',
      type: 'reference',
      to: {
        type: 'metadata',
      },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title.en',
      subtitle: 'subtitle.en',
      media: 'image',
    },
    prepare: ({title, subtitle, media}) => ({
      title,
      subtitle,
      media,
    }),
  },
})
