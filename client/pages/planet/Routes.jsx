var React = require('react/addons');
var ReactRouter = require('react-router');
var App = require('./components/App');
var Home = require('./components/Home');


var Route = ReactRouter.Route;
var DefaultRoute = ReactRouter.DefaultRoute;
var NotFoundRoute = ReactRouter.NotFoundRoute;


var Routes = (
    <Route path="/planet" name="app" handler={App}>
        <DefaultRoute name="home" handler={Home} />
    </Route>
);


module.exports = Routes;
