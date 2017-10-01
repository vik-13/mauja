function Tree(position, front) {
	this.position = position;
	this.back = front ? false : Math.random() < .5;
}

Tree.prototype = {
	render: function() {
		var i;
		for (i = 0; i < 2; i++) {
			ctx.save();
			ctx.globalAlpha = !i ? 1 : night;
			ctx.translate(this.position.x, this.position.y);
			ctx.miterLimit = 4;
			ctx.fillStyle = !i ? '#4F443B' : '#202B2C';
			bp();
			m(40, 142);
			l(52, 142);
			l(52, 163);
			l(40, 163);
			l(40, 142);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#528279' : '#202B2C';
			bp();
			m(46.5, 0);
			l(67.25, 41.5);
			l(56.25, 38);
			l(76.5, 82.5);
			l(64.75, 81);
			l(94, 154.5);
			l(46.5, 146.5);
			l(0, 154.5);
			l(26.857, 81.2);
			l(15.5, 84);
			l(34.97, 38.5);
			l(24.759, 42.5);
			l(46.5, 0);
			cp();
			ctx.fill();
			ctx.restore();
		}
	}
};
