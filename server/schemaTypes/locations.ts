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
  ],
  preview: {
    select: {
      title: 'location.title[0]', // First element of the landing title array
      subtitle: 'landing.subtitle[0]', // First element of the landing subtitle array
      media: 'landing.image', // Landing image for preview
    },
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Locations Page',
        subtitle: subtitle || 'Locations Page Details',
        media, // Display the landing image in the preview
      }
    },
  },
})
