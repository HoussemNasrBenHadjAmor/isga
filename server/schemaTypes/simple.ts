import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'simple',
  title: 'Simple',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
  preview: {
    select: {
      title: 'title[0]', // First element of the landing title array
    },
    prepare({title}) {
      return {
        title: title || 'Details Component',
      }
    },
  },
})
