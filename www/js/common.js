/* ===================================================
 * nv/Slider-www Home Page
 * http://github.com/strackovski/nvslider-www
 *
 * This file configures the options for requireJS.
 *
 * The build will inline common dependencies
 * into this file.
 * =================================================== */
requirejs.config({
    baseUrl: './js',
    paths: {
        'jquery':       'vendor/jquery',
        'bootstrap':    'vendor/bootstrap',
        'nvslider':     'vendor/jquery.nvslider',
        'main':         'slider-www'
    },
    shim: {
        'bootstrap':    ['jquery'],
        'nvslider':     ['jquery'],
        'main':         ['nvslider']
    }
});
