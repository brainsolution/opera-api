var React = require('react/addons');
var Layout = require('../layouts/Default.jsx');


var Component = React.createClass({
    render: function () {

        return (
            <Layout
                title="Map"
                activeTab="map">

                <div className="row">
                    <div className="col-sm-6">
                        <h1 className="page-header">Map</h1>
                    </div>
                    <div className="col-sm-6 text-center">
                        <h1 className="page-header">Space Opera</h1>
                        <p className="lead">
                            Don't escape reality, generate alternatives.
                        </p>
                        <i className="fa fa-volume-up bamf"></i>
                    </div>
                </div>
            </Layout>
        );
    }
});


module.exports = Component;
