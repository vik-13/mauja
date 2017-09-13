function Objects() {
	this.list = [];
}

Objects.prototype = {
	reset: function() {
		this.list.length = 0;
	},
	add: function(index) {
		var r = Math.random();
		if (r < .25) {
			this.list.push(new Rock(index));
		} else if (r < .5) {
			this.list.push(new Fox(index));
		} else if (r < .75) {
			this.list.push(new Bear(index));
		} else {
			this.list.push(new Girl(index));
		}
	},
	next: function() {

	},
	render: function() {
		this.list.forEach(function(item) {
			item.render();
		});
	}
};
