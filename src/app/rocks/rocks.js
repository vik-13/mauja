function Rocks() {
	this.list = [];
}

Rocks.prototype = {
	add: function(index) {
		this.list.push(new Rock(index));
	},
	next: function() {

	},
	render: function() {
		this.list.forEach(function(rock) {
			rock.render();
		});
	}
};
