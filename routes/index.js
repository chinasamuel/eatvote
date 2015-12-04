var controller = require('../app/controllers');

module.exports = function (app) {
    for(var key in controller)
    {
        //console.log(key);
        app.get('/'+key.toString(),controller[key]);        
        app.get('/'+key.toString()+'/*',controller[key]);
        
        app.post('/'+key.toString(),controller[key]);   
        app.post('/'+key.toString()+'/*',controller[key]);   
    }

    app.get('/*', controller.home);
};