var React = require('react/addons');
var Layout = require('../layouts/Default.jsx');


var Component = React.createClass({
    render: function () {

        var feet = <script src="/public/pages/planet.min.js"></script>;

        return (
            <Layout
                title="Planet Map"
                feet={feet}
                activeTab="planet">

                <div className="row">
                    <div className="col-sm-12" id="app-mount"></div>
                </div>
            </Layout>
        );
    }
});


module.exports = Component;

