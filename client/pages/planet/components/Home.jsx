var React = require('react/addons');
var ReactRouter = require('react-router');
var ControlGroup = require('../../../components/form/ControlGroup');
var TextControl = require('../../../components/form/TextControl');
var Button = require('../../../components/form/Button');
var Planet = require('../../../components/Planet');

var Spinner = require('../../../components/form/Spinner');
var Actions = require('../Actions');


var LinkedState = React.addons.LinkedStateMixin;
var Link = ReactRouter.Link;
var Navigation = ReactRouter.Navigation;


var Component = React.createClass({
    componentDidMount: function() {

    },

    render: function () {

        return (
            <section>
                <h1 className="page-header">Planet Map</h1>
                <Button
                    type="submit">
                    Oberon4
                </Button>
                <Planet/>
            </section>
        );
    }
});


module.exports = Component;
