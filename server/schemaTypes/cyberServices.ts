import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'cyberServices',
  title: 'Cyber Services',
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
      name: 'card',
      title: 'Cyber Services Widget',
      type: 'array',
      of: [{type: 'reference', to: {type: 'card'}}],
    }),
  ],
})
