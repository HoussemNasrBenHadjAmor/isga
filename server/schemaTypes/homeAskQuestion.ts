import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'askQuestion',
  title: 'Ask Question',
  type: 'document',
  fields: [
    defineField({
      name: 'Image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
})
