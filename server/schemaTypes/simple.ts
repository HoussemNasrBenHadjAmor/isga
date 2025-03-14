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
      name: 'subtitle',
      title: 'Subtitle',
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
      name: 'description',
      title: 'Description',
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
  ],
  preview: {
    select: {
      title: 'title.0.en',
      subtitle: 'subtitle.0.en',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'Details Component',
        subtitle: subtitle || 'Components Details',
      }
    },
  },
})
