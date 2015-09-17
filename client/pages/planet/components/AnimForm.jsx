var React = require('react/addons');
var ReactRouter = require('react-router');
var ControlGroup = require('../../../components/form/ControlGroup');
var TextControl = require('../../../components/form/TextControl');
var Button = require('../../../components/form/Button');
var Planet = require('../../../components/Planet');
var Alien = require('../../../components/Alien');
var Hex = require('../../../components/Hex');
var Spinner = require('../../../components/form/Spinner');
var Actions = require('../Actions');
var Gsap = require('gsap');
var LinkedState = React.addons.LinkedStateMixin;
var Link = ReactRouter.Link;
var Navigation = ReactRouter.Navigation;

var Component = React.createClass({

	handleMouseDown() {
		alert('home:');
	},

    componentDidMount: function() {
        var top = this.refs.top.getDOMNode();
        var right = this.refs.right.getDOMNode();
        var bottom = this.refs.bottom.getDOMNode();
        var left = this.refs.left.getDOMNode();

        var goRandom1 = Math.random()*400;
        var goRandom2 = Math.random()*400;
        var goRandom3 = Math.random()*400;
        var goRandom4 = Math.random()*400;

        var t = new TimelineMax({repeat:-1, yoyo:true});
            t.to(top, .5, {y:"+="+goRandom1})
            .to(right, .5, {x:"+="+goRandom2})
            .to(bottom, .5, {y:"+="+goRandom3})
            .to(left, .5, {x:"-="+goRandom4});

    },

    render: function () {

        return (
            <section>
                <div>
                    <h1 className="page-header">Form</h1>

                    <div className={"container"}>
                        <Alien ref="top"></Alien>
                        <Planet ref="right"></Planet>
                        <Planet ref="bottom"></Planet>
                        <TextControl ref="left"></TextControl>
                    </div>
                    <Button
                        type="submit"
                        className={"righty"}
                        onClick={this.handleMouseDown}>
                        Oberon Four
                    </Button>
                </div>
            </section>
        );
    }
});

module.exports = Component;
