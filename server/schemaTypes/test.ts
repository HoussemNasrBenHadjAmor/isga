import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'test',
  title: 'test',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'object',
      title: 'Title',
      fields: [
        {name: 'en', type: 'string', title: 'English'},
        {name: 'fr', type: 'string', title: 'French'},
        {name: 'ar', type: 'string', title: 'Arabic'},
      ],
    }),

    defineField({
      name: 'content',
      type: 'object',
      title: 'Content',
      fields: [
        {name: 'en', type: 'text', title: 'English'},
        {name: 'fr', type: 'text', title: 'French'},
        {name: 'ar', type: 'text', title: 'Arabic'},
      ],
    }),

    defineField({
      name: 'post',
      title: 'Post',
      type: 'reference',
      to: {type: 'card'},
    }),
  ],
  preview: {
    select: {
      title: 'title.en', // First element of the landing title array
      content: 'content.en', // First element of the landing subtitle array
    },
    prepare({title, content}) {
      return {
        title: title || 'Title',
        subtitle: content || 'Content',
      }
    },
  },
})
