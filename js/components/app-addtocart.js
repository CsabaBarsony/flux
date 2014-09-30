var React = require('react');
var AppActions = require('../actions/app-actions.js');

var AddToCart = React.createClass({
	handleClick:function(){
		AppActions.addItem(this.props.item);
	},
	render:function(){
		return React.DOM.button(
			{ onClick: this.handleClick },
			"Add to cart"
		);
	}
});

module.exports = AddToCart;