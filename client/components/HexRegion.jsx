var React = require('react/addons');
var ObjectAssign = require('object-assign');
var ClassNames = require('classnames');

var View = React.createClass({

    propTypes:{
        r: React.PropTypes.number.isRequired,
        x: React.PropTypes.number.isRequired,
        y: React.PropTypes.number.isRequired
    },

    getDefaultProps: function () {
        return {
            type: 'hexRegion'
        };
    },

    getInitialState: function () {
        return {
            strokeW:1,
            fillCol: "#f3f3f3",
            strokeCol: "#333333"
        };
    },

    handleMouseDown: function () {
        var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        this.setState({fillCol: randomColor});
    },


    getHexPath: function (x, y, N, side) {

        var path = "", n, temp_x, temp_y, angle;

        for (n = 0; n <= N; n += 1) {
            // the angle (in radians) as an nth fraction of the whole circle
            angle = n / N * 2 * Math.PI;

            // The starting x value of the point adjusted by the angle
            temp_x = x + Math.cos(angle) * side;
            // The starting y value of the point adjusted by the angle
            temp_y = y + Math.sin(angle) * side;

            // Start with "M" if it's the first point, otherwise L
            path += (n === 0 ? "M" : "L") + temp_x + "," + temp_y;
        }
        return path;
    },

    render: function () {

        var hexPath2= getHexPath(this.props.x, this.props.y, 6, this.props.r);

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


        console.log("H1:" + hexPath);
        console.log("H2:" + hexPath2);

        return (
            <div className={'hexRegion'}
                 style = {
                        {
                            left: this.props.x,
                            top: this.props.y
                        }
                     }
                 onClick={this.handleMouseDown}>
                <svg >
                    <path
                        stroke={this.state.strokeCol}
                        fill={this.state.fillCol}
                        strokeWidth={this.state.strokeW}
                        d={hexPath2}/>
                    <ellipse fill={this.state.strokeCol}
                             cx={this.props.r}
                             cy={Math.sqrt(3)/2 * this.props.r}
                             rx="1.5" ry="1.5"/>
                </svg>
            </div>
        )
    }
});

module.exports = View;
