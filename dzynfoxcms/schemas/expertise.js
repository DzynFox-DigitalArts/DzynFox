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
      {
        name: 'pdfs',
        title: 'PDF Portfolio Content',
        type: 'array',
        of: [{
          type: 'reference',
          to: {type: 'pdffiles'}
        }]
      },
      {
        name: 'videourl',
        title: 'YouTube Video IDs',
        type: 'array',
        of: [{type: 'string'}]
      }
    ],
}  