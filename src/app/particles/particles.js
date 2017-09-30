window.particles = (function() {
	var list = [];

	function reset() {
		list.length = 0;
	}

	function addForce(position, r, amount) {
		var i, distance, angle;
		for (i = 0; i < amount; i++) {
			distance = r * Math.random();
			angle = 2 * Math.PI * Math.random();
			list.push(new Particle(0.1 + 0.05 * Math.random(),
				3 + parseInt((r / 2) * Math.random()),
				new Vector(position.x - (r / 2) + distance * Math.sin(angle), position.y + distance * Math.cos(angle)), new Vector(), 300, '#E8EFEE'));
		}
	}

	function addRockCollision(position, r, amount) {
		var i, distance, angle;
		for (i = 0; i < amount; i++) {
			distance = r * Math.random();
			angle = 2 * Math.PI * Math.random();
			list.push(new Particle(0.1 + 0.05 * Math.random(),
				3 + parseInt((r / 2) * Math.random()),
				new Vector(position.x + distance * Math.sin(angle), position.y + distance * Math.cos(angle)),
				new Vector(distance * Math.sin(angle), distance * Math.cos(angle)).normalize().mult(5 * Math.random()),
				1000 + 1000 * Math.random(), '#E8EFEE'));
		}
	}

	function addDrop(position, r, amount) {
		var i, distance, angle;
		for (i = 0; i < amount; i++) {
			distance = r * Math.random();
			angle = 2 * Math.PI * Math.random();
			list.push(new Particle(0.1 + 0.05 * Math.random(),
				3 + parseInt((r / 2) * Math.random()),
				position,
				new Vector(distance * Math.sin(angle), distance * Math.cos(angle)).normalize().mult(5 * Math.random()),
				500 + 500 * Math.random(), '#E8EFEE'));
		}
	}

	function next() {
		list = list.filter(function(particle) {
			particle.next();
			return particle.isActive;
		});
	}

	function render() {
		list.forEach(function(particle) {
			particle.render();
		});
	}

	return {
		reset: reset,
		addForce: addForce,
		addRockCollision: addRockCollision,
		addDrop: addDrop,
		next: next,
		render: render
	};
})();
