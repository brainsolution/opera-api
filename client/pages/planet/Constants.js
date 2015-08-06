var FluxConstant = require('flux-constant');
var PayloadSources = require('../../constants/PayloadSources');


module.exports = {
    PayloadSources: PayloadSources,
    ActionTypes: FluxConstant.set([
        'LOGIN',
        'LOGIN_RESPONSE',
        'LOGOUT',
        'LOGOUT_RESPONSE'
    ])
};
