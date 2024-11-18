import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'managedServices',
  title: 'Managed Services',
  type: 'document',
  fields: [
    defineField({
      name: 'landingServices',
      title: 'Services Landing',
      type: 'landing',
    }),
  ],
})
