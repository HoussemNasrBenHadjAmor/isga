import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'applicationServices',
  title: 'Application Services',
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
      type: 'array',
      of: [{type: 'reference', to: {type: 'simple'}}],
    }),
    defineField({
      name: 'card_primary',
      title: 'Application Services Card Primary',
      type: 'array',
      of: [{type: 'reference', to: {type: 'card'}}],
    }),
    defineField({
      name: 'card_secondary',
      title: 'Application Services Card Secondary',
      type: 'array',
      of: [{type: 'reference', to: {type: 'card'}}],
    }),
  ],
})
