import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'askQuestion',
  title: 'Ask Question',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
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
  preview: {
    select: {
      title: 'title', // First element of the landing title array
      media: 'image', // Landing image for preview
    },
    prepare({title, media}) {
      return {
        title: title || 'Home Ask Question Component',
        media, // Display the landing image in the preview
      }
    },
  },
})
