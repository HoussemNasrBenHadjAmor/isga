import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'landingHome',
      title: 'Home Landing',
      type: 'reference',
      to: [{type: 'landing'}],
    }),
    defineField({
      name: 'titleSection',
      title: 'Title Section',
      type: 'array',
      of: [{type: 'reference', to: {type: 'simple'}}],
    }),
    defineField({
      name: 'cardHomePrimary',
      title: 'Home Card Primary',
      type: 'array',
      of: [{type: 'reference', to: {type: 'card'}}],
    }),
    defineField({
      name: 'homeISGA',
      title: 'Why choose ISGA',
      type: 'array',
      of: [{type: 'reference', to: {type: 'chooseISGA'}}],
    }),
    defineField({
      name: 'cardHomeSecondary',
      title: 'Home Card Secondary',
      type: 'array',
      of: [{type: 'reference', to: {type: 'card'}}],
    }),
  ],
})
