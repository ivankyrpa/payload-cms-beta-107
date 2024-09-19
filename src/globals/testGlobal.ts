import { GlobalConfig } from 'payload';

export const TestGlobal: GlobalConfig = {
  slug: 'testGlobal',
  fields: [
    {
      name: 'group',
      localized: true,
      type: 'group',
      fields: [
        {
          name: 'innerArray',
          type: 'array',
          maxRows: 1,
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'field1',
                  type: 'text',
                },
                {
                  name: 'field2',
                  type: 'text',
                },
              ],
            },
          ],
        }
      ]
    }
  ],
}
