import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'governmentIndustries',
  title: 'Government Industries',
  type: 'document',
  fields: [
    defineField({
      name: 'landingIndustries',
      title: 'Industries Landing',
      type: 'landing',
    }),
  ],
})
