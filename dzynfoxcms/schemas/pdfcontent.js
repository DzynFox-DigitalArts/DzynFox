export default {
    name: 'pdffiles',
    title: 'PDF Files',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Preview Image',
        type: 'image',
      },
      {
        name: 'pdf',
        title: 'PDF File',
        type: 'file'
      }
    ],
  }
  