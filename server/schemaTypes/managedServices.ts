import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'managedServices',
  title: 'Managed Services',
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
      title: 'Title Section and its content',
      type: 'reference',
      to: {type: 'simple'},
    }),

    defineField({
      name: 'card',
      title: 'Managed Services Card',
      type: 'array',
      of: [{type: 'reference', to: {type: 'card'}}],
    }),
  ],
})
