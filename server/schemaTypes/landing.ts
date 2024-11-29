import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'landing',
  title: 'Landing',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Landing Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'title',
      title: 'Landing Title',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'subtitle',
      title: 'Landing Subtitle',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'description',
      title: 'Landing Description',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'landingCategories'}}],
    }),

    defineField({
      name: 'author',
      title: 'Owner fullName',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title[0]', // First element of the landing title array
      media: 'image', // Landing image for preview
    },
    prepare({title, media}) {
      return {
        title: title || 'Landing',
        media, // Display the landing image in the preview
      }
    },
  },
})
