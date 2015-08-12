var React = require('react/addons');
var ReactRouter = require('react-router');
var ControlGroup = require('../../../components/form/ControlGroup');
var TextControl = require('../../../components/form/TextControl');
var Button = require('../../../components/form/Button');
var Planet = require('../../../components/Planet');
//var Spring = require('../../../../node_modules/react-motion/lib/Spring.js');

//var gsap = require('gsap-react-plugin');
//var TweenLite = require('./vendor/greensock/TweenLite');
//var TimelineLite = require('./vendor/greensock/TimelineLite');

var Spinner = require('../../../components/form/Spinner');
var Actions = require('../Actions');


var LinkedState = React.addons.LinkedStateMixin;
var Link = ReactRouter.Link;
var Navigation = ReactRouter.Navigation;


var Component = React.createClass({
    componentDidMount: function() {
        var top = this.refs.top.getDOMNode();
        var right = this.refs.right.getDOMNode();
        var bottom = this.refs.bottom.getDOMNode();
        var left = this.refs.left.getDOMNode();

        //var t = new TimelineMax({repeat:-1, yoyo:true});
        //    t.to(top, .5, {y:"-=100"})
        //    .to(right, .5, {x:"+=100"})
        //    .to(bottom, .5, {y:"+=100"})
        //    .to(left, .5, {x:"-=100"});
    },

    render: function () {

        return (
            <section>
                <h1 className="page-header">Planet Map</h1>
                <Button
                    type="submit">
                    Oberon Four
                </Button>
                <div className={"container"}>
                    <Planet ref="top"></Planet>
                    <Planet ref="right"></Planet>
                    <Planet ref="bottom"></Planet>
                    <Planet ref="left"></Planet>
                </div>
            </section>
        );
    }
});


module.exports = Component;
