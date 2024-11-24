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
})
