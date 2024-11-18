import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'about',
  type: 'document',
  fields: [
    defineField({
      name: 'landingAbout',
      title: 'About Landing',
      type: 'reference',
      to: [{type: 'landing'}],
    }),
    defineField({
      name: 'cardAboutText',
      title: 'About Text Card',
      type: 'array',
      of: [{type: 'reference', to: {type: 'card'}}],
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'reference', to: {type: 'simple'}}],
    }),
    defineField({
      name: 'cardAbout',
      title: 'About Card',
      type: 'array',
      of: [{type: 'reference', to: {type: 'card'}}],
    }),
  ],
})
