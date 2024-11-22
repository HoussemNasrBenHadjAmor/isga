import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'landing',
      title: 'Home Landing',
      type: 'reference',
      to: [{type: 'landing'}],
    }),
    defineField({
      name: 'content',
      title: 'Title Section and its content',
      type: 'reference',
      to: {type: 'simple'},
    }),
    defineField({
      name: 'card_primary',
      title: 'Home Card Primary',
      type: 'array',
      of: [{type: 'reference', to: {type: 'card'}}],
    }),
    defineField({
      name: 'home_isga',
      title: 'Why choose ISGA',
      type: 'reference',
      to: {type: 'chooseISGA'},
    }),
    defineField({
      name: 'card_secondary',
      title: 'Home Card Secondary',
      type: 'array',
      of: [{type: 'reference', to: {type: 'card'}}],
    }),
  ],
})
