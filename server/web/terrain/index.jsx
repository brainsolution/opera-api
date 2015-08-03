var React = require('react/addons');
var Layout = require('../layouts/Default.jsx');


var Component = React.createClass({
    render: function () {

        return (
            <Layout
                title="Terrain Map"
                activeTab="terrain">

                <div className="row">
                    <img src="public/media/terrain.png" className="img-responsive" width="100%"/>
                </div>
            </Layout>
        );
    }
});


module.exports = Component;
