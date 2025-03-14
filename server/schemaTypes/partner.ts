import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'partner',
  title: 'Partner',
  type: 'document',
  fields: [
    // defineField({
    //   name: 'title',
    //   title: 'Partner Title',
    //   type: 'object',
    //   fields: [
    //     {name: 'en', type: 'string', title: 'English'},
    //     {name: 'fr', type: 'string', title: 'French'},
    //     {name: 'ar', type: 'string', title: 'Arabic'},
    //   ],
    // }),

    // defineField({
    //   name: 'subtitle',
    //   title: 'Partner Subtitle',
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'object',
    //       fields: [
    //         {name: 'en', type: 'string', title: 'English'},
    //         {name: 'fr', type: 'string', title: 'French'},
    //         {name: 'ar', type: 'string', title: 'Arabic'},
    //       ],
    //     },
    //   ],
    // }),

    // defineField({
    //   name: 'description',
    //   title: 'Partner Description',
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'object',
    //       fields: [
    //         {name: 'en', type: 'string', title: 'English'},
    //         {name: 'fr', type: 'string', title: 'French'},
    //         {name: 'ar', type: 'string', title: 'Arabic'},
    //       ],
    //     },
    //   ],
    // }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title.en',
      subtitle: 'subtitle.0.en',
      media: 'image',
    },
    prepare({title, subtitle, media}) {
      return {
        title: title || 'Partner',
        subtitle: subtitle || 'Partner Details',
        media,
      }
    },
  },
})
