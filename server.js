var Composer = require('./index');


Composer(function (err, server) {

    if (err) {
        throw err;
    }

    server.start(function () {

        console.log('Started Space Opera on port ' + server.info.port);
    });
});
