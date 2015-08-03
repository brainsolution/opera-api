var React = require('react/addons');
var Layout = require('../layouts/Default.jsx');


var Component = React.createClass({
    render: function () {

        var neck = <link rel='stylesheet' href="/public/pages/home.min.css" />;

        return (
            <Layout
                title="Space Opera"
                neck={neck}
                activeTab="home">

                <div className="jumbotron">
                    <h1>Space Opera</h1>
                    <p className="lead">
                        A collaborative online storytelling game in the electrosonic flow.
                        <div>
                            <img src="public/media/scapemin2.png" className="img-responsive" width="100%"/>
                        </div>
                        <span>Splash animation with SVG and Greensock</span>
                    </p>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <h3>News</h3>
                                <p>
                                    This month in the nebulon galaxy, genocide is feared by many.
                                    Will the galactic council intervene to keep the Vampires of Obturon
                                    from absorbing the entire world of the Strumps? [Characters in SVG].
                                </p>
                                <a href="/news" className="btn btn-default btn-block">
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <h3>Galaxy Map</h3>
                                <p>
                                    Heavily garbled and hard to decipher messages stream from the outer rim
                                    Warnings of something? An invitation? What mysteries await beyond the pale.
                                    [Flat pointmap with infographic overlays in d3].
                                </p>
                                <a href="/galaxy" className="btn btn-default btn-block">
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <h3>Solar Map</h3>
                                <p>
                                    At vero eos et accusamus et iusto odio
                                    dignissimos ducimus qui blanditiis
                                    praesentium voluptatum deleniti atque
                                    corrupti. [Solar system in ThreeJs]
                                </p>
                                <a href="/system" className="btn btn-default btn-block">
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <h3>Planetary Map</h3>
                                <p>
                                    At vero eos et accusamus et iusto odio
                                    dignissimos ducimus qui blanditiis
                                    praesentium voluptatum deleniti atque
                                    corrupti. [Leaflet with a custom basemap]
                                </p>
                                <a href="/planet" className="btn btn-default btn-block">
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <h3>Terrain Map</h3>
                                <p>
                                    At vero eos et accusamus et iusto odio
                                    dignissimos ducimus qui blanditiis
                                    praesentium voluptatum deleniti atque
                                    corrupti. [Raphaelesque Hexmap]
                                </p>
                                <a href="/terrain" className="btn btn-default btn-block">
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <h3>Races</h3>
                                <p>
                                    At vero eos et accusamus et iusto odio
                                    dignissimos ducimus qui blanditiis
                                    praesentium voluptatum deleniti atque
                                    corrupti. [Alien and Robot Creation with SVG]
                                </p>
                                <a href="/races" className="btn btn-default btn-block">
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
});


module.exports = Component;
