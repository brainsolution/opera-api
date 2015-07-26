var React = require('react/addons');
var Layout = require('../layouts/Default.jsx');


var Component = React.createClass({
    render: function () {

        return (
            <Layout
                title="About Us"
                activeTab="about">

                <div className="row">
                    <div className="col-sm-6">
                        <h1 className="page-header">About Turnstyles Inc.</h1>
                        <p className="lead">
                            Turnstyles is focused on creating games that follow particular game design principles.
                        </p>
                        <div className="media">
                            <div className="pull-left">
                                <div className="media-object">
                                    <i className="fa fa-camera-retro fa-4x"></i>
                                </div>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">Non Realtime</h4>
                                <p>
                                    No need to coordinate large blocks of time to play with your friends.
                                    Have kids? No problem. Have a life? Enjoy your life and play a game too
                                    in the little blocks of time which you can manage at your own convenience.
                                    Spend more or less time as you have it available.

                                    We try to design games that you can think about all day,
                                    but which you can play in about 15 minutes a day before or after work.
                                </p>
                            </div>
                        </div>
                        <div className="media text-right">
                            <div className="pull-right">
                                <div className="media-object">
                                    <i className="fa fa-camera-retro fa-4x"></i>
                                </div>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">Story Based</h4>
                                <p>
                                    No grinding mechanics like stacking boxes or killing rats to "level up".
                                    Simple mechanics that respect your time and focus on creating a story with others.
                                    Mysteries abound. Colaborate or Compete, but the result should be a tale worth telling.
                                </p>
                            </div>
                        </div>
                        <div className="media">
                            <div className="pull-left">
                                <div className="media-object">
                                    <i className="fa fa-camera-retro fa-4x"></i>
                                </div>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">Creative Output</h4>
                                <p>
                                    Publish the results of your stories in little chapbooks.
                                    In a world where everyone wants you to store your stuff
                                    on their hard drives so they can monetize you forever,
                                    We'd like you to have a physical art object at the end of the day.
                                    One that doesn't cost you a monthly fee to retain.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 text-left">
                        <h1 className="page-header">About Space Opera</h1>
                        <img src="public/media/ship.gif" class="img-responsive"/>

                        <div className="media-body">
                            <p className="lead text-left">
                                Don't escape reality,<br />generate alternatives... with "Space Opera"
                            </p>
                            <p>
                                A mixture of favorite elements from Stars! and Cruenti Dei, Space Opera is
                                a space exploration game with traditional, but simple, mechanics
                                and a focus on player diplomacy and story.
                            </p>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
});


module.exports = Component;
