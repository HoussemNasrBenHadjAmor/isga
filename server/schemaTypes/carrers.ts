import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'carrers',
  title: 'Carrers',
  type: 'document',
  fields: [
    defineField({
      name: 'landing',
      title: 'About Landing',
      type: 'reference',
      to: [{type: 'landing'}],
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
      title: 'landing.title[0]', // First element of the landing title array
      subtitle: 'landing.subtitle[0]', // First element of the landing subtitle array
      media: 'landing.image', // Landing image for preview
    },
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Carrers Page',
        subtitle: subtitle || 'Carrers Page Details',
        media, // Display the landing image in the preview
      }
    },
  },
})
