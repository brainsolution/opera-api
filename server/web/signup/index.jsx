var React = require('react/addons');
var Layout = require('../layouts/Default.jsx');


var Component = React.createClass({
    render: function () {

        var feet = <script src="/public/pages/signup.min.js"></script>;

        return (
            <Layout
                title="Sign up"
                feet={feet}
                activeTab="signup">

                <div className="row">
                    <div className="col-sm-6" id="app-mount"></div>
                    <div className="col-sm-6 text-center">
                        <h1 className="page-header">Don't Escape Reality</h1>
                        <p className="lead">
                            Generate Alternatives! With Space Opera!
                            <img src="public/media/robots/Untitled 6.png" className="img-responsive center-block" width="50%"/>
                        </p>
                    </div>
                </div>
            </Layout>
        );
    }
});


module.exports = Component;
