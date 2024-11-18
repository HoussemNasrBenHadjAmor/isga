import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'financialIndustries',
  title: 'Financial Industries',
  type: 'document',
  fields: [
    defineField({
      name: 'landingIndustries',
      title: 'Industries Landing',
      type: 'landing',
    }),
  ],
})
