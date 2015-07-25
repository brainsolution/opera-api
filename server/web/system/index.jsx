var React = require('react/addons');
var Layout = require('../layouts/Default.jsx');


var Component = React.createClass({
    render: function () {

        return (
            <Layout
                title="Solar System Map"
                activeTab="system">

                <div className="row">
                    <img src="public/media/system.jpg" class="img-responsive"/>
                </div>
            </Layout>
        );
    }
});


module.exports = Component;
