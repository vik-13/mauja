function Strip(position, angle) {
	this.position = position;
	this.angle = angle;
	console.log(angle);
}

Strip.prototype = {
	render: function() {
		ctx.save();
		ctx.translate(this.position.x, this.position.y);
		ctx.rotate(this.angle);
		ctx.fillStyle = 'rgb(213, 226, 223)';
		bp();
		m(0, 0);
		l(20, 95);
		l(-50, 300);
		l(-500, 1000);
		l(-400, 1100);
		l(30, 290);
		l(50, 90);
		l(0, 0);
		ctx.fill();
		ctx.restore();
	}
};
