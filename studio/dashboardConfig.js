export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '631f7c0fda84ae519f0ebca2',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-h5b7mrfy',
                  apiId: 'f77134a1-49fd-40d8-9ef9-f09f919ed7d4'
                },
                {
                  buildHookId: '631f7c0f5103a0547607ced6',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-iekcsa93',
                  apiId: 'd845c721-1e68-43e3-9626-19de0859fe5d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mxthaiusdev/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-iekcsa93.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
