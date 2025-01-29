import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aiRd',
  title: 'aiRd',
  type: 'document',
  fields: [
    defineField({
      name: 'landing',
      title: 'Landing',
      type: 'reference',
      to: {type: 'landing'},
    }),
    defineField({
      name: 'first_content',
      title: 'The first Title section and its content',
      type: 'reference',
      to: {type: 'simple'},
    }),

    defineField({
      name: 'second_content',
      title: 'The second Title section and its content',
      type: 'reference',
      to: {type: 'simple'},
    }),
    defineField({
      name: 'second_card',
      title: 'Second Card',
      type: 'array',
      of: [{type: 'reference', to: {type: 'card'}}],
    }),
  ],
  preview: {
    select: {
      title: 'landing.title[0]', // First element of the landing title array
      subtitle: 'landing.subtitle[0]', // First element of the landing subtitle array
      media: 'landing.image', // Landing image for preview
    },
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Software development Page',
        subtitle: subtitle || 'Software development Details',
        media, // Display the landing image in the preview
      }
    },
  },
})
