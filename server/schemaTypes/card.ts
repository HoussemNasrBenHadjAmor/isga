import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'card',
  title: 'Card',
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
    }),

    defineField({
      name: 'svg_path',
      title: 'SVG path for ICON',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
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
      title: 'Description',
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
      name: 'image',
      title: 'Landing Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title.en', // First element of the landing title array
      subtitle: 'subtitle.en', // First element of the landing subtitle array
      media: 'image', // Landing image for preview
    },
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Card Component',
        subtitle: subtitle || 'Card Details',
        media, // Display the landing image in the preview
      }
    },
  },
})
