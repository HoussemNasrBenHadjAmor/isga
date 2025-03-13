import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'location',
  title: 'Location',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Landing Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'title',
      title: 'Landing Title',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'en', type: 'string', title: 'English'},
            {name: 'fr', type: 'string', title: 'French'},
            {name: 'ar', type: 'string', title: 'Arabic'},
          ],
        },
      ],
    }),

    defineField({
      name: 'subtitle',
      title: 'Landing Subtitle',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'en', type: 'string', title: 'English'},
            {name: 'fr', type: 'string', title: 'French'},
            {name: 'ar', type: 'string', title: 'Arabic'},
          ],
        },
      ],
    }),

    defineField({
      name: 'description',
      title: 'Landing Description',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'en', type: 'string', title: 'English'},
            {name: 'fr', type: 'string', title: 'French'},
            {name: 'ar', type: 'string', title: 'Arabic'},
          ],
        },
      ],
    }),

    defineField({
      name: 'details',
      title: 'Location details',
      description: 'A description of locations details',
      type: 'object',
      fields: [
        {name: 'en', type: 'reference', title: 'English', to: {type: 'jobBlock'}},
        {name: 'fr', type: 'reference', title: 'French', to: {type: 'jobBlock'}},
        {name: 'ar', type: 'reference', title: 'Arabic', to: {type: 'jobBlock'}},
      ],

      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'cards',
      title: 'Location cards',
      type: 'array',
      of: [{type: 'reference', to: {type: 'card'}}],
    }),

    defineField({
      name: 'slug',
      title: 'Location Slug',
      type: 'object',
      description: 'Need to provide the slug in lowerCase',
      fields: [
        {name: 'en', type: 'string', title: 'English'},
        {name: 'fr', type: 'string', title: 'French'},
        {name: 'ar', type: 'string', title: 'Arabic'},
      ],
      validation: (Rule) => Rule.required(),
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
      title: 'title[0]', // First element of the landing title array
      media: 'image', // Landing image for preview
    },
    prepare({title, media}) {
      return {
        title: title || 'Location',
        media, // Display the landing image in the preview
      }
    },
  },
})
