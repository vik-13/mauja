function Sun() {
	this.position = new Vector();
	this.angle = 0;
	this.speed = .001;
	this.day = true;
	this.part = Math.cos(this.angle);
}

Sun.prototype = {
	next: function() {
		this.angle += this.speed;
		if (this.angle > 2 * Math.PI) {
			this.angle -= (2 * Math.PI);
		}
		this.part = Math.cos(this.angle);
		this.day = (this.angle >= Math.PI) && this.angle <= 2 * Math.PI;
		this.position.apply(new Vector(app.size.x / 2 + (app.size.x * .8 / 2) * Math.cos(this.angle),
			300 + 250 * Math.sin(this.angle)));
		this.moonPosition = new Vector(app.size.x / 2 + (app.size.x * .8 / 2) * Math.cos(this.angle + Math.PI),
			300 + 250 * Math.sin(this.angle + Math.PI))
	},
	render: function() {
		ctx.save();
		ctx.translate(this.position.x, this.position.y);
		ctx.scale(ratio, ratio);
		ctx.fillStyle = "rgb(253, 214, 49)";
		ctx.arc(0, 0, 30, 0, Math.PI * 2);
		ctx.fill();
		ctx.restore();

		ctx.save();
		ctx.translate(this.moonPosition.x, this.moonPosition.y);
		ctx.scale(ratio, ratio);
		ctx.miterLimit=4;
		ctx.fillStyle="#FCFC65";
		bp();
		m(68,55);
		ctx.bezierCurveTo(45,58,25,42,23,19);
		ctx.bezierCurveTo(22,12,23,6,26,0);
		ctx.bezierCurveTo(9,5,-1,22,0,41);
		ctx.bezierCurveTo(2,62,22,78,43,76);
		ctx.bezierCurveTo(57,74,68,66,74,54);
		ctx.bezierCurveTo(72,55,70,55,68,55);
		cp();
		ctx.fill();
		ctx.restore();
	}
};
