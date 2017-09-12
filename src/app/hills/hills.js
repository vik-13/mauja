function Hills() {
	this.momentAmount = 6;
	this.toEnd = 3000;
	this.list = [];
	this.points = [];

	this.start = {
		to: new Vector(-500, 200),
		c2: new Vector(-400, 200)
	};
	this.color = '#E8EFEE';
}

Hills.prototype = {
	next: function() {
		if (this.list[this.list.length - 1].to.x - this.toEnd < app.ball.position.x) {
			this.add();
		}

		this.color = app.scene.sun.day ? '#E8EFEE' : 'rgb(21, 30, 30)';
	},
	add: function() {
		if (!(this.list[this.list.length - 1] instanceof Glade) &&Math.random() < .4) {
			this.list.push(new Glade(this.list[this.list.length - 1]));
		} else {
			this.list.push(new Hill(this.list[this.list.length - 1]));
		}
		if (Math.random() <= .2) {
			app.rocks.add(this.points.length - parseInt(Math.random() * 20) - 1);
		}
	},
	generate: function() {
		var i;
		this.list.push(new StartHill());
		this.list.push(new Hill(this.list[this.list.length - 1]));
		for (i = 0; i < this.momentAmount - 2; i++) {
			this.add();
		}
	},
	render: function() {
		var i;
		ctx.save();
		for (i = this.list.length - this.momentAmount; i < this.list.length; i++) {
			this.list[i].render();
		}
		for (i = this.list.length - this.momentAmount; i < this.list.length; i++) {
			this.list[i].renderNight();
		}
		ctx.restore();
	}
};
