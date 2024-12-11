import {defineField, defineType} from 'sanity'
import {UserIcon} from '@sanity/icons'

export default defineType({
  name: 'candidate',
  title: 'Candidate',
  type: 'document',
  fields: [
    defineField({
      name: 'fullname',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'job',
      title: 'Job Category',
      type: 'reference',
      to: {type: 'jobCategory'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'resume',
      title: 'Resume',
      type: 'file',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'fullname',
      subtitle: 'email',
    },
    prepare: ({title, subtitle}) => ({
      title,
      subtitle,
      media: UserIcon,
    }),
  },
})
