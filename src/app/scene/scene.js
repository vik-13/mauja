window.scene = (function() {
	function init() {
		sun.init();
		camera.reset();
	}

	function next() {
		mountains.next();
		sun.next();

		app.hills.next();
		app.ball.next();
		app.objects.next();
		app.trampolines.next();
		app.particles.next();
		app.decoration.next();

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
		app.decoration.render(true);
		app.hills.render();
		app.objects.render();
		app.ball.render();
		app.trampolines.render();
		app.particles.render();
		app.decoration.render(false);

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
