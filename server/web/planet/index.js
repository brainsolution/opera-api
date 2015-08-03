exports.register = function (plugin, options, next) {

    plugin.route({
        method: 'GET',
        path: '/planet',
        handler: function (request, reply) {

            reply.view('planet/index');
        }
    });

    next();
};


exports.register.attributes = {
    name: 'web/planet'
};
