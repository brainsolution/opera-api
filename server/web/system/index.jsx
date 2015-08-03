var React = require('react/addons');
var Layout = require('../layouts/Default.jsx');


var Component = React.createClass({
    render: function () {

        return (
            <Layout
                title="Solar System Map"
                activeTab="system">

                <div className="row">
                    <img src="public/media/system.jpg" className="img-responsive" width="100%"/>
                </div>
            </Layout>
        );
    }
});


module.exports = Component;
