var React = require('react/addons');
var Layout = require('../layouts/Default.jsx');


var Component = React.createClass({
    render: function () {

        return (
            <Layout
                title="Planet Map"
                activeTab="planet">

                <div className="row">
                    <img src="public/media/planet.png" class="img-responsive" />
                </div>
            </Layout>
        );
    }
});


module.exports = Component;
