import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'carrers',
  title: 'Carrers',
  type: 'document',
  fields: [
    defineField({
      name: 'landing',
      title: 'Carrers Landing',
      type: 'reference',
      to: {type: 'landing'},
    }),
  ],
})
