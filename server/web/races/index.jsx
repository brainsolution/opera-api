var React = require('react/addons');
var Layout = require('../layouts/Default.jsx');


var Component = React.createClass({
    render: function () {

        return (
            <Layout
                title="Races"
                activeTab="races">

                <div className="row">
                    <div className="col-sm-6">
                        <h1 className="page-header">Races</h1>
                        <div className="media">
                            <div className="pull-left">
                                <div className="media-object">
                                    <img src="public/media/alien1.svg" class="img-responsive"/>
                                </div>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">Bamphin</h4>
                                <p>
                                    Cras sit amet nibh libero, in gravida
                                    nulla. Nulla vel metus scelerisque ante
                                    sollicitudin commodo. Cras purus odio,
                                    vestibulum in vulputate at, tempus viverra
                                    turpis.
                                </p>
                            </div>
                        </div>
                        <div className="media text-right">
                            <div className="pull-right">
                                <div className="media-object">
                                    <img src="public/media/alien2.svg" class="img-responsive"/>
                                </div>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">Arililaloo</h4>
                                <p>
                                    Cras sit amet nibh libero, in gravida
                                    nulla. Nulla vel metus scelerisque ante
                                    sollicitudin commodo. Cras purus odio,
                                    vestibulum in vulputate at, tempus viverra
                                    turpis.
                                </p>
                            </div>
                        </div>
                        <div className="media">
                            <div className="pull-left">
                                <div className="media-object">
                                    <img src="public/media/alien3.svg" class="img-responsive"/>
                                </div>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">Wenemet</h4>
                                <p>
                                    Cras sit amet nibh libero, in gravida
                                    nulla. Nulla vel metus scelerisque ante
                                    sollicitudin commodo. Cras purus odio,
                                    vestibulum in vulputate at, tempus viverra
                                    turpis.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 text-center">
                        <h1 className="page-header">Characteristics</h1>
                        <p className="lead">
                            Hyper-expansionist
                        </p>
                        <img src="public/media/robots/robot3.png" class="img-responsive center-block"/>
                    </div>
                </div>
                <a className="btn btn-primary btn-lg pull-right" href="/races">
                    Create A Race
                </a>
            </Layout>
        );
    }
});


module.exports = Component;
