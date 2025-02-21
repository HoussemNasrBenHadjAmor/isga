import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'test',
  title: 'test',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'object',
      title: 'Title',
      fields: [
        {name: 'en', type: 'string', title: 'English'},
        {name: 'fr', type: 'string', title: 'French'},
        {name: 'ar', type: 'string', title: 'Arabic'},
      ],
    },
    {
      name: 'content',
      type: 'object',
      title: 'Content',
      fields: [
        {name: 'en', type: 'text', title: 'English'},
        {name: 'fr', type: 'text', title: 'French'},
        {name: 'ar', type: 'text', title: 'Arabic'},
      ],
    },
  ],
  preview: {
    select: {
      title: 'title', // First element of the landing title array
      subtitle: 'content', // First element of the landing subtitle array
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'Title',
        subtitle: subtitle || 'Content',
      }
    },
  },
})
