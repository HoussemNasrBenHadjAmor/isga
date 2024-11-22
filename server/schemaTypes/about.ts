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
      to: [{type: 'landing'}],
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
  ],
})
