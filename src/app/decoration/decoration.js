function Decoration() {
	this.list = [];
}

Decoration.prototype = {
	add: function(position, house, y) {
		if (!house) {
			this.list.push(new Tree(position.add(new Vector(0, y || (-150 + 300 * Math.random())))));
		} else {
			this.list.push(new House(position.add(new Vector(0, y || (100 + 100 * Math.random())))));
		}
	},
	addObj: function(obj) {
		this.list.push(obj);
	},
	next: function() {
		var particlesToRemove = [];
		this.list.forEach(function(tree) {
			if (tree.position.x + app.scene.camera.outPosition.x < -300) {
				particlesToRemove.push(tree);
			}
		}.bind(this));
		particlesToRemove.forEach(function(particle) {
			var index = this.list.indexOf(particle);
			if (index !== -1) {
				this.list.splice(index, 1);
			}
		}.bind(this));
	},
	render: function(back) {
		this.list.forEach(function(tree) {
			if (back && tree.back) {
				tree.render();
			} else if (!back && !tree.back) {
				tree.render();
			}
		});
	}
};
