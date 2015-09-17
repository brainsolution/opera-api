var React = require('react/addons');
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

	handleMouseDown() {
		alert('home:');
	},

    componentDidMount: function() {
    },

    render: function () {

        var rows = [];
        for (var j = 0; j < 10; j++) {
            for (var i = 0; i < 10; i++) {
                if( j%2 === 0) {
                    // even
                    rows.push(<Hex key={j+'-'+i} x={96*i} y={28*j} r={32}/>);
                } else {
                    // odd
                    rows.push(<Hex key={j+'-'+i} x={(96*i)+48} y={28*j} r={32}/>);
                }
            }
        }

        return (
            <section>
                <div>
                    <h1 className="page-header">Planet Map</h1>
                    <div className={"container"}>
                        {rows}
                    </div>
                </div>
            </section>
        );
    }
});

module.exports = Component;
