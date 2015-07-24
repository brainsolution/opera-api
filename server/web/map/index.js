exports.register = function (plugin, options, next) {

    plugin.route({
        method: 'GET',
        path: '/map',
        handler: function (request, reply) {

            reply.view('map/index');
        }
    });


    next();
};


exports.register.attributes = {
    name: 'web/map'
};
