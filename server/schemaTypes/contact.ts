import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({
      name: 'landingContact',
      title: 'Contact Landing',
      type: 'landing',
    }),
  ],
})
