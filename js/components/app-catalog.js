/** @jsx React.DOM */
var React = require('react');
var AppStore = require('../stores/app-store.js');
var AddToCart = require('../components/app-addtocart.js');

function getCatalog(){
	return { items: AppStore.getCatalog() }
}

var Catalog = React.createClass({
	getInitialState: function(){
		return getCatalog();
	},
	componentWillMount:function(){
		AppStore.addChangeListener(this._onChange)
	},
	_onChange:function(){
		this.setState(getCatalog());
	},
	render: function(){
		var items = this.state.items.map(function(item){
			return React.DOM.tr(
				null,
				React.DOM.td(null, item.title),
				React.DOM.td(null, "$", item.cost),
				React.DOM.td(null, AddToCart({item: item}))
			)
		});
		return (
			React.DOM.table(
				{ className: "table table-hover" },
				React.DOM.tbody(
					null,
					items
				)
			)
		);
	}
});

module.exports = Catalog;