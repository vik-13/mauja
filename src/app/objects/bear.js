function Bear(index) {
	this.position = new Vector(map.getBound(index).position.x, map.getBound(index).position.y);
	this.r = 30;
	this.halfWidth = 52;
	this.angle = map.getBound(index).normal.angle() + (Math.PI / 2);
}

Bear.prototype = {
	render: function() {
		var shiftX = -52, shiftY = -27;
		var i;

		for (i = 0; i < 2; i++) {
			ctx.save();
			ctx.globalAlpha = !i ? 1 : night;
			ctx.translate(this.position.x, this.position.y);
			ctx.rotate(this.angle);

			ctx.miterLimit = 4;
			ctx.fillStyle = !i ? '#7E5A49' : '#202B2C';
			bp();
			m(13 + shiftX, 12 + shiftY);
			l(32 + shiftX, 1 + shiftY);
			l(36 + shiftX, 40 + shiftY);
			l(30 + shiftX, 54 + shiftY);
			l(23 + shiftX, 54 + shiftY);
			l(13 + shiftX, 12 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#9F785A' : '#202B2C';
			bp();
			m(62 + shiftX, 4 + shiftY);
			l(32 + shiftX, 1 + shiftY);
			l(35 + shiftX, 31 + shiftY);
			l(59 + shiftX, 36 + shiftY);
			l(62 + shiftX, 4 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#5B4737' : '#202B2C';
			bp();
			m(36 + shiftX, 41 + shiftY);
			l(35 + shiftX, 31 + shiftY);
			l(59 + shiftX, 36 + shiftY);
			l(36 + shiftX, 41 + shiftY);
			cp();
			ctx.fill();

			bp();
			m(13 + shiftX, 13 + shiftY);
			l(9 + shiftX, 19 + shiftY);
			l(19 + shiftX, 38 + shiftY);
			l(13 + shiftX, 13 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#9F785A' : '#202B2C';
			bp();
			m(6 + shiftX, 28 + shiftY);
			l(5 + shiftX, 26 + shiftY);
			l(9 + shiftX, 19 + shiftY);
			l(13 + shiftX, 26 + shiftY);
			l(6 + shiftX, 28 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#45322C' : '#202B2C';
			bp();
			m(19 + shiftX, 38 + shiftY);
			l(13 + shiftX, 26 + shiftY);
			l(6 + shiftX, 28 + shiftY);
			l(0 + shiftX, 47 + shiftY);
			l(4 + shiftX, 55 + shiftY);
			l(19 + shiftX, 38 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#7F5945' : '#202B2C';
			bp();
			m(14 + shiftX, 55 + shiftY);
			l(10 + shiftX, 48 + shiftY);
			l(4 + shiftX, 55 + shiftY);
			l(14 + shiftX, 55 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#A57F64' : '#202B2C';
			bp();
			m(38 + shiftX, 54 + shiftY);
			l(32 + shiftX, 49 + shiftY);
			l(30 + shiftX, 54 + shiftY);
			l(38 + shiftX, 54 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#C2A187' : '#202B2C';
			bp();
			m(67 + shiftX, 9 + shiftY);
			l(62 + shiftX, 4 + shiftY);
			l(59 + shiftX, 36 + shiftY);
			l(67 + shiftX, 9 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#9F785A' : '#202B2C';
			bp();
			m(70 + shiftX, 0 + shiftY);
			l(67 + shiftX, 9 + shiftY);
			l(62 + shiftX, 4 + shiftY);
			l(70 + shiftX, 0 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#594537' : '#202B2C';
			bp();
			m(79 + shiftX, 4 + shiftY);
			l(67 + shiftX, 9 + shiftY);
			l(70 + shiftX, 0 + shiftY);
			l(79 + shiftX, 4 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#815B4A' : '#202B2C';
			bp();
			m(79 + shiftX, 34 + shiftY);
			l(79 + shiftX, 4 + shiftY);
			l(67 + shiftX, 9 + shiftY);
			l(59 + shiftX, 36 + shiftY);
			l(83 + shiftX, 52 + shiftY);
			l(87 + shiftX, 42 + shiftY);
			l(79 + shiftX, 34 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#5B4737' : '#202B2C';
			bp();
			m(57 + shiftX, 41 + shiftY);
			l(59 + shiftX, 36 + shiftY);
			l(69 + shiftX, 43 + shiftY);
			l(67 + shiftX, 54 + shiftY);
			l(61 + shiftX, 54 + shiftY);
			l(57 + shiftX, 41 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#815B4A' : '#202B2C';
			bp();
			m(73 + shiftX, 54 + shiftY);
			l(68 + shiftX, 50 + shiftY);
			l(67 + shiftX, 54 + shiftY);
			l(73 + shiftX, 54 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#A47C59' : '#202B2C';
			bp();
			m(90 + shiftX, 53 + shiftY);
			l(87 + shiftX, 42 + shiftY);
			l(83 + shiftX, 52 + shiftY);
			l(90 + shiftX, 53 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#C2A187' : '#202B2C';
			bp();
			m(82 + shiftX, 55 + shiftY);
			l(83 + shiftX, 52 + shiftY);
			l(90 + shiftX, 53 + shiftY);
			l(82 + shiftX, 55 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#9F785B' : '#202B2C';
			bp();
			m(95 + shiftX, 10 + shiftY);
			l(87 + shiftX, 29 + shiftY);
			l(79 + shiftX, 30 + shiftY);
			l(79 + shiftX, 4 + shiftY);
			l(95 + shiftX, 10 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#594537' : '#202B2C';
			bp();
			m(92 + shiftX, 17 + shiftY);
			l(98 + shiftX, 15 + shiftY);
			l(95 + shiftX, 19 + shiftY);
			l(92 + shiftX, 17 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#815B4A' : '#202B2C';
			bp();
			m(98 + shiftX, 12 + shiftY);
			l(98 + shiftX, 15 + shiftY);
			l(92 + shiftX, 17 + shiftY);
			l(93 + shiftX, 14 + shiftY);
			l(98 + shiftX, 12 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#A27F64' : '#202B2C';
			bp();
			m(95 + shiftX, 10 + shiftY);
			l(96 + shiftX, 12 + shiftY);
			l(93 + shiftX, 14 + shiftY);
			l(95 + shiftX, 10 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#A27F64' : '#202B2C';
			bp();
			m(101 + shiftX, 21 + shiftY);
			l(98 + shiftX, 15 + shiftY);
			l(95 + shiftX, 19 + shiftY);
			l(92 + shiftX, 17 + shiftY);
			l(93 + shiftX, 14 + shiftY);
			l(87 + shiftX, 29 + shiftY);
			l(101 + shiftX, 21 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#815B4A' : '#202B2C';
			bp();
			m(95 + shiftX, 32 + shiftY);
			l(99 + shiftX, 25 + shiftY);
			l(98 + shiftX, 23 + shiftY);
			l(87 + shiftX, 29 + shiftY);
			l(95 + shiftX, 32 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#594537' : '#202B2C';
			bp();
			m(101 + shiftX, 21 + shiftY);
			l(99 + shiftX, 25 + shiftY);
			l(98 + shiftX, 23 + shiftY);
			l(101 + shiftX, 21 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#C2A187' : '#202B2C';
			bp();
			m(104 + shiftX, 29 + shiftY);
			l(101 + shiftX, 23 + shiftY);
			l(96 + shiftX, 29 + shiftY);
			l(104 + shiftX, 29 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#9F785B' : '#202B2C';
			bp();
			m(96 + shiftX, 30 + shiftY);
			l(99 + shiftX, 32 + shiftY);
			l(103 + shiftX, 30 + shiftY);
			l(102 + shiftX, 29 + shiftY);
			l(96 + shiftX, 29 + shiftY);
			l(96 + shiftX, 30 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#594537' : '#202B2C';
			bp();
			m(104 + shiftX, 29 + shiftY);
			l(103 + shiftX, 30 + shiftY);
			l(102 + shiftX, 29 + shiftY);
			l(104 + shiftX, 29 + shiftY);
			cp();
			ctx.fill();
			ctx.restore();
		}
	}
};
