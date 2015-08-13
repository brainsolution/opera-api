var React = require('react/addons');
var ObjectAssign = require('object-assign');
var ClassNames = require('classnames');

var View = React.createClass({

    getDefaultProps: function () {
        return {
            type: 'splash'
        };
    },

    getInitialState() {
        return {open: false};
    },

    handleMouseDown() {
        this.setState({open: !this.state.open});
    },

    render: function () {
        return (
            <div>
                <div className={"splash"}>
                    <svg>
                    </svg>
                    <button onMouseDown={this.handleMouseDown}>Toggle</button>
                </div>
            </div>
        )
    }
});

module.exports = View;
