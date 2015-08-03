var React = require('react/addons');
var Layout = require('../layouts/Default.jsx');


var Component = React.createClass({
    render: function () {

        return (
            <Layout
                title="Galaxy Map"
                activeTab="galaxy">

                <div className="row">
                    <img src="public/media/galaxy2.jpg" className="img-responsive" width="100%"/>
                </div>
            </Layout>
        );
    }
});


module.exports = Component;
