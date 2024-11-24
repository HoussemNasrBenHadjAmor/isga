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
  ],
})
