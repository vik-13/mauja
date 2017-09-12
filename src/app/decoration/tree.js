function Tree(position) {
	this.position = position;
	this.back = Math.random() < .5;
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
			m(40.5, 142.429);
			l(52.5, 142.429);
			ctx.quadraticCurveTo(52.5, 142.429, 52.5, 142.429);
			l(52.5, 163.429);
			ctx.quadraticCurveTo(52.5, 163.429, 52.5, 163.429);
			l(40.5, 163.429);
			ctx.quadraticCurveTo(40.5, 163.429, 40.5, 163.429);
			l(40.5, 142.429);
			ctx.quadraticCurveTo(40.5, 142.429, 40.5, 142.429);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#528279' : '#202B2C';
			bp();
			m(46.5, 0);
			l(67.25, 41.429);
			l(56.25, 37.929);
			l(76.5, 82.679);
			l(64.75, 80.929);
			l(94, 154.429);
			l(46.5, 146.501);
			l(0, 154.429);
			l(26.857, 81.201);
			l(15.527, 84.033);
			l(34.97, 38.607);
			l(24.759, 42.41);
			l(46.5, 0);
			cp();
			ctx.fill();
			ctx.restore();
		}
	}
};
