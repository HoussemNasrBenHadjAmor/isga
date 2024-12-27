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
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

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
        source: 'title', // Generate the slug from the 'title' field
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
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category.category',
    },
    prepare: ({title, subtitle}) => ({
      title,
      subtitle,
      media: DocumentSheetIcon,
    }),
  },
})
