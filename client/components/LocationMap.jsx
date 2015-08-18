var React = require('react/addons');
var ObjectAssign = require('object-assign');
var ClassNames = require('classnames');
var Leaflet = require('LeafletMap');

var View = React.createClass({

    getDefaultProps: function () {
        return {
            type: 'LocationMap'
        };
    },

    render(){  
        return <div></div>;
    },
    
    componentDidMount: function () {
        this._map = new Leaflet.map(this.getDOMNode(), {
            view: this.props.view
        });
    },
});

module.exports = View;
