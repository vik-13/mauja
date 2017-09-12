function BallForceParticle(position, r) {
	this.isActive = true;
	this.mass = 0.1 + 0.05 * Math.random();
	this.r = 1 + parseInt(10 * Math.random());
	this.position = position.get();
	this.velocity = new Vector();
	this.acceleration = new Vector(0, 0);
	this.startTime = (new Date()).getTime();
	this.lifeTime = r * 10;
}

BallForceParticle.prototype = {
	check: function() {
		if ((new Date()).getTime() - this.startTime >= this.lifeTime) {
			this.isActive = false;
		}
	},
	calculateFriction: function() {
		return this.velocity.get().normalize().mult(0.01);
	},
	next: function() {
		this.acceleration.add(this.calculateFriction());
		this.acceleration.add(app.gravity.get().mult(this.mass));

		this.velocity.add(this.acceleration);
		this.position.add(this.velocity);
		this.acceleration.mult(0);
		this.check();
		this.color = app.scene.sun.day ? '#E8EFEE' : 'rgb(21, 30, 30)';
	},
	render: function() {
		var opacity = 1 - (((new Date()).getTime() - this.startTime) / this.lifeTime);

		ctx.save();
		ctx.beginPath();
		ctx.rect(this.position.x, this.position.y, this.r, this.r);
		//ctx.arc(this.position.x, this.position.y, this.r, 0, 2 * Math.PI);
		ctx.globalAlpha = opacity >= 0 ? opacity : 0;
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.closePath();
		ctx.restore();
	}
};
