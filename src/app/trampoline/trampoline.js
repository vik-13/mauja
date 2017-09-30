function Trampoline(position, index) {
	this.HEIGHT = 45;
	this.WIDTH = 90;
	this.position = position.get();
	this.normal = map.getBound(index).normal.get();
	this.angle = this.normal.angle() + (Math.PI / 2);
	this.points = [];

	this.bound();
	particles.addDrop(this.position.get().add(new Vector(this.WIDTH / 2, -this.HEIGHT / 2)), 100, 20);
}

Trampoline.prototype = {
	deactivate: function() {
		particles.addDrop(this.position.get().add(new Vector(this.WIDTH / 2, -this.HEIGHT / 2)), 100, 20);
	},
	bound: function() {
		var normal, secondPoint;
		this.points.push({
			position: this.position.get(),
			normal: this.normal.get()
		});
		secondPoint = new Vector(this.position.x + this.WIDTH * Math.cos(this.angle),
			this.position.y + this.HEIGHT * Math.sin(this.angle));
		normal = secondPoint.normal(this.position);
		secondPoint.add(normal.get().mult(this.HEIGHT));

		this.points.push({
			position: secondPoint.get(),
			normal: secondPoint.normal(this.position)
		});
	},
	render: function() {
		var shiftX = 0, shiftY = -45;
		var i;

		for (i = 0; i < 2; i++) {
			ctx.save();
			ctx.globalAlpha = !i ? 1 : night;
			ctx.translate(this.position.x, this.position.y);
			ctx.rotate(this.angle);
			ctx.miterLimit = 4;
			ctx.fillStyle = !i ? '#72514E' : app.nColor;
			bp();
			m(26 + shiftX, 41 + shiftY);
			l(45 + shiftX, 52 + shiftY);
			l(45 + shiftX, 55 + shiftY);
			l(26 + shiftX, 43 + shiftY);
			l(26 + shiftX, 41 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#72514E' : app.nColor;
			bp();
			m(54 + shiftX, 32 + shiftY);
			l(54 + shiftX, 37 + shiftY);
			l(71 + shiftX, 53 + shiftY);
			l(71 + shiftX, 48 + shiftY);
			l(54 + shiftX, 32 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#684745' : app.nColor;
			bp();
			m(72 + shiftX, 22 + shiftY);
			l(54 + shiftX, 49 + shiftY);
			l(54 + shiftX, 54 + shiftY);
			l(72 + shiftX, 28 + shiftY);
			l(72 + shiftX, 22 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#684745' : app.nColor;
			bp();
			m(44 + shiftX, 36 + shiftY);
			l(26 + shiftX, 51 + shiftY);
			l(26 + shiftX, 53 + shiftY);
			l(44 + shiftX, 40 + shiftY);
			l(44 + shiftX, 36 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#684745' : app.nColor;
			bp();
			m(84 + shiftX, 53 + shiftY);
			l(26 + shiftX, 55 + shiftY);
			l(26 + shiftX, 49 + shiftY);
			l(86 + shiftX, 47 + shiftY);
			l(85 + shiftX, 49 + shiftY);
			ctx.fill();

			ctx.fillStyle = !i ? '#72514E' : app.nColor;
			bp();
			m(71 + shiftX, 55 + shiftY);
			l(71 + shiftX, 16 + shiftY);
			l(82 + shiftX, 11 + shiftY);
			l(82 + shiftX, 55 + shiftY);
			l(78 + shiftX, 57 + shiftY);
			l(71 + shiftX, 55 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#72514E' : app.nColor;
			bp();
			m(43 + shiftX, 34 + shiftY);
			l(54 + shiftX, 28 + shiftY);
			l(54 + shiftX, 56 + shiftY);
			l(51 + shiftX, 56 + shiftY);
			l(49 + shiftX, 58 + shiftY);
			l(43 + shiftX, 57 + shiftY);
			l(43 + shiftX, 56 + shiftY);
			l(43 + shiftX, 34 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#72514E' : app.nColor;
			bp();
			m(15 + shiftX, 52 + shiftY);
			l(26 + shiftX, 45 + shiftY);
			l(26 + shiftX, 56 + shiftY);
			l(24 + shiftX, 57 + shiftY);
			l(20 + shiftX, 56 + shiftY);
			l(15 + shiftX, 56 + shiftY);
			l(15 + shiftX, 52 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#684745' : app.nColor;
			bp();
			m(26 + shiftX, 45 + shiftY);
			l(15 + shiftX, 56 + shiftY);
			l(15 + shiftX, 52 + shiftY);
			l(26 + shiftX, 45 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#72514E' : app.nColor;
			bp();
			m(85 + shiftX, 49 + shiftY);
			l(26 + shiftX, 55 + shiftY);
			l(84 + shiftX, 53 + shiftY);
			l(85 + shiftX, 49 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#684745' : app.nColor;
			bp();
			m(71 + shiftX, 17 + shiftY);
			l(76 + shiftX, 14 + shiftY);
			l(82 + shiftX, 10 + shiftY);
			l(71 + shiftX, 55 + shiftY);
			ctx.fill();

			ctx.fillStyle = !i ? '#684B4A' : app.nColor;
			bp();
			m(2 + shiftX, 51 + shiftY);
			l(5 + shiftX, 58 + shiftY);
			l(86 + shiftX, 8 + shiftY);
			l(86 + shiftX, 1 + shiftY);
			l(2 + shiftX, 51 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#684745' : app.nColor;
			bp();
			m(43 + shiftX, 57 + shiftY);
			l(54 + shiftX, 28 + shiftY);
			l(43 + shiftX, 34 + shiftY);
			l(43 + shiftX, 57 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#DCEAE7' : app.nColor;
			bp();
			m(shiftX, 59 + shiftY);
			l(1 + shiftX, 48 + shiftY);
			l(8 + shiftX, 40 + shiftY);
			l(19 + shiftX, 34 + shiftY);
			l(29 + shiftX, 31 + shiftY);
			l(40 + shiftX, 22 + shiftY);
			l(44 + shiftX, 22 + shiftY);
			l(65 + shiftX, 8 + shiftY);
			l(71 + shiftX, 7 + shiftY);
			l(77 + shiftX, 1 + shiftY);
			l(82 + shiftX, shiftY);
			l(86 + shiftX, shiftY);
			l(87 + shiftX, 1 + shiftY);
			l(88 + shiftX, 7 + shiftY);
			l(81 + shiftX, 3 + shiftY);
			l(75 + shiftX, 8 + shiftY);
			l(68 + shiftX, 12 + shiftY);
			l(63 + shiftX, 15 + shiftY);
			l(58 + shiftX, 19 + shiftY);
			l(50 + shiftX, 22 + shiftY);
			l(42 + shiftX, 29 + shiftY);
			l(38 + shiftX, 32 + shiftY);
			l(32 + shiftX, 33 + shiftY);
			l(27 + shiftX, 36 + shiftY);
			l(23 + shiftX, 38 + shiftY);
			l(20 + shiftX, 40 + shiftY);
			l(15 + shiftX, 44 + shiftY);
			l(9 + shiftX, 48 + shiftY);
			l(4 + shiftX, 55 + shiftY);
			l(shiftX, 59 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#A6D1D5' : app.nColor;
			bp();
			m(81 + shiftX, 3 + shiftY);
			l(77 + shiftX, 5 + shiftY);
			l(73 + shiftX, 9 + shiftY);
			l(68 + shiftX, 10 + shiftY);
			l(59 + shiftX, 17 + shiftY);
			l(50 + shiftX, 21 + shiftY);
			l(44 + shiftX, 24 + shiftY);
			l(42 + shiftX, 26 + shiftY);
			l(39 + shiftX, 27 + shiftY);
			l(30 + shiftX, 32 + shiftY);
			l(22 + shiftX, 38 + shiftY);
			l(15 + shiftX, 41 + shiftY);
			l(9 + shiftX, 44 + shiftY);
			l(3 + shiftX, 51 + shiftY);
			l(shiftX, 59 + shiftY);
			l(5 + shiftX, 58 + shiftY);
			l(9 + shiftX, 48 + shiftY);
			l(14 + shiftX, 48 + shiftY);
			l(18 + shiftX, 43 + shiftY);
			l(19 + shiftX, 46 + shiftY);
			l(20 + shiftX, 42 + shiftY);
			l(24 + shiftX, 39 + shiftY);
			l(26 + shiftX, 38 + shiftY);
			l(31 + shiftX, 40 + shiftY);
			l(32 + shiftX, 34 + shiftY);
			l(34 + shiftX, 34 + shiftY);
			l(41 + shiftX, 33 + shiftY);
			l(45 + shiftX, 28 + shiftY);
			l(49 + shiftX, 24 + shiftY);
			l(56 + shiftX, 21 + shiftY);
			l(62 + shiftX, 20 + shiftY);
			l(66 + shiftX, 14 + shiftY);
			l(67 + shiftX, 14 + shiftY);
			l(72 + shiftX, 12 + shiftY);
			l(73 + shiftX, 13 + shiftY);
			l(77 + shiftX, 7 + shiftY);
			l(81 + shiftX, 6 + shiftY);
			l(84 + shiftX, 7 + shiftY);
			l(85 + shiftX, 15 + shiftY);
			l(87 + shiftX, 7 + shiftY);
			l(89 + shiftX, 7 + shiftY);
			l(86 + shiftX, 4 + shiftY);
			l(84 + shiftX, 3 + shiftY);
			l(81 + shiftX, 3 + shiftY);
			cp();
			ctx.fill();
			ctx.restore();
		}
	}
};
