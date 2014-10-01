/** @jsx React.DOM */
var React = require('react'),
	Catalog = require("./app-catalog.js"),
	Cart = require("./app-cart.js"),
	CatalogItemAdd = require("./catalog-item-add.js");

var APP = React.createClass({displayName: 'APP',
		render: function(){
			return React.DOM.div(
				null,
				CatalogItemAdd(null),
				React.DOM.h2(null, "Let's Shop!"),
				Catalog(null),
				React.DOM.h2(null, "Cart"),
				Cart(null)
			);
		}
});

module.exports = APP;