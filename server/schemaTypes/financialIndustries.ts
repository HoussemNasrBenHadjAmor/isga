import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'financialIndustries',
  title: 'Financial Industries',
  type: 'document',
  fields: [
    defineField({
      name: 'landingIndustries',
      title: 'Industries Landing',
      type: 'reference',
      to: {type: 'landing'},
    }),
    defineField({
      name: 'titleSection',
      title: 'Title Section',
      type: 'array',
      of: [{type: 'reference', to: {type: 'simple'}}],
    }),
    defineField({
      name: 'cardFinancialIndustries',
      title: 'Financial Industries card',
      type: 'array',
      of: [{type: 'reference', to: {type: 'card'}}],
    }),
  ],
})