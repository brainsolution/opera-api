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
                            <a className="btn btn-primary btn-lg" href="/signup">
                                Enter the Fray
                            </a>
                            &nbsp; or &nbsp;
                            <a className="btn btn-warning btn-lg" href="/login/forgot">
                                Host a Game
                            </a>
                        </div>
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
                                    from absorbing the entire world of the Strumps?
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
                                    At vero eos et accusamus et iusto odio
                                    dignissimos ducimus qui blanditiis
                                    praesentium voluptatum deleniti atque
                                    corrupti.
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
                                    corrupti.
                                </p>
                                <a href="/system" className="btn btn-default btn-block">
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <h3>Planetary Map</h3>
                                <p>
                                    At vero eos et accusamus et iusto odio
                                    dignissimos ducimus qui blanditiis
                                    praesentium voluptatum deleniti atque
                                    corrupti.
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
                                <h3>Races</h3>
                                <p>
                                    At vero eos et accusamus et iusto odio
                                    dignissimos ducimus qui blanditiis
                                    praesentium voluptatum deleniti atque
                                    corrupti.
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
