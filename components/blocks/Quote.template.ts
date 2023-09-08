import type { TinaTemplate } from 'tinacms'

export const quoteTemplate: TinaTemplate = {
  label: 'Quote',
  name: 'quote',
  ui: {
    // previewSrc: '/img/blocks/columns.png',
  },
  fields: [
    {
      label: 'Title',
      name: 'title2',
      ui: { component: "textarea" },
      type: 'string',
    },
    {
      label: 'Sub Text',
      name: 'subtext',
      ui: { component: "textarea" },
      type: 'string',
    },
    {
      label: 'logo',
      name: 'logo',
      type: 'image',
    }
  ],
}
