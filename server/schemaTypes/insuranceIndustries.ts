import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'insuranceIndustries',
  title: 'Insurance Industries',
  type: 'document',
  fields: [
    defineField({
      name: 'landing',
      title: 'Industries Landing',
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
      title: 'Insurance Industries card',
      type: 'array',
      of: [{type: 'reference', to: {type: 'card'}}],
    }),
  ],
})
