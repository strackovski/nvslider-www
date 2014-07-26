/* ===================================================
 * nv/Slider-www Home Page
 * http://github.com/strackovski/nvslider-www
 *
 * Download page model
 * =================================================== */

/*jslint node: true */
'use strict';

define(['./baseModel'], function (BaseModel) {

    BaseModel.prototype.getVersionString = function () {
        return 'Version ' + this.version;
    };

    var model1 = new BaseModel('Download nv/Slider', 'version number');

    return model1;
});