import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({
      name: 'landingContact',
      title: 'Contact Landing',
      type: 'reference',
      to: {type: 'landing'},
    }),
    defineField({
      name: 'cardContact',
      title: 'Contact card',
      type: 'array',
      of: [{type: 'reference', to: {type: 'card'}}],
    }),
    defineField({
      name: 'titleSection',
      title: 'Title Section',
      type: 'array',
      of: [{type: 'reference', to: {type: 'simple'}}],
    }),
  ],
})
