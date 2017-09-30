function Snow() {
	this.active = true;
	this.list = [];
	this.last = 0;
	this.posibility = .05 + (.4 * Math.random());
}

Snow.prototype = {
	next: function(finished) {
		var newFlake;
		if (!finished) {
			newFlake = {
				active: true,
				acceleration: new Vector(),
				velocity: new Vector(),
				position: new Vector((1.5 * app.size.x) * Math.random(), -50),
				r: 2 + parseInt(10 * Math.random())
			};
			if (Math.random() < this.posibility) {
				newFlake.m = .01;
				this.list.push(newFlake);
			}
		} else {
			if (!this.list.length) {
				this.active = false;
			}
		}
		this.list.forEach(function(flake) {
			flake.acceleration.add(flake.velocity.get().normalize().mult(0.001));
			flake.acceleration.add(gravity.get().mult(flake.m * flake.r * .1));
			flake.velocity.add(flake.acceleration);
			flake.position.add(flake.velocity);
			flake.position.sub(new Vector(app.ball.velocity.x * .025 * flake.r, 0));
			flake.acceleration.mult(0);
			this.check(flake);
		}.bind(this));
		this.checkToRemove();
		this.color = 'rgb(' + this.getColor(232, 21) + ',' + this.getColor(239, 30) + ',' + this.getColor(238, 30) + ')';
	},
	check: function(flake) {
		flake.active = flake.position.x >= 0 && flake.position.y <= app.size.y;
	},
	checkToRemove: function() {
		this.list = this.list.filter(function(flake) {
			return flake.active;
		});
	},
	getColor: function(from, to) {
		return Math.round(from + (to - from) * night);
	},
	render: function() {
		ctx.fillStyle = this.color;
		this.list.forEach(function(flake) {
			bp();
			ctx.rect(flake.position.x - (flake.r / 2), flake.position.y - (flake.r / 2), flake.r, flake.r);
			ctx.fill();
			cp();
		}.bind(this));
	}
};
