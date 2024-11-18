import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'telecommunicationsIndustries',
  title: 'Telecommunications Industries',
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
      name: 'cardTelecommunicationsIndustries',
      title: 'Telecommunications Industries card',
      type: 'array',
      of: [{type: 'reference', to: {type: 'card'}}],
    }),
  ],
})
