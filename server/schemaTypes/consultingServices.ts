import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'consultingServices',
  title: 'Consulting Services',
  type: 'document',
  fields: [
    defineField({
      name: 'landingServices',
      title: 'Services Landing',
      type: 'landing',
    }),
  ],
})
