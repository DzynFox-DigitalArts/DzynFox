export default {
    name: 'expertise',
    title: 'Expertise',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'bgimage',
        title: 'Background Image',
        type: 'image',
      },
      {
        name: 'images',
        title: 'Portfolio Images',
        type: 'array',
        of: [{type: 'image'}]
      },
    ],
}  