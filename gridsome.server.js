const _ = require('lodash');

module.exports = function (api) {
  api.loadSource(({
    addCollection
  }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(({
    createPage
  }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })

  api.onCreateNode(options => {
    if( options.internal.typeName === 'CustomPage') {
      options.subtitle = options.subtitle || '';
      options.imgSrc = options.imgSrc || '';
      options.videoUrl = options.videoUrl|| '';
    }
    if( options.internal.typeName === 'ContentSections') {
      options.pageName = options.pageName || '';
      options.subtitle = options.subtitle || '';
    }
    if( options.internal.typeName === 'Campaign') {
      options.subtitle = options.subtitle || '';
    }
  })
}