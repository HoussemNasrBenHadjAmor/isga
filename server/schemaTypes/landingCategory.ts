import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'landingCategories',
  title: 'Landing Categories',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
})
