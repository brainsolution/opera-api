exports.register = function (plugin, options, next) {

    plugin.route({
        method: 'GET',
        path: '/news',
        handler: function (request, reply) {

            reply.view('news/index');
        }
    });


    next();
};


exports.register.attributes = {
    name: 'web/news'
};
