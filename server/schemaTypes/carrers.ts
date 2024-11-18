import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'carrers',
  title: 'Carrers',
  type: 'document',
  fields: [
    defineField({
      name: 'landingCarrers',
      title: 'Carrers Landing',
      type: 'reference',
      to: {type: 'landing'},
    }),
  ],
})
