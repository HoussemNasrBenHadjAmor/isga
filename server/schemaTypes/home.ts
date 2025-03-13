import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'landing',
      title: 'Home Landing',
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
      title: 'Home Card Primary',
      type: 'array',
      of: [{type: 'reference', to: {type: 'card'}}],
    }),
    defineField({
      name: 'home_isga',
      title: 'Why choose ISGA',
      type: 'reference',
      to: {type: 'chooseISGA'},
    }),
    defineField({
      name: 'card_secondary',
      title: 'Home Card Secondary',
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
        title: title || 'Home Page',
        subtitle: subtitle || 'Home Page Details',
        media, // Display the landing image in the preview
      }
    },
  },
})
