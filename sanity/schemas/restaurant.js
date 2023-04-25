import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restauraunt',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'rating',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5).error('Rating must be between 1 and 5'),
    }),
    defineField({
      name: 'image',
      title: 'Image of the restaurant',
      type: 'image',
    }),
    defineField({
      name: 'address',
      title: 'Restaurant address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of: [{type: 'reference', to: {type: 'dish'}}],
    }),
    defineField({
      name: 'long',
      title: 'long',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lat',
      title: 'lat',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{type: 'category'}],
    }),
  ],
})
