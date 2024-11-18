import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'insuranceIndustries',
  title: 'Insurance Industries',
  type: 'document',
  fields: [
    defineField({
      name: 'landingIndustries',
      title: 'Industries Landing',
      type: 'landing',
    }),
  ],
})
