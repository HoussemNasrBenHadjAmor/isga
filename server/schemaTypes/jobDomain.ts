import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'jobDomain',
  title: 'Job Domain',
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
