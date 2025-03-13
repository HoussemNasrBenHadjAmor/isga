import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'about',
  type: 'document',
  fields: [
    defineField({
      name: 'landing',
      title: 'About Landing',
      type: 'reference',
      to: {type: 'landing'},
    }),
    defineField({
      name: 'content',
      title: 'Title Section and its content',
      type: 'reference',
      to: {type: 'simple'},
    }),
    defineField({
      name: 'card_primary',
      title: 'About Text Card',
      type: 'array',
      of: [{type: 'reference', to: {type: 'card'}}],
    }),
    defineField({
      name: 'card_secondary',
      title: 'About Card',
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
      title: 'landing.title.en', // First element of the landing title array
      subtitle: 'landing.subtitle.en', // First element of the landing subtitle array
      media: 'landing.image', // Landing image for preview
    },
    prepare({title, subtitle, media}) {
      return {
        title: title || 'About Page',
        subtitle: subtitle || 'About Page Details',
        media, // Display the landing image in the preview
      }
    },
  },
})
