// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: '14 Trees Foundation',
  siteDescription: "Sustainable carbon neutral ecosystems through reforestation (A non profit section-8 company)",
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: process.env.CONTENTFUL_SPACE_ID, // required
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,// required
        host: 'cdn.contentful.com',
        environment: process.env.CONTENTFUL_SOURCE_ENV,
        typeName: 'Contentful'
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {
          whitelist: ['svg-inline--fa', 'table', 'table-striped', 'table-bordered', 'table-hover', 'table-sm'],
          whitelistPatterns: [/fa-$/, /blockquote$/, /code$/, /pre$/, /table$/, /table-$/, /vueperslide$/, /vueperslide-$/]
        },
        presetEnvConfig: {},
        shouldPurge: false,
        shouldImport: true,
        shouldTimeTravel: true,
        shouldPurgeUnusedKeyframes: true,
      }
    },
    {
      use: 'gridsome-source-static-meta',
      options: {
        path: 'content/site/*.json'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'ContentSections',
        path: './content/sections/**/*.md',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Campaign',
        path: './content/_campaigns/*.md'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'CustomPage',
        path: './content/pages/*.md'
      }
    },
  ],
  transformers: {
    remark: {
      plugins: [
        'remark-autolink-headings',
        'remark-attr',
        ['gridsome-plugin-remark-prismjs-all', {
          noInlineHighlight: false,
          showLineNumbers: false,
        }],
        require('./packages/gridsome-plugin-remark-figure')
      ],
      
      processImages: false
      
    }
  },
  templates: {
    Campaign: [{
      path: '/static-campaigns/:title',
      component: '~/templates/Campaign.vue'
    }],
    ContentfulCampaign: [{
      path: '/campaigns/:title',
      component: '~/templates/ContentfulCampaign'
    }],
    CustomPage: [{
      path: '/:title',
      component: '~/templates/CustomPage.vue'
    }],
  },
  chainWebpack: config => {
      config.resolve.alias.set('@pageImage', '@/assets/images');
  }
}