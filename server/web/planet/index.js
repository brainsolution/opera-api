exports.register = function (plugin, options, next) {

    plugin.route({
        method: 'GET',
        path: '/planet/{glob*}',
        config: {
            auth: {
                mode: 'try',
                strategy: 'session'
            },
            plugins: {
                'hapi-auth-cookie': {
                    redirectTo: false
                }
            }
        },
        handler: function (request, reply) {

            if (request.params.glob !== 'logout' &&
                request.auth.isAuthenticated) {

                if (request.auth.credentials.user.roles.admin) {
                    return reply.redirect('/admin');
                }

                return reply.redirect('/account');
            }

            var response = reply.view('planet/index');
            response.header('x-auth-required', true);
        }
    });


    next();
};


exports.register.attributes = {
    name: 'web/planet'
};
