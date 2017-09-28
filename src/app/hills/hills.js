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
	reset: function() {
		this.list.length = 0;
		this.points.length = 0;
	},
	next: function() {
		if (this.list[this.list.length - 1].to.x - this.toEnd < app.ball.position.x) {
			this.add();
		}

		this.color = sun.time.day ? '#E8EFEE' : 'rgb(21, 30, 30)';
	},
	add: function() {
		if (!(this.list[this.list.length - 1] instanceof Glade) &&Math.random() < .4) {
			this.list.push(new Glade(this.list[this.list.length - 1]));
		} else {
			this.list.push(new Hill(this.list[this.list.length - 1]));
		}
		if (Math.random() <= .8) {
			app.objects.add(this.points.length - parseInt(Math.random() * 20) - 1);
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
		var i,
			start = this.list[this.list.length - this.momentAmount],
			end = this.list[this.list.length - 1];

		ctx.save();
		bp();
		ctx.fillStyle = '#E8EFEE';
		m(start.from.x, start.from.y);
		for (i = this.list.length - this.momentAmount; i < this.list.length; i++) {
			this.list[i].render();
		}
		l(end.to.x, end.to.y + 2000);
		l(start.from.x, end.to.y + 2000);
		l(start.from.x, start.from.y);
		ctx.fill();
		cp();
		ctx.restore();

		ctx.save();
		ctx.globalAlpha = night;
		bp();
		ctx.fillStyle = 'rgb(21, 30, 30)';
		m(start.from.x, start.from.y);
		for (i = this.list.length - this.momentAmount; i < this.list.length; i++) {
			this.list[i].render();
		}
		l(end.to.x, end.to.y + 2000);
		l(start.from.x, end.to.y + 2000);
		l(start.from.x, start.from.y);
		ctx.fill();
		cp();
		ctx.restore();
	}
};
