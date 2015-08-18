var React = require('react/addons');
var ObjectAssign = require('object-assign');
var ClassNames = require('classnames');

var View = React.createClass({

    getDefaultProps: function () {
        return {
            type: 'planet'
        };
    },

    getInitialState() {
        return {fillCol: "#336699"};
    },

    handleMouseDown() {
        var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        this.setState({fillCol: randomColor});
    },

    render: function () {
        return (
                <div className={"planet"}
                     onClick={this.handleMouseDown}>
                    <svg>
                        <g >
                            <path id="path7"
                                  fill={this.state.fillCol}
                                  d="M26.585,48.184
                                c13.952-3.17,29.943-12.789,42.405-19.722C59.396-0.383,7.174,19.041,26.585,48.184z M66.588,20.034
                                c-1.545,3.623,12.297-4.666,13.224,0.056c-14.26,14.524-38.899,28.154-66.369,32.535c-0.845-5.802,8.882-5.864,8.801-11.252
                                C14.572,47.301,2.482,50.83,2.622,60.998c8.138-0.53,16.475-2.473,23.823-4.875c27.132-8.868,55.225-24.819,66.208-41.528
                                C86.805,12.543,72.602,16.763,66.588,20.034z M34.586,55.2C48.432,64.107,71.254,51.6,70.27,37.173
                                C58.396,43.193,46.026,48.943,34.586,55.2z"/>
                        </g>
                    </svg>
                </div>
        )
    }
});

module.exports = View;
