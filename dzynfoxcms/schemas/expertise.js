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
        name: 'images',
        title: 'Portfolio Images',
        type: 'array',
        of: [{type: 'image'}]
      },
    ],
}  