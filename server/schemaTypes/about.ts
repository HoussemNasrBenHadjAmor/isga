import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'about',
  type: 'document',
  fields: [
    defineField({
      name: 'landingAbout',
      title: 'About Landing',
      type: 'landing',
    }),
  ],
})
