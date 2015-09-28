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
var Slider = require('rc-slider');
var Gsap = require('gsap');
var LinkedState = React.addons.LinkedStateMixin;
var Link = ReactRouter.Link;
var Navigation = ReactRouter.Navigation;

var Component = React.createClass({

	propTypes:{
		r: React.PropTypes.number.isRequired
	},

	getDefaultProps: function () {
		return {
			r: 32
		};
	},

    componentDidMount: function() {
    },

    render: function () {

        var rows = [];
        for (var j = 0; j < 40; j++) {
            for (var i = 0; i < 80; i++) {
                if( j%2 === 0) {
                    // even
                    rows.push(<Hex key={j+'-'+i} x={3*this.props.r*i} y={7*this.props.r*j/8} r={this.props.r}/>);
                } else {
                    // odd
                    rows.push(<Hex key={j+'-'+i} x={(3*this.props.r*i)+3*this.props.r/2} y={7*this.props.r*j/8} r={this.props.r}/>);
                }
            }
        }

        return (
            <section>
				<input type="text" value="32" />;
				<svg xmlns="http://www.w3.org/2000/svg"
					 width="1600" height="1200"
					className={"map-container"}>
					{rows}
				</svg>
            </section>
        );
    }
});

module.exports = Component;
