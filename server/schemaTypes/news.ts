import {defineField, defineType} from 'sanity'
import {DocumentSheetIcon} from '@sanity/icons'

export default defineType({
  name: 'news',
  title: 'News',
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
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'details',
      title: 'Details',
      description: 'A description of the article',
      type: 'object',
      fields: [
        {name: 'en', type: 'reference', title: 'English', to: {type: 'jobBlock'}},
        {name: 'fr', type: 'reference', title: 'French', to: {type: 'jobBlock'}},
        {name: 'ar', type: 'reference', title: 'Arabic', to: {type: 'jobBlock'}},
      ],

      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'file',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title.en', // Generate the slug from the 'title' field
        maxLength: 120, // Optional: Limit the slug length
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-') // Replace spaces with dashes
            .replace(/[^a-z0-9-]/g, ''), // Remove special characters
      },
      validation: (rule) => rule.required(), // Optional: Ensure slug is required
    }),

    defineField({
      name: 'category',
      title: 'News Category',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'newsCategory'}]}],
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'image',
      title: 'Article Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'display',
      title: 'Published',
      description: 'Show or Hide the article on the web site',
      type: 'boolean',
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
      subtitle: 'category.0.title.en',
    },
    prepare: ({title, subtitle}) => ({
      title,
      subtitle,
      media: DocumentSheetIcon,
    }),
  },
})
