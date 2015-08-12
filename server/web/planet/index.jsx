var React = require('react/addons');
var Layout = require('../layouts/Default.jsx');


var Component = React.createClass({
    render: function () {

        //var tweenMax = <script src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.14.2/TweenMax.min.js"></script>
        //var timeLineMax = <script src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.14.2/TimelineMax.min.js"></script>
        var feet = <script src="/public/pages/planet.min.js"></script>;

        return (
            <Layout
                title="Planet Map"
                tweenMax={tweenMax}
                timeLineMax={timeLineMax}
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

