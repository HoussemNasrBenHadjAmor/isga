import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'technologiesServices',
  title: 'Technologies Services',
  type: 'document',
  fields: [
    defineField({
      name: 'landing',
      title: 'Services Landing',
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
      title: 'Section Content',
      type: 'reference',
      to: {type: 'simple'},
    }),
    defineField({
      name: 'card',
      title: 'Technologies Services Card',
      type: 'array',
      of: [{type: 'reference', to: {type: 'card'}}],
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
        title: title || 'Technologies Services Page',
        subtitle: subtitle || 'Technologies Services Page Details',
        media, // Display the landing image in the preview
      }
    },
  },
})
