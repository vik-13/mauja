function BallJumpParticle(position, velocity, r) {
	this.isActive = true;
	this.mass = 0.1 + 0.05 * Math.random();
	this.r = 1 + parseInt(10 * Math.random());
	this.position = position.get().add(new Vector(((2 * r) / 3) * Math.random(), ((2 * r) / 3) + (r / 2) * Math.random()));
	this.velocity = this.calculateVelocity();
	this.acceleration = new Vector(0, 0);
	this.startTime = (new Date()).getTime();
	this.lifeTime = 300;
}

BallJumpParticle.prototype = {
	check: function() {
		if ((new Date()).getTime() - this.startTime >= this.lifeTime) {
			this.isActive = false;
		}
	},
	calculateVelocity: function() {
		var velocity, normal,
			points = app.hills.points,
			wayDirection;

		normal = new Vector(points[app.ball.last + 1].x - points[app.ball.last].x, points[app.ball.last + 1].y - points[app.ball.last].y);
		normal.perpendicular().normalize();
		wayDirection = new Vector(points[app.ball.last].x - points[app.ball.last + 1].x, points[app.ball.last].y - points[app.ball.last + 1].y);

		velocity = wayDirection.get().add(normal.mult(4)).normalize();

		return velocity;
	},
	calculateFriction: function() {
		return this.velocity.get().normalize().mult(-.01);
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
		ctx.globalAlpha = opacity;
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.closePath();
		ctx.restore();
	}
};
