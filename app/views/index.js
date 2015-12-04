var swig = require('swig')  // http://paularmstrong.github.io/swig/docs/        
        ;

module.exports = function (app) {

    // To disable Swig's cache, do the following:
    swig.setDefaults({cache: false});

    app.engine('html', swig.renderFile);
    app.set('view engine', 'html');
};

