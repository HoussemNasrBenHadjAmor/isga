import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'artificialServices',
  title: 'Articial Services',
  type: 'document',
  fields: [
    defineField({
      name: 'landingServices',
      title: 'Services Landing',
      type: 'reference',
      to: {type: 'landing'},
    }),
    defineField({
      name: 'titleSection',
      title: 'Title Section',
      type: 'array',
      of: [{type: 'reference', to: {type: 'simple'}}],
    }),
    defineField({
      name: 'cardArtificalServices',
      title: 'Artifical Services Widget',
      type: 'array',
      of: [{type: 'reference', to: {type: 'card'}}],
    }),
  ],
})
