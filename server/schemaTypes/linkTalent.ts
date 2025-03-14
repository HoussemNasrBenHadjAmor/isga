import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'linkTalent',
  title: 'LintTalent',
  type: 'document',
  fields: [
    defineField({
      name: 'landing',
      title: 'LinkTalent Landing',
      type: 'reference',
      to: {type: 'landing'},
    }),

    defineField({
      name: 'details',
      title: 'LinkTalent details',
      description: 'A description of Lintalent',
      type: 'object',
      fields: [
        {name: 'en', type: 'reference', title: 'English', to: {type: 'jobBlock'}},
        {name: 'fr', type: 'reference', title: 'French', to: {type: 'jobBlock'}},
        {name: 'ar', type: 'reference', title: 'Arabic', to: {type: 'jobBlock'}},
      ],

      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'metadata',
      title: 'Page Metadata',
      type: 'reference',
      to: {
        type: 'metadata',
      },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'landing.title.0.en',
      subtitle: 'landing.subtitle.0.en',
      media: 'landing.image',
    },
    prepare({title, subtitle, media}) {
      return {
        title: title || 'LinkTalent',
        subtitle: subtitle || 'LinkTalent Details',
        media, // Display the landing image in the preview
      }
    },
  },
})
