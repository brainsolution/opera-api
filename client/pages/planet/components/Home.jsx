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

        var top2 = this.refs.top2.getDOMNode();
        var right2 = this.refs.right2.getDOMNode();
        var bottom2 = this.refs.bottom2.getDOMNode();
        var left2 = this.refs.left2.getDOMNode();

        var goRandom1 = Math.random()*400;
        var goRandom2 = Math.random()*400;
        var goRandom3 = Math.random()*400;
        var goRandom4 = Math.random()*400;
		var goRandom21 = Math.random()*400;
		var goRandom22 = Math.random()*400;
		var goRandom23 = Math.random()*400;
		var goRandom24 = Math.random()*400;

        var t = new TimelineMax({repeat:-1, yoyo:true});
            t.to(top, .5, {y:"-="+goRandom1})
            .to(right, .5, {x:"+="+goRandom2})
            .to(bottom, .5, {y:"+="+goRandom3})
            .to(left, .5, {x:"-="+goRandom4});

        var t2 = new TimelineMax({repeat:-1, yoyo:true});
            t2.to(top2, .5, {y:"-="+goRandom24})
            .to(right2, .5, {x:"+="+goRandom23})
            .to(bottom2, .5, {y:"+="+goRandom22})
            .to(left2, .5, {x:"-="+goRandom21});

    },

    render: function () {
        return (
            <section>
                <h1 className="page-header">Planet Map</h1>

                <div className={"container"}>
					<Hex ref="top2"></Hex>
                    <Alien ref="top"></Alien>
                    <Planet ref="right"></Planet>
                    <Planet ref="bottom"></Planet>
                    <Planet ref="left"></Planet>
                    <Planet ref="right2"></Planet>
                    <Planet ref="bottom2"></Planet>
                    <Hex ref="left2"></Hex>
                </div>
				<Button
					type="submit"
                    className={"righty"}
					onClick={this.handleMouseDown}>
					Oberon Four
				</Button>
            </section>
        );
    }
});

module.exports = Component;
