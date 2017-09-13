function Fox(index) {
	this.position = new Vector(app.hills.points[index].position.x, app.hills.points[index].position.y);
	this.r = 30;
	this.halfWidth = 56;
	this.angle = app.hills.points[index].normal.angle() + (Math.PI / 2);
}

Fox.prototype = {
	render: function() {
		var shiftX = -56, shiftY = -23;
		var i;

		for (i = 0; i < 2; i++) {
			ctx.save();
			ctx.globalAlpha = !i ? 1 : night;
			ctx.translate(this.position.x, this.position.y);
			ctx.rotate(this.angle);

			ctx.miterLimit = 4;
			ctx.fillStyle = "#C2C2C2";
			bp();
			m(shiftX, 17 + shiftY);
			l(22 + shiftX, 16 + shiftY);
			l(12 + shiftX, 20 + shiftY);
			l(shiftX, 17 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#E3E3E3";
			bp();
			m(23 + shiftX, 31 + shiftY);
			l(22 + shiftX, 16 + shiftY);
			l(12 + shiftX, 20 + shiftY);
			l(23 + shiftX, 31 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#E3642A";
			bp();
			m(24 + shiftX, 13 + shiftY);
			l(shiftX, 17 + shiftY);
			l(22 + shiftX, 16 + shiftY);
			l(24 + shiftX, 13 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#E77B3B";
			bp();
			m(20 + shiftX, 10 + shiftY);
			l(24 + shiftX, 13 + shiftY);
			l(14 + shiftX, 14 + shiftY);
			l(20 + shiftX, 10 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#E3642A";
			bp();
			m(10 + shiftX, 7 + shiftY);
			l(14 + shiftX, 14 + shiftY);
			l(20 + shiftX, 10 + shiftY);
			l(16 + shiftX, 7 + shiftY);
			l(10 + shiftX, 7 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#CE4121";
			bp();
			m(8 + shiftX, 4 + shiftY);
			l(10 + shiftX, 7 + shiftY);
			l(16 + shiftX, 7 + shiftY);
			l(8 + shiftX, 4 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#E65827";
			bp();
			m(shiftX, 17 + shiftY);
			l(5 + shiftX, 13 + shiftY);
			l(10 + shiftX, 10 + shiftY);
			l(14 + shiftX, 14 + shiftY);
			l(shiftX, 17 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#CE4121";
			bp();
			m(11 + shiftX, 9 + shiftY);
			l(10 + shiftX, 10 + shiftY);
			l(5 + shiftX, 13 + shiftY);
			l(10 + shiftX, 7 + shiftY);
			l(11 + shiftX, 9 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#CE4121";
			bp();
			m(14 + shiftX, 14 + shiftY);
			ctx.fill();

			ctx.fillStyle = "#D24C23";
			bp();
			m(14 + shiftX, 14 + shiftY);
			l(10 + shiftX, 10 + shiftY);
			l(11 + shiftX, 9 + shiftY);
			l(14 + shiftX, 14 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#E77B3B";
			bp();
			m(43 + shiftX, 13 + shiftY);
			l(22 + shiftX, 16 + shiftY);
			l(24 + shiftX, 13 + shiftY);
			l(43 + shiftX, 13 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#E3642A";
			bp();
			m(23 + shiftX, 31 + shiftY);
			l(43 + shiftX, 13 + shiftY);
			l(22 + shiftX, 16 + shiftY);
			l(23 + shiftX, 31 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#E65827";
			bp();
			m(53 + shiftX, 23 + shiftY);
			l(43 + shiftX, 13 + shiftY);
			l(23 + shiftX, 31 + shiftY);
			l(53 + shiftX, 23 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#E77B3B";
			bp();
			m(66 + shiftX, 8 + shiftY);
			l(53 + shiftX, 23 + shiftY);
			l(43 + shiftX, 13 + shiftY);
			l(66 + shiftX, 8 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#E65827";
			bp();
			m(63 + shiftX, 26 + shiftY);
			l(66 + shiftX, 8 + shiftY);
			l(53 + shiftX, 23 + shiftY);
			l(63 + shiftX, 26 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#E3642A";
			bp();
			m(74 + shiftX, 23 + shiftY);
			l(66 + shiftX, 8 + shiftY);
			l(63 + shiftX, 26 + shiftY);
			l(65 + shiftX, 27 + shiftY);
			l(74 + shiftX, 23 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#D54022";
			bp();
			m(13 + shiftX, 37 + shiftY);
			l(53 + shiftX, 23 + shiftY);
			l(23 + shiftX, 31 + shiftY);
			l(13 + shiftX, 37 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#A03017";
			bp();
			m(16 + shiftX, 38 + shiftY);
			l(13 + shiftX, 37 + shiftY);
			l(34 + shiftX, 30 + shiftY);
			l(16 + shiftX, 38 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#210D08";
			bp();
			m(8 + shiftX, 43 + shiftY);
			l(13 + shiftX, 37 + shiftY);
			l(16 + shiftX, 38 + shiftY);
			l(8 + shiftX, 43 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#A03017";
			bp();
			m(43 + shiftX, 38 + shiftY);
			l(42 + shiftX, 27 + shiftY);
			l(34 + shiftX, 30 + shiftY);
			l(43 + shiftX, 38 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#210D08";
			bp();
			m(41 + shiftX, 44 + shiftY);
			l(43 + shiftX, 38 + shiftY);
			l(39 + shiftX, 34 + shiftY);
			l(41 + shiftX, 44 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#D54022";
			bp();
			m(53 + shiftX, 23 + shiftY);
			l(59 + shiftX, 35 + shiftY);
			l(63 + shiftX, 26 + shiftY);
			l(53 + shiftX, 23 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#A03017";
			bp();
			m(61 + shiftX, 39 + shiftY);
			l(63 + shiftX, 26 + shiftY);
			l(59 + shiftX, 35 + shiftY);
			l(61 + shiftX, 39 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#210D08";
			bp();
			m(54 + shiftX, 44 + shiftY);
			l(61 + shiftX, 39 + shiftY);
			l(59 + shiftX, 35 + shiftY);
			l(54 + shiftX, 44 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#D54022";
			bp();
			m(80 + shiftX, 33 + shiftY);
			l(74 + shiftX, 23 + shiftY);
			l(65 + shiftX, 27 + shiftY);
			l(80 + shiftX, 33 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#A03017";
			bp();
			m(83 + shiftX, 30 + shiftY);
			l(80 + shiftX, 33 + shiftY);
			l(74 + shiftX, 23 + shiftY);
			l(83 + shiftX, 30 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#210D08";
			bp();
			m(83 + shiftX, 43 + shiftY);
			l(83 + shiftX, 30 + shiftY);
			l(80 + shiftX, 33 + shiftY);
			l(83 + shiftX, 43 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#E77B3B";
			bp();
			m(82 + shiftX, 8 + shiftY);
			l(66 + shiftX, 8 + shiftY);
			l(84 + shiftX, 21 + shiftY);
			l(82 + shiftX, 8 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#E3642A";
			bp();
			m(102 + shiftX, 15 + shiftY);
			l(84 + shiftX, 21 + shiftY);
			l(82 + shiftX, 8 + shiftY);
			l(102 + shiftX, 15 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#D54022";
			bp();
			m(102 + shiftX, 23 + shiftY);
			l(102 + shiftX, 15 + shiftY);
			l(84 + shiftX, 21 + shiftY);
			l(102 + shiftX, 23 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#A03017";
			bp();
			m(111 + shiftX, 14 + shiftY);
			l(102 + shiftX, 15 + shiftY);
			l(102 + shiftX, 23 + shiftY);
			l(111 + shiftX, 14 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#D54022";
			bp();
			m(108 + shiftX, 5 + shiftY);
			l(111 + shiftX, 14 + shiftY);
			l(102 + shiftX, 15 + shiftY);
			l(108 + shiftX, 5 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#E3642A";
			bp();
			m(94 + shiftX, shiftY);
			l(102 + shiftX, 15 + shiftY);
			l(108 + shiftX, 5 + shiftY);
			l(94 + shiftX, shiftY);
			cp();
			ctx.fill();
			ctx.restore();
		}
	}
};
