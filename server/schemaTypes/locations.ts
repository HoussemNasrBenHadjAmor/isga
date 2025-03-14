import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'locations',
  title: 'Locations',
  type: 'document',
  fields: [
    defineField({
      name: 'landing',
      title: 'Locations Landing',
      type: 'reference',
      to: {type: 'landing'},
    }),

    defineField({
      name: 'locations',
      title: 'Locations',
      type: 'array',
      of: [{type: 'reference', to: {type: 'location'}}],
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
      title: 'title.en', // First element of the landing title array

      media: 'landing.image', // Landing image for preview
    },
    prepare({title, media}) {
      return {
        title: title || 'Locations Page',
        media, // Display the landing image in the preview
      }
    },
  },
})
