import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'articialServices',
  title: 'Articial Services',
  type: 'document',
  fields: [
    defineField({
      name: 'landingServices',
      title: 'Services Landing',
      type: 'landing',
    }),
  ],
})
