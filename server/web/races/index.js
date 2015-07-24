exports.register = function (plugin, options, next) {

    plugin.route({
        method: 'GET',
        path: '/races',
        handler: function (request, reply) {

            reply.view('races/index');
        }
    });


    next();
};


exports.register.attributes = {
    name: 'web/races'
};
