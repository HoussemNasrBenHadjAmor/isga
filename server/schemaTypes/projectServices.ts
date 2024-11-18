import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projectServices',
  title: 'Project Services',
  type: 'document',
  fields: [
    defineField({
      name: 'landingServices',
      title: 'Services Landing',
      type: 'landing',
    }),
  ],
})
