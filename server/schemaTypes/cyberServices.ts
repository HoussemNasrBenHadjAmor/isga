import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'cyberServices',
  title: 'Cyber Services',
  type: 'document',
  fields: [
    defineField({
      name: 'landingServices',
      title: 'Services Landing',
      type: 'landing',
    }),
  ],
})
