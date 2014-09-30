/** @jsx React.DOM */
var React = require('react'),
	Catalog = require("./app-catalog.js"),
	Cart = require("./app-cart.js");

var APP = React.createClass({displayName: 'APP',
		render: function(){
			return React.DOM.div(
				null,
				React.DOM.h2(null, "Let's Shop!"),
				Catalog(null),
				React.DOM.h2(null, "Cart"),
				Cart(null)
			);
		}
});

module.exports = APP;