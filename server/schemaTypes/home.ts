import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'landingHome',
      title: 'Home Landing',
      type: 'landing',
    }),
    defineField({
      name: 'cardHome',
      title: 'Home Card',
      type: 'array',
      of: [{type: 'reference', to: {type: 'card'}}],
    }),
  ],
})
