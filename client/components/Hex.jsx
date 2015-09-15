var React = require('react/addons');
var ObjectAssign = require('object-assign');
var ClassNames = require('classnames');

var View = React.createClass({

	propTypes:{
		r: React.PropTypes.string.isRequired
	},

    getDefaultProps: function () {
        return {
            type: 'hex'
        };
    },

    getInitialState() {
        return {
			strokeW:2,
			fillCol: "#eeeeee",
			strokeCol: "#333333"
		};
    },

    handleMouseDown() {
        var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        this.setState({fillCol: randomColor});
    },

    render: function () {
		var r = parseInt(this.props.r);

		var cx = r;
		var cy = Math.sqrt(3)/2 *r;

		var x1 = r/2;
		var y1 = 0;

		var x2 = r + x1;
		var y2 = 0;

		var x3 = 2*r;
		var y3 = cy;

		var x4 = x2;
		var y4 = cy*2;

		var x5 = x1;
		var y5 = cy*2;

		var x6 = 0;
		var y6 = cy;

		var hexPath="M " + x1 +", " + y1 + " " +
					"L " + x2 +", " + y2 + " " +
					"L " + x3 +", " + y3 + " " +
					"L " + x4 +", " + y4 + " " +
					"L " + x5 +", " + y5 + " " +
					"L " + x6 +", " + y6 + " z";

       return (
                <div className={"hex"}
					 onClick={this.handleMouseDown}>
                    <svg>
                        <g >
							<path
								stroke={this.state.strokeCol}
								fill={this.state.fillCol}
								stroke-width={this.state.strokeW}
								d={hexPath}/>
							<ellipse fill={this.state.strokeCol}
									 cx={this.props.r}
									 cy={Math.sqrt(3)/2 * this.props.r}
									 rx="2.0" ry="2.0"/>
						</g>
                    </svg>
                </div>
        )
    }
});

module.exports = View;
