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

		// ctx.font = "20px Arial";
		// ctx.fillStyle = "white";
		// ctx.fillText('speed: ' + parseInt(app.ball.velocity.mag()), 10, 20);
		//
		// ctx.font = "20px Arial";
		// ctx.fillStyle = "white";
		// ctx.fillText('distance: ' + app.ball.last, 10, 50);
		//
		// ctx.font = "20px Arial";
		// ctx.fillStyle = "white";
		// ctx.fillText('mass: ' + app.ball.mass.toFixed(2), 10, 80);

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

		ctx.save();
		var fontSize = (app.size.x / ratio) * .1;
		ctx.translate((app.size.x / ratio) - ((app.size.x / ratio) * .07), 200);
		ctx.font = fontSize + 'px Courier New';
		ctx.textAlign = 'right';
		ctx.fillStyle = "white";
		ctx.fillText('MAUJA', 0, 0);

		ctx.font = (fontSize * .26) + 'px Courier New';
		ctx.textAlign = 'right';
		ctx.fillStyle = "white";
		ctx.fillText('lost snowball story', 0, 42);

		ctx.font = (fontSize * .26) + 'px Courier New';
		ctx.textAlign = 'right';
		ctx.fillStyle = "white";
		ctx.fillText('Click to start', 0, 150);
		ctx.restore();

		ctx.restore();

		ctx.save();
		ctx.globalAlpha = .2 * sunset;
		ctx.fillStyle = 'rgb(253, 111, 34)';
		ctx.fillRect(0, 0, app.size.x, app.size.y);
		ctx.restore();

		if (app.ball.isDead) {
			ctx.save();
			fontSize = app.size.x * .1;
			ctx.translate(app.size.x - (app.size.x * .07), 100);

			ctx.font = (fontSize * .26) + 'px Courier New';
			ctx.textAlign = 'right';
			ctx.fillStyle = "white";
			ctx.fillText('Your score is: ' + (app.ball.last * 10) + 'm', 0, 0);

			ctx.font = (fontSize * .26) + 'px Courier New';
			ctx.textAlign = 'right';
			ctx.fillStyle = "white";
			ctx.fillText('Click anywhere to go home', 0, 60);
			ctx.restore();
		}
	}
};
