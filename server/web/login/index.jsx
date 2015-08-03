var React = require('react/addons');
var Layout = require('../layouts/Default.jsx');


var Component = React.createClass({
    render: function () {

        var feet = <script src="/public/pages/login.min.js"></script>;

        return (
            <Layout
                title="Sign in"
                feet={feet}
                activeTab="login">

                <div className="row">
                    <div className="col-sm-6" id="app-mount"></div>
                    <div className="col-sm-6 text-center">
                        <h1 className="page-header">Tune In Today</h1>
                        <p className="lead">
                            The passions of poet heros await!
                            <img src="public/media/robo_guy.svg" className="img-responsive" width="30%"/>
                        </p>
                    </div>
                </div>
            </Layout>
        );
    }
});


module.exports = Component;
