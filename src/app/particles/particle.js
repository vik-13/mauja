function Particle(mass, r, position, velocity, lifeTime, color) {
	this.isActive = true;
	this.mass = mass;
	this.r = r;
	this.position = position.get();
	this.velocity = velocity.get();
	this.acceleration = new Vector();
	this.startTime = (new Date()).getTime();
	this.lifeTime = lifeTime;
	this.color = color;
}

Particle.prototype = {
	check: function() {
		if ((new Date()).getTime() - this.startTime >= this.lifeTime) {
			this.isActive = false;
		}
	},
	calculateFriction: function() {
		return this.velocity.get().normalize().mult(0.001);
	},
	next: function() {
		this.acceleration.add(this.calculateFriction());
		this.acceleration.add(app.gravity.get().mult(this.mass));

		this.velocity.add(this.acceleration);
		this.position.add(this.velocity);
		this.acceleration.mult(0);
		this.check();
		this.color = night !== 1 ? '#E8EFEE' : 'rgb(21, 30, 30)';
	},
	render: function() {
		var opacity = 1 - (((new Date()).getTime() - this.startTime) / this.lifeTime);

		ctx.save();
		ctx.globalAlpha = opacity >= 0 ? opacity : 0;
		bp();
		ctx.rect(this.position.x - (this.r / 2), this.position.y - (this.r / 2), this.r, this.r);
		//ctx.arc(this.position.x, this.position.y, this.r, 0, 2 * Math.PI);
		ctx.fillStyle = this.color;
		ctx.fill();
		cp();
		ctx.restore();
	}
};
