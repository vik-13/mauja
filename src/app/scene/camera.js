window.camera = (function() {
	var shift, position, outPosition, velocity, acceleration;

	function getFinal() {
		return outPosition;
	}

	function next() {
		shift = new Vector(app.size.x * .12, (app.size.y / ratio) * .5);
		acceleration.apply(app.ball.position.get().sub(position));
		acceleration.x *= .1;
		acceleration.y *= .07;

		velocity.add(acceleration);
		position.apply(velocity);
		outPosition.apply(new Vector(-position.x + shift.x, -position.y  + shift.y));
	}

	function reset() {
		shift = new Vector(app.size.x * .12, (app.size.y / ratio) * .5);
		position = new Vector();
		outPosition = new Vector();
		velocity = new Vector();
		acceleration = new Vector();
	}

	return {
		getFinal: getFinal,
		next: next,
		reset: reset
	};
})();
