import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'landing',
  title: 'Landing',
  type: 'document',
  fields: [
    defineField({
      name: 'landingTitle',
      title: 'Landing Title',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'landingSubtitle',
      title: 'Landing Subtitle',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'landingDescription',
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
      name: 'landingImage',
      title: 'Landing Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
