function Rock(index) {
	this.position = new Vector(map.getBound(index).position.x, map.getBound(index).position.y);
	this.r = 50;
	this.halfWidth = 62;
	this.angle = map.getBound(index).normal.angle() + (Math.PI / 2);
}

Rock.prototype = {
	render: function() {
		var shiftX = -62, shiftY = -46;
		var i;

		for (i = 0; i < 2; i++) {
			ctx.save();
			ctx.globalAlpha = !i ? 1 : night;
			ctx.translate(this.position.x, this.position.y);
			ctx.rotate(this.angle);

			ctx.miterLimit = 4;
			ctx.fillStyle = !i ? '#37243F' : 'rgb(21, 30, 30)';
			bp();
			m(shiftX, 83 + shiftY);
			l(4 + shiftX, 56 + shiftY);
			l(22 + shiftX, 32 + shiftY);
			l(33 + shiftX, 14 + shiftY);
			l(61 + shiftX, 12 + shiftY);
			l(21 + shiftX, 46 + shiftY);
			l(33 + shiftX, 42 + shiftY);
			l(34 + shiftX, 61 + shiftY);
			l(52 + shiftX, 42 + shiftY);
			l(45 + shiftX, 61 + shiftY);
			l(72 + shiftX, 45 + shiftY);
			l(57 + shiftX, 73 + shiftY);
			l(57 + shiftX, 88 + shiftY);
			l(45 + shiftX, 91 + shiftY);
			l(31 + shiftX, 88 + shiftY);
			l(17 + shiftX, 90 + shiftY);
			l(shiftX, 83 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#706671' : 'rgb(21, 30, 30)';
			bp();
			m(98 + shiftX, 23 + shiftY);
			l(61 + shiftX, 12 + shiftY);
			l(21 + shiftX, 46 + shiftY);
			l(98 + shiftX, 23 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#5E5160' : 'rgb(21, 30, 30)';
			bp();
			m(99 + shiftX, 49 + shiftY);
			l(98 + shiftX, 23 + shiftY);
			l(64 + shiftX, 33 + shiftY);
			l(99 + shiftX, 49 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#807880' : 'rgb(21, 30, 30)';
			bp();
			m(124 + shiftX, 62 + shiftY);
			l(99 + shiftX, 49 + shiftY);
			l(64 + shiftX, 33 + shiftY);
			l(72 + shiftX, 45 + shiftY);
			l(103 + shiftX, 61 + shiftY);
			l(124 + shiftX, 62 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#8D888B' : 'rgb(21, 30, 30)';
			bp();
			m(103 + shiftX, 7 + shiftY);
			l(98 + shiftX, 23 + shiftY);
			l(99 + shiftX, 49 + shiftY);
			l(124 + shiftX, 62 + shiftY);
			l(103 + shiftX, 7 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#80777F' : 'rgb(21, 30, 30)';
			bp();
			m(61 + shiftX, 12 + shiftY);
			l(103 + shiftX, 7 + shiftY);
			l(98 + shiftX, 23 + shiftY);
			l(61 + shiftX, 12 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#403148' : 'rgb(21, 30, 30)';
			bp();
			m(64 + shiftX, 33 + shiftY);
			l(52 + shiftX, 42 + shiftY);
			l(45 + shiftX, 61 + shiftY);
			l(72 + shiftX, 45 + shiftY);
			l(64 + shiftX, 33 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#5A4C5C' : 'rgb(21, 30, 30)';
			bp();
			m(34 + shiftX, 61 + shiftY);
			l(33 + shiftX, 42 + shiftY);
			l(64 + shiftX, 33 + shiftY);
			l(52 + shiftX, 42 + shiftY);
			l(50 + shiftX, 47 + shiftY);
			l(34 + shiftX, 61 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#6A5E6C' : 'rgb(21, 30, 30)';
			bp();
			m(118 + shiftX, 90 + shiftY);
			l(124 + shiftX, 62 + shiftY);
			l(103 + shiftX, 61 + shiftY);
			l(102 + shiftX, 84 + shiftY);
			l(118 + shiftX, 90 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#37243F' : 'rgb(21, 30, 30)';
			bp();
			m(72 + shiftX, 45 + shiftY);
			l(76 + shiftX, 87 + shiftY);
			l(93 + shiftX, 81 + shiftY);
			l(102 + shiftX, 84 + shiftY);
			l(103 + shiftX, 61 + shiftY);
			l(72 + shiftX, 45 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#5B4C60' : 'rgb(21, 30, 30)';
			bp();
			m(57 + shiftX, 88 + shiftY);
			l(76 + shiftX, 87 + shiftY);
			l(72 + shiftX, 45 + shiftY);
			l(57 + shiftX, 88 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#403148' : 'rgb(21, 30, 30)';
			bp();
			m(72 + shiftX, 45 + shiftY);
			l(57 + shiftX, 73 + shiftY);
			l(57 + shiftX, 88 + shiftY);
			l(72 + shiftX, 45 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#DCEAE7' : 'rgb(21, 30, 30)';
			bp();
			m(64 + shiftX, 33 + shiftY);
			l(58 + shiftX, 35 + shiftY);
			l(52 + shiftX, 42 + shiftY);
			l(62 + shiftX, 37 + shiftY);
			l(67 + shiftX, 38 + shiftY);
			l(72 + shiftX, 45 + shiftY);
			l(70 + shiftX, 38 + shiftY);
			l(98 + shiftX, 49 + shiftY);
			l(88 + shiftX, 44 + shiftY);
			l(82 + shiftX, 40 + shiftY);
			l(75 + shiftX, 38 + shiftY);
			l(72 + shiftX, 36 + shiftY);
			l(69 + shiftX, 34 + shiftY);
			l(64 + shiftX, 33 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#DCEAE7' : 'rgb(21, 30, 30)';
			bp();
			m(111 + shiftX, 13 + shiftY);
			l(106 + shiftX, 7 + shiftY);
			l(100 + shiftX, 2 + shiftY);
			l(87 + shiftX, 1 + shiftY);
			l(78 + shiftX, shiftY);
			l(68 + shiftX, 3 + shiftY);
			l(60 + shiftX, 5 + shiftY);
			l(53 + shiftX, 5 + shiftY);
			l(48 + shiftX, 7 + shiftY);
			l(41 + shiftX, 8 + shiftY);
			l(34 + shiftX, 13 + shiftY);
			l(31 + shiftX, 15 + shiftY);
			l(28 + shiftX, 18 + shiftY);
			l(27 + shiftX, 23 + shiftY);
			l(32 + shiftX, 18 + shiftY);
			l(27 + shiftX, 30 + shiftY);
			l(39 + shiftX, 17 + shiftY);
			l(49 + shiftX, 15 + shiftY);
			l(35 + shiftX, 34 + shiftY);
			l(61 + shiftX, 12 + shiftY);
			l(60 + shiftX, 12 + shiftY);
			l(61 + shiftX, 12 + shiftY);
			l(78 + shiftX, 17 + shiftY);
			l(76 + shiftX, 13 + shiftY);
			l(87 + shiftX, 9 + shiftY);
			l(87 + shiftX, 9 + shiftY);
			l(87 + shiftX, 9 + shiftY);
			l(92 + shiftX, 10 + shiftY);
			l(96 + shiftX, 13 + shiftY);
			l(98 + shiftX, 23 + shiftY);
			l(99 + shiftX, 49 + shiftY);
			l(100 + shiftX, 44 + shiftY);
			l(100 + shiftX, 41 + shiftY);
			l(103 + shiftX, 27 + shiftY);
			l(104 + shiftX, 23 + shiftY);
			l(104 + shiftX, 19 + shiftY);
			l(106 + shiftX, 20 + shiftY);
			l(106 + shiftX, 16 + shiftY);
			l(113 + shiftX, 34 + shiftY);
			l(113 + shiftX, 28 + shiftY);
			l(111 + shiftX, 13 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#DCEAE7' : 'rgb(21, 30, 30)';
			bp();
			m(124 + shiftX, 62 + shiftY);
			l(117 + shiftX, 57 + shiftY);
			l(112 + shiftX, 54 + shiftY);
			l(109 + shiftX, 51 + shiftY);
			l(105 + shiftX, 50 + shiftY);
			l(99 + shiftX, 49 + shiftY);
			l(124 + shiftX, 62 + shiftY);
			cp();
			ctx.fill();
			ctx.restore();
		}
	}
};
