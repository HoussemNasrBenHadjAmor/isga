import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'artificialServices',
  title: 'Articial Services',
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
      title: 'Artifical Services Widget',
      type: 'array',
      of: [{type: 'reference', to: {type: 'card'}}],
    }),
  ],
})
