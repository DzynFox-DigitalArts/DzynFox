export default {
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'company',
        title: 'Company Name',
        type: 'string',
      },
      {
        name: 'review',
        title: 'Review',
        type: 'text',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image'
      },
    ],
}  