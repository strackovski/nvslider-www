/* ===================================================
 * nv/Slider-www Home Page
 * http://github.com/strackovski/nvslider-www
 *
 * The build will inline common dependencies
 * into this file.
 * =================================================== */
requirejs.config({
  baseUrl: './js',
  paths: {
    'jquery':                   'vendor/jquery',
    'bootstrap':                'vendor/bootstrap',
    'nvslider':                 'vendor/jquery.nvslider',
    'main':                     'vendor/main'
  },
  shim: {
    'bootstrap':                ['jquery'],
    'nvslider':                 ['jquery'],
    'main':                     ['nvslider']
  }
});
