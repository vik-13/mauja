function Camera() {
	this.shift = new Vector(app.size.x * .12, (app.size.y / ratio) * .5);
	this.position = new Vector();
	this.outPosition = new Vector();
	this.velocity = new Vector();
	this.acceleration = new Vector();
}

Camera.prototype = {
	next: function(ball) {
		var diff = ball.position.get().sub(this.position);
		this.acceleration.apply(diff).mult(.1);

		this.velocity.add(this.acceleration);
		this.position.apply(this.velocity);
		this.outPosition.apply(new Vector(-this.position.x + this.shift.x, -this.position.y  + this.shift.y));
	}
};
