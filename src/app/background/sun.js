function Sun() {
	this.position = new Vector();
	this.angle = Math.PI;
	this.speed = .002;
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
		this.position.apply(new Vector(app.size.x / 2 + 550 * Math.cos(this.angle),
			300 + 220 * Math.sin(this.angle)));
	},
	render: function() {
		ctx.save();
		ctx.translate(this.position.x, this.position.y);
		ctx.fillStyle = "rgb(253, 214, 49)";
		ctx.arc(0, 0, 30, 0, Math.PI * 2);
		ctx.fill();
		ctx.restore();
	}
};
