// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Danny Keig',
  siteDescription: 'software engineer',

  templates: {
    Post: '/:title',
    Tag: '/tag/:id'
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'projects/**/*md',
        typeName: 'Project',
        remark: {
          plugins: [
            [
              '@noxify/gridsome-plugin-remark-embed', {
                'enabledProviders' : [
                  'Vimeo',
                  'Youtube',
                ],
              }
            ]
          ]
        }
      },
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*md',
        typeName: 'Post',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          }
        },
        remark: {
          plugins: [
            [
              '@noxify/gridsome-plugin-remark-embed', {
                'enabledProviders' : [
                  'Vimeo',
                  'Youtube',
                ],
              }
            ]
          ]
        }
      }
    }
  ],
  chainWebpack: config => {
    config.resolve.alias.set('@images', '@/assets/images')
  },
}
