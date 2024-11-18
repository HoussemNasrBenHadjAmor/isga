import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'telecommunicationsIndustries',
  title: 'Telecommunications Industries',
  type: 'document',
  fields: [
    defineField({
      name: 'landingIndustries',
      title: 'Industries Landing',
      type: 'landing',
    }),
  ],
})
