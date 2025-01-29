import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aiConsulting',
  title: 'aiConsulting',
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
      name: 'first_card',
      title: 'First Card',
      type: 'array',
      of: [{type: 'reference', to: {type: 'card'}}],
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
    defineField({
      name: 'card',
      title: 'Card',
      type: 'reference',
      to: {type: 'card'},
    }),
    defineField({
      name: 'third_content',
      title: 'The third Title section and its content',
      type: 'reference',
      to: {type: 'simple'},
    }),
    defineField({
      name: 'third_card',
      title: 'Third Card',
      type: 'array',
      of: [{type: 'reference', to: {type: 'card'}}],
    }),
    defineField({
      name: 'fourth_content',
      title: 'The fourth Title section and its content',
      type: 'reference',
      to: {type: 'simple'},
    }),
    defineField({
      name: 'fourth_card',
      title: 'Fourth Card',
      type: 'array',
      of: [{type: 'reference', to: {type: 'card'}}],
    }),

    defineField({
      name: 'fifth_content',
      title: 'The Fifth Title section and its content',
      type: 'reference',
      to: {type: 'simple'},
    }),
    defineField({
      name: 'fifth_card',
      title: 'Fifth Card',
      type: 'array',
      of: [{type: 'reference', to: {type: 'card'}}],
    }),

    defineField({
      name: 'sixth_content',
      title: 'The Sixth Title section and its content',
      type: 'reference',
      to: {type: 'simple'},
    }),

    defineField({
      name: 'faq',
      title: 'FAQ',
      type: 'array',
      of: [{type: 'reference', to: {type: 'simple'}}],
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
