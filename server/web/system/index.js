exports.register = function (plugin, options, next) {

    plugin.route({
        method: 'GET',
        path: '/system',
        handler: function (request, reply) {

            reply.view('system/index');
        }
    });


    next();
};


exports.register.attributes = {
    name: 'web/system'
};
