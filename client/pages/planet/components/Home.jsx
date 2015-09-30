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
var Gsap = require('gsap');
var LinkedState = React.addons.LinkedStateMixin;
var Link = ReactRouter.Link;
var Navigation = ReactRouter.Navigation;

var Component = React.createClass({

    mixins:[PureRenderMixin],

	getInitialState: function () {
		return {
			r: 12,
            secondsElapsed:0,
            s: 1
		};
	},

    tick: function(){
          this.setState({
              secondsElapsed: this.state.secondsElapsed + 1,
          });
    },

    componentDidMount: function(){
      this.interval = setInterval(this.tick, 5000);
    },

    componentWillUnmount: function(){
      clearInterval(this.interval);
    },

    changeRadius: function() {
        if(this.state.r == 32){
            this.setState(
                {
                    r: Math.random()*80
                }
            );
        } else {
            this.setState(
                {
                    r: 32
                }
            );
        }
    },

    zoomIn: function() {
        var newZoom = 1;
        switch (this.state.s) {
            case(.3):{
                newZoom = 1;
                break;
            }
            case(1):{
                newZoom = 5;
                break;
            }
            case(5):{
                newZoom = 15;
                break;
            }
            case(15):{
                newZoom = 15;
                break;
            }
        }

        this.setState(
            {
                s: newZoom
            }
        );
        this.gotoScale();
    },

    zoomOut: function() {
        var newZoom = 1;
        switch (this.state.s) {
            case(15):{
                newZoom = 5;
                break;
            }
            case(5):{
                newZoom = 1;
                break;
            }
            case(1):{
                newZoom = .3;
                break;
            }
            case(.3):{
                newZoom = .3;
                break;
            }
        }

        this.setState(
            {
                s: newZoom
            }
        );
        this.gotoScale();
    },

    gotoScale: function() {
        var map = this.refs.mapDiv.getDOMNode();
        TweenMax.to(map, 1, {scale: this.state.s, transformOrigin: "left top", ease: Power1.easeInOut});
    },

    render: function () {
        var r = this.state.r;

        var rows = [];
        for (var x = 0; x < 160; x++) {
            for (var y = 0; y < 80; y++) {
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
                <div className="mapZoomControls">
                    <Button onClick={this.zoomOut}>-</Button>
                    <Button onClick={this.zoomIn}>+</Button>
                </div>
                <div className="mapControls panel panel-primary panel-fixed">
                    <Button> fill paintbrush </Button>
                    <Button> border paintbrush </Button>
                </div>
                <div id="mapView" ref="mapDiv">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="100%" height="100%"
                        className={"map-container"}>
                        {rows}
                    </svg>
                </div>
            </section>
        );
    }
});

module.exports = Component;
