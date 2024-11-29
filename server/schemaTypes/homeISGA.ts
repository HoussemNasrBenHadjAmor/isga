import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'chooseISGA',
  title: 'Choose ISGA',
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
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [{type: 'reference', to: {type: 'card'}}],
    }),
  ],
  preview: {
    select: {
      title: 'title', // First element of the landing title array
      media: 'image', // Landing image for preview
    },
    prepare({title, media}) {
      return {
        title: title || 'Home ISGA Component',
        media, // Display the landing image in the preview
      }
    },
  },
})
