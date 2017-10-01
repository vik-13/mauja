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
		decorations.addHouse(map.getBound(3).position.get().add(new Vector(0, 130)));
		decorations.addHouse(map.getBound(6).position.get().add(new Vector(0, 100)));
		decorations.addHouse(map.getBound(4).position.get().add(new Vector(0, 180)));
		decorations.addHouse(map.getBound(9).position.get().add(new Vector(0, 180)));
		decorations.addTree(map.getBound(2).position.get().add(new Vector(0, 150)), true);

		decorations.addCustom(new Girl(3));
		decorations.addCustom(new Girl(5));
		decorations.addCustom(new Fox(4, 350));
		decorations.addCustom(new Fox(5, 390));
		decorations.addCustom(new Fox(3, 370));
	},
	bound: function() {
		var accuracy = 20;
		var i, points = map.getBound(), point;

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
		ctx.bezierCurveTo(this.c1.x, this.c1.y, this.c2.x, this.c2.y, this.to.x, this.to.y);
	}
};
