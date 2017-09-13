function Rocks() {
	this.list = [];
}

Rocks.prototype = {
	add: function(index) {
		if (Math.random() < .5) {
			this.list.push(new Rock(index));
		} else {
			this.list.push(new Fox(index));
		}
	},
	next: function() {

	},
	render: function() {
		this.list.forEach(function(rock) {
			rock.render();
		});
	}
};
