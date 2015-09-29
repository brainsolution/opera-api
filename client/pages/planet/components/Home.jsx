var React = require('react/addons');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
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

    mixins:[PureRenderMixin],

	getInitialState: function () {
		return {
			r: 32,
            secondsElapsed:0
		};
	},

    tick: function(){
          this.setState({
              secondsElapsed: this.state.secondsElapsed + 1,
          });
        var map = this.refs.mapDiv.getDOMNode();
        TweenMax.to(map, 2, {scale: Math.random()*20, transformOrigin: "left top", ease: Power1.easeInOut});
    },

    componentDidMount: function(){
      this.interval = setInterval(this.tick, 3000);
    },

    componentWillUnmount: function(){
      clearInterval(this.interval);
    },

    handleChange: function(event) {
        this.setState(
            {
                r: event.target.value
            }
        );
    },

    render: function () {
        var r = this.state.r;

        var rows = [];
        for (var x = 0; x < 40; x++) {
            for (var y = 0; y < 40; y++) {
                if( x%2 === 0) {
                    // even
                    rows.push(<Hex key={x+'-'+y} x={3*r*y} y={7*r*x/8} r={r}/>);
                } else {
                    // odd
                    rows.push(<Hex key={x+'-'+y} x={(3*r*y)+3*r/2} y={7*r*x/8} r={r}/>);
                }
            }
        }

        return (
            <section>
                <input onChange={this.handleChange} value={this.state.text} />
                <span> {this.state.secondsElapsed} </span>
                <div id="mapView" ref="mapDiv">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="1600" height="1200"
                        className={"map-container"}>
                        {rows}
                    </svg>
                </div>
            </section>
        );
    }
});

module.exports = Component;
