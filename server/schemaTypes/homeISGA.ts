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
      name: 'newTitle',
      title: 'Title',
      type: 'object',
      fields: [
        {name: 'en', type: 'string', title: 'English'},
        {name: 'fr', type: 'string', title: 'French'},
        {name: 'ar', type: 'string', title: 'Arabic'},
      ],
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'string'}],
    }),

    defineField({
      name: 'newDescription',
      title: 'New Description',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'en', type: 'string', title: 'English'},
            {name: 'fr', type: 'string', title: 'French'},
            {name: 'ar', type: 'string', title: 'Arabic'},
          ],
        },
      ],
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
