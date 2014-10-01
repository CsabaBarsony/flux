/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/app-actions.js');

var CatalogItemAdd = React.createClass({
	displayName: 'CatalogItemAdd',
	handleClick:function(){
		AppActions.addCatalogItem();
	},
	render:function(){
		return React.DOM.button({ onClick: this.handleClick }, "Add catalog item")
	}
});

module.exports = CatalogItemAdd;
