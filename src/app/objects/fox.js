function Fox(index, shiftY) {
	this.position = new Vector(map.getBound(index).position.x, map.getBound(index).position.y);
	this.r = 30;
	this.halfWidth = 56;
	this.shiftY = shiftY || 0;
	this.angle = map.getBound(index).normal.angle() + (Math.PI / 2);
}

Fox.prototype = {
	render: function() {
		var shiftX = -56, shiftY = -23;
		var i;

		for (i = 0; i < 2; i++) {
			ctx.save();
			ctx.globalAlpha = !i ? 1 : night;
			ctx.translate(this.position.x, this.position.y + this.shiftY);
			ctx.rotate(this.angle);

			ctx.miterLimit = 4;
			ctx.fillStyle = !i ? '#C2C2C2' : '#202B2C';
			bp();
			m(shiftX, 17 + shiftY);
			l(22 + shiftX, 16 + shiftY);
			l(12 + shiftX, 20 + shiftY);
			l(shiftX, 17 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#E3E3E3' : '#202B2C';
			bp();
			m(23 + shiftX, 31 + shiftY);
			l(22 + shiftX, 16 + shiftY);
			l(12 + shiftX, 20 + shiftY);
			l(23 + shiftX, 31 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#E3642A' : '#202B2C';
			bp();
			m(24 + shiftX, 13 + shiftY);
			l(shiftX, 17 + shiftY);
			l(22 + shiftX, 16 + shiftY);
			l(24 + shiftX, 13 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#E77B3B' : '#202B2C';
			bp();
			m(20 + shiftX, 10 + shiftY);
			l(24 + shiftX, 13 + shiftY);
			l(14 + shiftX, 14 + shiftY);
			l(20 + shiftX, 10 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#E3642A' : '#202B2C';
			bp();
			m(10 + shiftX, 7 + shiftY);
			l(14 + shiftX, 14 + shiftY);
			l(20 + shiftX, 10 + shiftY);
			l(16 + shiftX, 7 + shiftY);
			l(10 + shiftX, 7 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#CE4121' : '#202B2C';
			bp();
			m(8 + shiftX, 4 + shiftY);
			l(10 + shiftX, 7 + shiftY);
			l(16 + shiftX, 7 + shiftY);
			l(8 + shiftX, 4 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#E65827' : '#202B2C';
			bp();
			m(shiftX, 17 + shiftY);
			l(5 + shiftX, 13 + shiftY);
			l(10 + shiftX, 10 + shiftY);
			l(14 + shiftX, 14 + shiftY);
			l(shiftX, 17 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#CE4121' : '#202B2C';
			bp();
			m(11 + shiftX, 9 + shiftY);
			l(10 + shiftX, 10 + shiftY);
			l(5 + shiftX, 13 + shiftY);
			l(10 + shiftX, 7 + shiftY);
			l(11 + shiftX, 9 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#CE4121' : '#202B2C';
			bp();
			m(14 + shiftX, 14 + shiftY);
			ctx.fill();

			ctx.fillStyle = !i ? '#D24C23' : '#202B2C';
			bp();
			m(14 + shiftX, 14 + shiftY);
			l(10 + shiftX, 10 + shiftY);
			l(11 + shiftX, 9 + shiftY);
			l(14 + shiftX, 14 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#E77B3B' : '#202B2C';
			bp();
			m(43 + shiftX, 13 + shiftY);
			l(22 + shiftX, 16 + shiftY);
			l(24 + shiftX, 13 + shiftY);
			l(43 + shiftX, 13 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#E3642A' : '#202B2C';
			bp();
			m(23 + shiftX, 31 + shiftY);
			l(43 + shiftX, 13 + shiftY);
			l(22 + shiftX, 16 + shiftY);
			l(23 + shiftX, 31 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#E65827' : '#202B2C';
			bp();
			m(53 + shiftX, 23 + shiftY);
			l(43 + shiftX, 13 + shiftY);
			l(23 + shiftX, 31 + shiftY);
			l(53 + shiftX, 23 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#E77B3B' : '#202B2C';
			bp();
			m(66 + shiftX, 8 + shiftY);
			l(53 + shiftX, 23 + shiftY);
			l(43 + shiftX, 13 + shiftY);
			l(66 + shiftX, 8 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#E65827' : '#202B2C';
			bp();
			m(63 + shiftX, 26 + shiftY);
			l(66 + shiftX, 8 + shiftY);
			l(53 + shiftX, 23 + shiftY);
			l(63 + shiftX, 26 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#E3642A' : '#202B2C';
			bp();
			m(74 + shiftX, 23 + shiftY);
			l(66 + shiftX, 8 + shiftY);
			l(63 + shiftX, 26 + shiftY);
			l(65 + shiftX, 27 + shiftY);
			l(74 + shiftX, 23 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#D54022' : '#202B2C';
			bp();
			m(13 + shiftX, 37 + shiftY);
			l(53 + shiftX, 23 + shiftY);
			l(23 + shiftX, 31 + shiftY);
			l(13 + shiftX, 37 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#A03017' : '#202B2C';
			bp();
			m(16 + shiftX, 38 + shiftY);
			l(13 + shiftX, 37 + shiftY);
			l(34 + shiftX, 30 + shiftY);
			l(16 + shiftX, 38 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#210D08' : '#202B2C';
			bp();
			m(8 + shiftX, 43 + shiftY);
			l(13 + shiftX, 37 + shiftY);
			l(16 + shiftX, 38 + shiftY);
			l(8 + shiftX, 43 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#A03017' : '#202B2C';
			bp();
			m(43 + shiftX, 38 + shiftY);
			l(42 + shiftX, 27 + shiftY);
			l(34 + shiftX, 30 + shiftY);
			l(43 + shiftX, 38 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#210D08' : '#202B2C';
			bp();
			m(41 + shiftX, 44 + shiftY);
			l(43 + shiftX, 38 + shiftY);
			l(39 + shiftX, 34 + shiftY);
			l(41 + shiftX, 44 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#D54022' : '#202B2C';
			bp();
			m(53 + shiftX, 23 + shiftY);
			l(59 + shiftX, 35 + shiftY);
			l(63 + shiftX, 26 + shiftY);
			l(53 + shiftX, 23 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#A03017' : '#202B2C';
			bp();
			m(61 + shiftX, 39 + shiftY);
			l(63 + shiftX, 26 + shiftY);
			l(59 + shiftX, 35 + shiftY);
			l(61 + shiftX, 39 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#210D08' : '#202B2C';
			bp();
			m(54 + shiftX, 44 + shiftY);
			l(61 + shiftX, 39 + shiftY);
			l(59 + shiftX, 35 + shiftY);
			l(54 + shiftX, 44 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#D54022' : '#202B2C';
			bp();
			m(80 + shiftX, 33 + shiftY);
			l(74 + shiftX, 23 + shiftY);
			l(65 + shiftX, 27 + shiftY);
			l(80 + shiftX, 33 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#A03017' : '#202B2C';
			bp();
			m(83 + shiftX, 30 + shiftY);
			l(80 + shiftX, 33 + shiftY);
			l(74 + shiftX, 23 + shiftY);
			l(83 + shiftX, 30 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#210D08' : '#202B2C';
			bp();
			m(83 + shiftX, 43 + shiftY);
			l(83 + shiftX, 30 + shiftY);
			l(80 + shiftX, 33 + shiftY);
			l(83 + shiftX, 43 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#E77B3B' : '#202B2C';
			bp();
			m(82 + shiftX, 8 + shiftY);
			l(66 + shiftX, 8 + shiftY);
			l(84 + shiftX, 21 + shiftY);
			l(82 + shiftX, 8 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#E3642A' : '#202B2C';
			bp();
			m(102 + shiftX, 15 + shiftY);
			l(84 + shiftX, 21 + shiftY);
			l(82 + shiftX, 8 + shiftY);
			l(102 + shiftX, 15 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#D54022' : '#202B2C';
			bp();
			m(102 + shiftX, 23 + shiftY);
			l(102 + shiftX, 15 + shiftY);
			l(84 + shiftX, 21 + shiftY);
			l(102 + shiftX, 23 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#A03017' : '#202B2C';
			bp();
			m(111 + shiftX, 14 + shiftY);
			l(102 + shiftX, 15 + shiftY);
			l(102 + shiftX, 23 + shiftY);
			l(111 + shiftX, 14 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#D54022' : '#202B2C';
			bp();
			m(108 + shiftX, 5 + shiftY);
			l(111 + shiftX, 14 + shiftY);
			l(102 + shiftX, 15 + shiftY);
			l(108 + shiftX, 5 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#E3642A' : '#202B2C';
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
