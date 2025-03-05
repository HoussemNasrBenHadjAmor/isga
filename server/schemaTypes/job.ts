import {defineField, defineType} from 'sanity'
import {RocketIcon} from '@sanity/icons'

export default defineType({
  name: 'job',
  title: 'Job',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        {name: 'en', type: 'string', title: 'English'},
        {name: 'fr', type: 'string', title: 'French'},
        {name: 'ar', type: 'string', title: 'Arabic'},
      ],
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'job_domain',
      title: 'Job Domain',
      type: 'reference',
      to: {type: 'jobDomain'},
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'job_type',
      title: 'Job Type',
      type: 'reference',
      to: {type: 'jobType'},
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      description:
        'A description of our company highlighting both requested and essential responsibilities. Then some job Requirements like qualifications',
      type: 'object',
      fields: [
        {name: 'en', type: 'reference', title: 'English', to: {type: 'jobBlock'}},
        {name: 'fr', type: 'reference', title: 'French', to: {type: 'jobBlock'}},
        {name: 'ar', type: 'reference', title: 'Arabic', to: {type: 'jobBlock'}},
      ],

      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'display',
      title: 'Published',
      description: 'Show or Hide the job on the web site',
      type: 'boolean',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category.category',
    },
    prepare: ({title, subtitle}) => ({
      title,
      subtitle,
      media: RocketIcon,
    }),
  },
})
