export default {
    name: 'partners',
    title: 'Partners',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'state',
        title: 'State',
        type: 'string',
      },
      {
        name: 'city',
        title: 'City / District',
        type: 'string',
      },
      {
        name: 'contact',
        title: 'Contact',
        type: 'blockContent',
      }
    ],
}  