var React = require('react/addons');
var ObjectAssign = require('object-assign');
var ClassNames = require('classnames');
var ReactLeaflet = require('react-leaflet');


var View = React.createClass({

    getDefaultProps: function () {
        return {
            type: 'ReactLeafletMap'
        };
    },

    getInitialState() {
        return {open: false};
    },

    handleMouseDown() {
        this.setState({open: !this.state.open});
    },


    render(){
        return <div></div>;
    },
    
    componentDidMount: function () {
        var view = new LeafletView(this.props.location, 13);
        return (
            <LeafletMap
                view={this.state.view}
                onViewChange={this._onViewChange}>
                <LeafletTileLayer
                    urlTemplate='http://{s}.tile.osm.org/{z}/{x}/{y}.png' />
                <LeafletMarker
                    center={this.state.location} />
            </LeafletMap>
        );
    }
});

module.exports = View;
