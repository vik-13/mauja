function Ball() {
	this.isReadyToStart = true;
	this.isDead = false;
	this.r = 10;
	this.mass = .2;
	this.speedLimit = 10 + (this.r - 10) * .2;
	this.insideSnow = 5;

	this.last = 1;

	this.onGround = false;

	this.position = new Vector(200, 400);
	this.velocity = new Vector(0, 0);
	this.acceleration = new Vector();

	this.shadowAngle = 0;

	this.angle = 0;
	this.aVelocity = 0;
	this.aAcceleration = 0;

	this.startTime = (new Date()).getTime();
	this.deadTime = 0;
}

Ball.prototype = {
	reset: function() {
		this.r = 10;
		this.mass = .2;
		this.speedLimit = 10 + (this.r - 10) * .2;
		this.last = 1;
		this.onGround = false;
		this.isDead = false;
		this.isReadyToStart = true;
		this.position = new Vector(200, 400);
		this.velocity = new Vector(0, 0);
	},
	activate: function() {
		this.position = new Vector(230, 210);
		this.velocity = new Vector(8, -8);
		this.isReadyToStart = false;
	},
	deactivate: function() {

	},
	next: function() {
		var friction;

		if (!this.isDead && !this.isReadyToStart) {
			this.speedLimit = 10 + (this.r - 10) * .2;
			friction = this.calculateFriction();

			this.acceleration.add(friction);
			this.acceleration.add(gravity.get().mult(this.mass));

			this.velocity.add(this.acceleration);

			this.itemCollision();
			this.collision();

			if (this.onGround) {
				this.aAcceleration = (this.velocity.mag() / (2 * this.r * Math.PI)) * (2 * Math.PI);
			} else {
				this.aAcceleration = this.aAcceleration <= 0 ? 0 : this.aAcceleration - .001;
			}
			this.aVelocity = this.aAcceleration;
			this.angle += this.aVelocity;

			if (this.velocity.mag() > this.speedLimit) {
				this.velocity.div(this.velocity.mag()).mult(this.speedLimit);
			}

			this.position.add(this.velocity);
			this.acceleration.mult(0);

			particles.addForce(this.position, this.r, parseInt(this.velocity.mag()));

			this.r = this.r >= 70 ? 70 : this.r + 0.01;
			this.mass = .2 + (this.r / 700);
			this.shadowAngle = sun.get().get().sub(this.position.get().add(camera.getFinal())).angle() + 1;
		} else {
			//TODO: implementing dead
		}
	},
	calculateFriction: function() {
		return this.velocity.get().normalize().mult(-0.015);
	},
	checkTrampoline: function() {
		var currentTramp = false;
		trampolines.get().forEach(function(tramp) {
			if (tramp.points[0].position.x <= this.position.x && tramp.points[1].position.x >= this.position.x) {
				currentTramp = tramp;
			}
		}.bind(this));
		return currentTramp;
	},
	itemCollision: function() {
		objects.get().forEach(function(item) {
			if (item.position.distance(this.position) <= item.r + this.r) {
				this.isDead = true;
				this.deadTime = (new Date()).getTime();
				particles.addRockCollision(this.position, this.r, 100);
				this.velocity.apply(new Vector());
				this.deactivate();
			}
		}.bind(this));
	},
	collision: function() {
		var detectedFirst = false, index = this.last, normal,
			points = map.getBound(), start, end, middle, reflection, distance, angle,
			tramp = this.checkTrampoline();
		while (!detectedFirst) {
			if (this.position.x < points[index - 1].position.x && !tramp) {
				this.last--;
				index = this.last;
			} else if (this.position.x > points[index - 1].position.x && this.position.x <= points[index].position.x || tramp) {
				detectedFirst = true;
				this.last = index;

				if (tramp) {
					start = tramp.points[0].position.get();
					end = tramp.points[1].position.get();
				} else {
					start = (new Vector()).apply(points[index - 1].position);
					end = (new Vector()).apply(points[index].position);
				}
				//TODO: Collision detection: Should be rechecked...
				if (start.y - this.position.y <= this.r + 3 || end.y - this.position.y <= this.r + 3) {
					middle = new Vector((start.x + end.x) / 2, (start.y + end.y) / 2);
					distance = Math.abs((end.y - start.y) * this.position.x -
						(end.x - start.x) * this.position.y +
						end.x * start.y -
						end.y * start.x) /
						Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2));
					this.onGround = distance <= this.r;
					if (distance <= this.r - this.insideSnow) {
						normal = end.normal(middle);

						angle = normal.angle(this.velocity.get().normalize());
						if (angle > Math.abs(Math.PI / 2)) {
							reflection = this.velocity.get().sub(normal.get().mult(1.3 * this.velocity.get().dot(normal)));
							if (this.velocity.y > 7) {
								particles.addDrop(this.position.get().add(new Vector(0, this.r)), this.r, 30);
							}
							if (tramp) {
								this.velocity.apply(end.get().sub(start).normalize().mult(app.ball.velocity.mag() * 1.01));
								} else {
								this.velocity.apply(reflection);
							}
						}
					}
				}
			} else {
				index++;
			}
		}
	},
	render: function() {
		var shiftX = 59, shiftY = 59;
		if (!this.isDead && !this.isReadyToStart) {
			ctx.save();
			ctx.translate(this.position.x, this.position.y);
			ctx.rotate(this.shadowAngle);
			ctx.scale(this.r / 58, this.r / 58);

			ctx.miterLimit = 4;
			ctx.fillStyle = '#E8EFEE';
			bp();
			ctx.arc(59 - shiftX, 59 - shiftY, 58, 0, 2 * Math.PI);
			cp();
			ctx.fill();

			ctx.fillStyle = '#9BC3C9';
			bp();
			m(16.111 - shiftX, 18.398 - shiftY);
			l(15.876 - shiftX, 18.651 - shiftY);
			ctx.bezierCurveTo(15.952 - shiftX, 18.57 - shiftY, 16.034 - shiftX, 18.494 - shiftY, 16.111 - shiftX, 18.413 - shiftY);
			l(16.111 - shiftX, 18.398 - shiftY);
			cp();
			ctx.fill();

			bp();
			m(9.343 - shiftX, 27.02 - shiftY);
			ctx.bezierCurveTo(3.431 - shiftX, 36.195 - shiftY, 0 - shiftX, 47.12 - shiftY, 0 - shiftX, 58.846 - shiftY);
			ctx.bezierCurveTo(0 - shiftX, 91.339 - shiftY, 26.341 - shiftX, 117.679 - shiftY, 58.833 - shiftX, 117.679 - shiftY);
			ctx.bezierCurveTo(75.842 - shiftX, 117.679 - shiftY, 91.157 - shiftX, 110.452 - shiftY, 101.898 - shiftX, 98.912 - shiftY);
			l(54.666 - shiftX, 105.346 - shiftY);
			l(40 - shiftX, 95.346 - shiftY);
			l(14 - shiftX, 79.16 - shiftY);
			l(8.333 - shiftX, 43.346 - shiftY);
			l(16.11 - shiftX, 18.413 - shiftY);
			ctx.bezierCurveTo(16.033 - shiftX, 18.494 - shiftY, 15.952 - shiftX, 18.569 - shiftY, 15.875 - shiftX, 18.651 - shiftY);
			l(15.689 - shiftX, 18.851 - shiftY);
			ctx.bezierCurveTo(14.192 - shiftX, 20.465 - shiftY, 12.781 - shiftX, 22.161 - shiftY, 11.471 - shiftX, 23.936 - shiftY);
			ctx.bezierCurveTo(10.731 - shiftX, 24.94 - shiftY, 10.021 - shiftX, 25.968 - shiftY, 9.343 - shiftX, 27.02 - shiftY);
			cp();
			ctx.fill();
			ctx.restore();

			ctx.save();
			ctx.translate(this.position.x, this.position.y);
			ctx.scale(this.r / 58, this.r / 58);

			ctx.rotate(this.angle);
			ctx.miterLimit = 4;

			ctx.fillStyle = '#9BC3C9';
			bp();
			m(117.235 - shiftX, 65.775 - shiftY);
			l(103.88 - shiftX, 82.735 - shiftY);
			l(91.64 - shiftX, 107.831 - shiftY);
			l(91.64 - shiftX, 107.895 - shiftY);
			ctx.bezierCurveTo(99.64 - shiftX, 102.353 - shiftY, 106.936 - shiftX, 94.598 - shiftY, 111.716 - shiftX, 84.938 - shiftY);
			ctx.bezierCurveTo(114.78 - shiftX, 78.743 - shiftY, 116.465 - shiftX, 72.269 - shiftY, 117.235 - shiftX, 65.775 - shiftY);
			cp();
			ctx.fill();

			bp();
			m(69.169 - shiftX, 87.373 - shiftY);
			l(52.163 - shiftX, 91.204 - shiftY);
			l(40.121 - shiftX, 88.512 - shiftY);
			l(18.458 - shiftX, 73.97 - shiftY);
			l(13.674 - shiftX, 37.116 - shiftY);
			l(11.639 - shiftX, 80.245 - shiftY);
			l(29.334 - shiftX, 86.144 - shiftY);
			l(52.894 - shiftX, 95.853 - shiftY);
			l(69.169 - shiftX, 87.373 - shiftY);
			cp();
			ctx.fill();

			bp();
			m(94.784 - shiftX, 37.4 - shiftY);
			l(63.655 - shiftX, 13.898 - shiftY);
			l(36.403 - shiftX, 8.258 - shiftY);
			l(56.326 - shiftX, 5.178 - shiftY);
			l(70.878 - shiftX, 9.579 - shiftY);
			l(81.893 - shiftX, 24.421 - shiftY);
			l(94.784 - shiftX, 37.4 - shiftY);
			cp();
			ctx.fill();

			bp();
			m(49.875 - shiftX, 102.751 - shiftY);
			l(77.383 - shiftX, 95.85 - shiftY);
			l(49.137 - shiftX, 109.323 - shiftY);
			l(31.639 - shiftX, 97.732 - shiftY);
			l(49.875 - shiftX, 102.751 - shiftY);
			cp();
			ctx.fill();
			ctx.restore();

			// Night layout
			ctx.save();
			ctx.globalAlpha = night;
			ctx.translate(this.position.x, this.position.y);
			ctx.scale(this.r / 58, this.r / 58);
			ctx.fillStyle = 'rgb(21, 30, 30)';
			bp();
			ctx.arc(59 - shiftX, 59 - shiftY, 59, 0, 2 * Math.PI);
			cp();
			ctx.fill();
			ctx.restore();
		}
	}
};
