exports.register = function (plugin, options, next) {

    plugin.route({
        method: 'GET',
        path: '/galaxy',
        handler: function (request, reply) {

            reply.view('galaxy/index');
        }
    });


    next();
};


exports.register.attributes = {
    name: 'web/galaxy'
};
