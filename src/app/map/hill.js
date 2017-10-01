function Hill(last, glade) {
	var distanceRange = glade ? [1400, 2000] : [1500, 3000],
		vDiff = glade ? parseInt(50 + (100 * Math.random())) : parseInt(300 + (500 * Math.random())),
		hDiff = distanceRange[0] + Math.floor(Math.random() * (distanceRange[1] - distanceRange[0]));

	this.glade = glade;
	this.from = last.to.get().add(new Vector(0, 0));
	this.to = new Vector(this.from.x + hDiff, this.from.y + vDiff);

	this.c1 = this.from.get().add(this.from.get().sub(last.c2).normalize().mult(.45 * hDiff));
	this.c2 = this.to.get().sub(new Vector(hDiff * (.3 + Math.random() * .2), 0));

	this.bound();
	this.addDecoration();
}

Hill.prototype = {
	addDecoration: function() {
		var i = 20, existHouse = Math.random() < .3, houseIndex = 0;

		if (existHouse) {
			houseIndex = 1 + parseInt(20 * Math.random());
			decorations.addHouse(map.getBound(map.getBound().length - houseIndex).position.get().add(new Vector(0, (100 + 100 * Math.random()))));
		}

		while (i > 1) {
			if (Math.random() < .2) {
				decorations.addTree(map.getBound(map.getBound().length - i).position.get().add(new Vector(0, (-150 + 300 * Math.random()))));
			}
			i--;
			if (houseIndex === i) {
				i = houseIndex - 5;
			}
		}
	},
	bound: function() {
		var i, accuracy = 20, points = map.getBound(), point;

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
