import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'telecommunicationsIndustries',
  title: 'Telecommunications Industries',
  type: 'document',
  fields: [
    defineField({
      name: 'landing',
      title: 'Industries Landing',
      type: 'reference',
      to: {type: 'landing'},
    }),
    defineField({
      name: 'title_section',
      title: 'Title Section',
      type: 'reference',
      to: {type: 'simple'},
    }),
    defineField({
      name: 'content',
      title: 'Title Section and its content',
      type: 'reference',
      to: {type: 'simple'},
    }),
    defineField({
      name: 'card',
      title: 'Telecommunications Industries card',
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
        title: title || 'Telecommunications Industries Page',
        subtitle: subtitle || 'Telecommunications Industries Page Details',
        media, // Display the landing image in the preview
      }
    },
  },
})
