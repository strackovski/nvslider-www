/* ===================================================
 * nv/Slider-www project options
 * http://github.com/strackovski/nvgallery-www
 * =================================================== */
module.exports = {
  appDir: 'www',
  baseUrl: 'js/',
  mainConfigFile: 'www/js/common.js',
  dir: 'www-release',
  modules: [
    {
      name: 'common',
      // Common dependencies (only top level)
      include: [
        'app/models/baseModel',
        'jquery',
        'bootstrap',
        'nvslider'
      ]
    },
    {
      name: 'app/main-home',
      exclude: ['common']
    },

    {
      name: 'app/main-download',
      exclude: ['common']
    },

    {
      name: 'app/main-documentation',
      exclude: ['common']
    }
  ]
};