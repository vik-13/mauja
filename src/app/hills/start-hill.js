function StartHill() {
	this.from = new Vector(-300, 200);
	this.to = new Vector(2000, 700);

	this.c1 = new Vector(1000, 200);
	this.c2 = new Vector(1000, 700);

	this.bound();

	this.addDecoration();
}

StartHill.prototype = {
	addDecoration: function() {
		var i = 20;
		while (i > 0) {
			if (Math.random() < .2) {
				app.decoration.add(app.hills.points[app.hills.points.length - i].position.get());
			}
			i--;
		}
	},
	bound: function() {
		var accuracy = 20;
		var i, points = app.hills.points, point;

		points.push({
			position: this.from.get(),
			normal: new Vector()
		});
		for (i = 1; i <= accuracy; i++) {
			point = {};
			point.position = distance(this, (1 / accuracy) * i);
			point.normal = point.position.normal(points[points.length - 1].position);
			points.push(point);
		}
	},
	render: function() {
		ctx.save();
		bp();
		m(this.from.x - 1, this.from.y);
		ctx.bezierCurveTo(this.c1.x, this.c1.y, this.c2.x, this.c2.y, this.to.x, this.to.y);
		l(this.to.x, this.to.y + 2000);
		l(this.from.x - 1, this.from.y + 2000);
		l(this.from.x - 1, this.from.y);
		ctx.fillStyle = '#E8EFEE';
		ctx.fill();
		ctx.restore();
	},
	renderNight: function() {
		ctx.save();
		ctx.globalAlpha = night;
		bp();
		m(this.from.x - 1, this.from.y);
		ctx.bezierCurveTo(this.c1.x, this.c1.y, this.c2.x, this.c2.y, this.to.x, this.to.y);
		l(this.to.x, this.to.y + 2000);
		l(this.from.x - 1, this.from.y + 2000);
		l(this.from.x - 1, this.from.y);
		ctx.fillStyle = 'rgb(21, 30, 30)';
		ctx.fill();
		ctx.restore();
	}
};
