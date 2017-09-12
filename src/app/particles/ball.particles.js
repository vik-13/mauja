function BallParticles() {
	this.particles = [];
	this.isActive = true;
}

BallParticles.prototype = {
	add: function(amount, r, position, velocity) {
		var i;
		for (i = 0; i < amount; i++) {
			this.particles.push(new BallJumpParticle(position, velocity, r));
		}
	},
	addForceParticle: function(position, r, mag) {
		var i, distance, angle;
		for (i = 0; i < mag; i++) {
			distance = r * Math.random();
			angle = 2 * Math.PI * Math.random();
			this.particles.push(new BallForceParticle(new Vector(position.x + .5 * distance * Math.sin(angle), position.y + distance * Math.cos(angle)), r));
		}
	},
	addTrampParticles: function() {

	},
	checkToDie: function() {
		if (!this.particles.length) {
			this.isActive = false;
		}
	},
	next: function() {
		var particlesToRemove = [];
		this.particles.forEach(function(particle) {
			particle.next();
			if (!particle.isActive) {
				particlesToRemove.push(particle);
			}
		}.bind(this));
		particlesToRemove.forEach(function(particle) {
			var index = this.particles.indexOf(particle);
			if (index !== -1) {
				this.particles.splice(index, 1);
			}
		}.bind(this));
		this.checkToDie();
	},
	render: function() {
		this.particles.forEach(function(particle) {
			if (particle.isActive) {
				particle.render();
			}
		});
	}
};
