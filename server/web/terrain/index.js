exports.register = function (plugin, options, next) {

    plugin.route({
        method: 'GET',
        path: '/terrain',
        handler: function (request, reply) {

            reply.view('terrain/index');
        }
    });


    next();
};


exports.register.attributes = {
    name: 'web/terrain'
};
