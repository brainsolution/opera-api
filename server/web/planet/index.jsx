var React = require('react/addons');
var Layout = require('../layouts/Default.jsx');


var Component = React.createClass({
    render: function () {

        var feet = <script src="/public/pages/login.min.js"></script>;

        return (
            <Layout
                title="Planet Map"
                feet={feet}
                activeTab="planet">

                <div className="row">
                    <div className="col-sm-6" id="app-mount"></div>
                    <div className="col-sm-6 text-center">
                        <h1 className="page-header">Tune In Tomorrow</h1>
                        <p className="lead">
                            The passions of poet heros arise!
                            <img src="public/media/robo_guy.svg" className="img-responsive center-block" width="30%"/>
                        </p>
                    </div>
                </div>
            </Layout>
        );
    }
});


module.exports = Component;

