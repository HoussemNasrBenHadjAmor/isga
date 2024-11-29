import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({
      name: 'landing',
      title: 'Contact Landing',
      type: 'reference',
      to: {type: 'landing'},
    }),
    defineField({
      name: 'card',
      title: 'Contact card',
      type: 'array',
      of: [{type: 'reference', to: {type: 'card'}}],
    }),
    defineField({
      name: 'content',
      title: 'Section Content',
      type: 'reference',
      to: {type: 'simple'},
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
        title: title || 'Contact Page',
        subtitle: subtitle || 'Contact Page Details',
        media, // Display the landing image in the preview
      }
    },
  },
})
