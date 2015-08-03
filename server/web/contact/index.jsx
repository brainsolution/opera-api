var React = require('react/addons');
var Layout = require('../layouts/Default.jsx');


var Component = React.createClass({
    render: function () {

        var feet = <script src="/public/pages/contact.min.js"></script>;

        return (
            <Layout
                title="Contact us"
                feet={feet}
                activeTab="contact">

                <div className="row">
                    <div className="col-sm-6" id="app-mount"></div>
                    <div className="col-sm-6 text-center">
                        <h1 className="page-header">Turnstyles Inc.</h1>
                        <p className="lead">
                            - A time to think and a time to act.
                        </p>
                        <img src="public/media/robots/Untitled 7.png" className="img-responsive" width="50%"/>
                        <div>
                            889 Warren Street &bull; Albany, NY 12208
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
});


module.exports = Component;
