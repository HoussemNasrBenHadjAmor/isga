import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'jobType',
  title: 'Work Job Type',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        {name: 'en', type: 'string', title: 'English'},
        {name: 'fr', type: 'string', title: 'French'},
        {name: 'ar', type: 'string', title: 'Arabic'},
      ],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title.en',
    },
    prepare: ({title}) => ({
      title,
    }),
  },
})
