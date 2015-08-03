var React = require('react/addons');
var Layout = require('../layouts/Default.jsx');


var Component = React.createClass({
    render: function () {

        return (
            <Layout
                id="planetMap"
                ref="targetContainer"
                title="Planet Map"
                activeTab="planet">
            </Layout>
        );
    },

    getDefaultProps: function() {
        return {
            data: [
                "Earth",
                "Mars",
                "Jupiter",
                "Pluto",
                "Venus",
                "Saturn"
            ]
        };
    },

    handleSelect: function(planet){
        alert(planet + 'selcted');
    },

    componentDidMount: function(){
        autocomplete({
            target: this.refs.targetContainer.getDOMNode(),
            data: this.props.data,
            events: {
                select: this.handleSelect
            }
        });
    }
});


module.exports = Component;
