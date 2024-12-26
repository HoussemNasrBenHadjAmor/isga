import {defineField, defineType} from 'sanity'
import {ProjectsIcon} from '@sanity/icons'

export default defineType({
  name: 'newsCategory',
  title: 'News Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      validation: (rule) => rule.required(),
      type: 'string',
    }),
    // defineField({
    //   name: 'topic',
    //   title: 'News Topic',
    //   type: 'string',
    //   validation: (Rule) => Rule.required(),
    //   options: {
    //     list: [
    //       {
    //         title: 'Insights',
    //         value: 'Insights',
    //       },
    //       {
    //         title: 'News',
    //         value: 'News',
    //       },
    //       {
    //         title: 'Success Stories',
    //         value: 'Success Stories',
    //       },
    //     ],
    //   },
    // }),
  ],
  preview: {
    select: {
      title: 'title',
      // subtitle: 'type',
    },
    prepare: ({title}) => ({
      title,
      // subtitle,
      media: ProjectsIcon,
    }),
  },
})
