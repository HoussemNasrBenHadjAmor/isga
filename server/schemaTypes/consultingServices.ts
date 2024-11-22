import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'consultingServices',
  title: 'Consulting Services',
  type: 'document',
  fields: [
    defineField({
      name: 'landing',
      title: 'Services Landing',
      type: 'reference',
      to: [{type: 'landing'}],
    }),
    defineField({
      name: 'title_section_primary',
      title: 'Title Section Primary',
      type: 'array',
      of: [{type: 'reference', to: {type: 'simple'}}],
    }),
    defineField({
      name: 'card_primary',
      title: 'Consulting Services Card Primary',
      type: 'array',
      of: [{type: 'reference', to: {type: 'card'}}],
    }),
    defineField({
      name: 'title_section_secondary',
      title: 'Title Section Secondary',
      type: 'array',
      of: [{type: 'reference', to: {type: 'simple'}}],
    }),
    defineField({
      name: 'card',
      title: 'Consulting Services Card Secondary',
      type: 'array',
      of: [{type: 'reference', to: {type: 'card'}}],
    }),
  ],
})
