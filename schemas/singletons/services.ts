import { CalendarIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'services',
  title: 'Services',
  type: 'document',
  icon: CalendarIcon,
  fields: [
    defineField({
      name: 'slideshow',
      type: 'array',
      title: 'Slideshow',
      of: [
        {
          type: "object",
          title: "My Object",
          fields: [
            {
              name: "myDate",
              type: "date",
              title: "My Date",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "serviceDescription",
              type: "text",
              title: "Description",
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'myDate',
            },
            prepare({ title }) {
              return {
                title,
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Main',
      }
    },
  },
})
