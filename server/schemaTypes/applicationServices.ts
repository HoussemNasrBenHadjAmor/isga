import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'applicationServices',
  title: 'Application Services',
  type: 'document',
  fields: [
    defineField({
      name: 'landingServices',
      title: 'Services Landing',
      type: 'landing',
    }),
  ],
})
