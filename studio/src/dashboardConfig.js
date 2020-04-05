export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e89ddb42b46a41887afb380',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-3yo7x8si',
                  apiId: '44811ef8-fc9a-4cf6-a8ad-3e1d1dd1d666'
                },
                {
                  buildHookId: '5e89ddb400c1a014764ac3b4',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-rxnodv4e',
                  apiId: '3aa0c138-68c9-4905-b269-1aa7edebe79d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jyoost/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-rxnodv4e.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
