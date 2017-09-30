window.scene = (function() {
	function init() {
		sun.init();
		camera.reset();
	}

	function next() {
		mountains.next();
		sun.next();

		map.next();
		app.ball.next();
		objects.next();
		trampolines.next();
		particles.next();
		decorations.next();

		weather.next();

		camera.next();
	}

	function render() {
		var gradient = ctx.createLinearGradient(0, 0, 0, app.size.y);
		gradient.addColorStop(0, '#B9DCEC');
		gradient.addColorStop(.5, '#E4EBD8');
		ctx.fillStyle = gradient;
		ctx.fillRect(0, 0, app.size.x, app.size.y);

		sun.render();

		mountains.render();

		ctx.save();
		ctx.globalAlpha = .6 * night;
		ctx.fillStyle = 'rgb(21, 30, 30)';
		ctx.fillRect(0, 0, app.size.x, app.size.y);
		ctx.restore();

		ctx.save();
		//ctx.scale(ratio * (1 - app.ball.velocity.mag() * .02), ratio * (1 - app.ball.velocity.mag() * .02));
		ctx.scale(ratio, ratio);
		ctx.translate(camera.getFinal().x, camera.getFinal().y);

		decorations.render(true);

		map.render();
		objects.render();
		app.ball.render();
		trampolines.render();
		particles.render();

		decorations.render(false);

		app.texts.welcome();

		ctx.restore();

		weather.render();

		ctx.save();
		ctx.globalAlpha = .2 * sunset;
		ctx.fillStyle = 'rgb(253, 111, 34)';
		ctx.fillRect(0, 0, app.size.x, app.size.y);
		ctx.restore();

		if (app.ball.isDead) {
			app.texts.dead();
		}
		if (!app.ball.isDead && !app.ball.isReadyToStart) {
			app.texts.score()
		}
	}

	return {
		init: init,
		next: next,
		render: render
	};
})();
