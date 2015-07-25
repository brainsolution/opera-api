var React = require('react/addons');
var Layout = require('../layouts/Default.jsx');


var Component = React.createClass({
    render: function () {

        return (
            <Layout
                title="Galaxy Map"
                activeTab="galaxy">

                <div className="row">
                    <img src="public/media/galaxy.jpg" class="img-responsive"/>
                </div>
            </Layout>
        );
    }
});


module.exports = Component;
