import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'jobType',
  title: 'Work Job Type',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      validation: (rule) => rule.required(),
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare: ({title}) => ({
      title,
    }),
  },
})
