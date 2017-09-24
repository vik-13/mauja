function Scene() {
	this.camera = new Camera();

	this.mb = new MountainBack();
	this.mm = new MountainMid();
	this.mf = new MountainFront();

	this.lake = new Lake();
	this.sun = new Sun();
}

Scene.prototype = {
	next: function() {
		this.mb.next();
		this.mm.next();
		this.mf.next();
		this.lake.next();
		this.sun.next();

		app.hills.next();
		app.ball.next();
		app.objects.next();
		app.trampolines.next();
		app.particles.next();
		app.decoration.next();

		this.camera.next(app.ball);
	},
	render: function() {
		var gradient = ctx.createLinearGradient(0, 0, 0, app.size.y);
		gradient.addColorStop(0, '#B9DCEC');
		gradient.addColorStop(.5, '#E4EBD8');
		ctx.fillStyle = gradient;
		ctx.fillRect(0, 0, app.size.x, app.size.y);

		this.sun.render();

		this.mb.r();
		this.mm.r();
		this.mf.r();

		this.lake.r();

		ctx.save();
		ctx.globalAlpha = .6 * night;
		ctx.fillStyle = 'rgb(21, 30, 30)';
		ctx.fillRect(0, 0, app.size.x, app.size.y);
		ctx.restore();

		ctx.save();
		ctx.scale(ratio, ratio);
		ctx.translate(this.camera.outPosition.x, this.camera.outPosition.y);
		app.decoration.render(true);
		app.hills.render();
		app.objects.render();
		app.ball.render();
		app.trampolines.render();
		app.particles.render();
		app.decoration.render(false);

		app.texts.welcome();

		ctx.restore();

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
};
