import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'consultingServices',
  title: 'Consulting Services',
  type: 'document',
  fields: [
    defineField({
      name: 'landingServices',
      title: 'Services Landing',
      type: 'reference',
      to: [{type: 'landing'}],
    }),
    defineField({
      name: 'titleSectionPrimary',
      title: 'Title Section Primary',
      type: 'array',
      of: [{type: 'reference', to: {type: 'simple'}}],
    }),
    defineField({
      name: 'cardConsultingServicesPrimary',
      title: 'Consulting Services Card Primary',
      type: 'array',
      of: [{type: 'reference', to: {type: 'card'}}],
    }),
    defineField({
      name: 'titleSectionSecondary',
      title: 'Title Section Secondary',
      type: 'array',
      of: [{type: 'reference', to: {type: 'simple'}}],
    }),
    defineField({
      name: 'cardConsultingServicesSecondary',
      title: 'Consulting Services Card Secondary',
      type: 'array',
      of: [{type: 'reference', to: {type: 'card'}}],
    }),
  ],
})
