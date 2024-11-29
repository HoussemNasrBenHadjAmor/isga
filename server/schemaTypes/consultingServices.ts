import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'consultingServices',
  title: 'Consulting Services',
  type: 'document',
  fields: [
    defineField({
      name: 'landing',
      title: 'Services Landing',
      type: 'reference',
      to: [{type: 'landing'}],
    }),
    defineField({
      name: 'title_section_primary',
      title: 'Title Section Primary',
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
      name: 'card_primary',
      title: 'Consulting Services Card Primary',
      type: 'array',
      of: [{type: 'reference', to: {type: 'card'}}],
    }),
    defineField({
      name: 'title_section_secondary',
      title: 'Title Section Secondary',
      type: 'reference',
      to: {type: 'simple'},
    }),
    defineField({
      name: 'card',
      title: 'Consulting Services Card Secondary',
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
        title: title || 'Consulting Services Page',
        subtitle: subtitle || 'Consulting Services Page Details',
        media, // Display the landing image in the preview
      }
    },
  },
})
