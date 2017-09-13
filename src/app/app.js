;(function(document) {
	window.app = {
		nColor: 'rgb(21, 30, 30)'
	};

	function start() {
		app.canvas = document.getElementById('app');

		window.ctx = app.canvas.getContext('2d');
		window.l = ctx.lineTo.bind(ctx);
		window.m = ctx.moveTo.bind(ctx);
		window.bp = ctx.beginPath.bind(ctx);
		window.cp = ctx.closePath.bind(ctx);

		window.res = {x: 1280, y: 800};
		app.size = {x: window.innerWidth, y: window.innerHeight};
		window.ratio = app.size.x / res.x;
		app.canvas.width = app.size.x;
		app.canvas.height = app.size.y;

		app.gravity = (new Gravity()).gravity;
		app.scene = new Scene();
		app.trampolines = new Trampolines();
		app.objects = new Objects();
		app.hills = new Hills();
		app.ball = new Ball();
		app.particles = new Particles();
		app.decoration = new Decoration();

		app.hills.generate();

		lifeCycle();

		document.addEventListener('mousedown', function(event) {
			if (app.ball.isDead) {
				reset()
			} else if (app.ball.isReadyToStart) {
				app.ball.activate();
			} else {
				app.trampolines.add(event.screenX / ratio);
			}
		});

		document.addEventListener('touchstart', function(event) {
			event.preventDefault();
			if (app.ball.isDead) {
				reset()
			} else if (app.ball.isReadyToStart) {
				app.ball.activate();
			} else {
				app.trampolines.add(event.touches[0].screenX / ratio);
			}
		});
	}

	function reset() {
		app.scene.camera.reset();
		app.ball.reset();
		app.hills.reset();
		app.trampolines.reset();
		app.objects.reset();
		app.particles.reset();
		app.decoration.reset();

		app.hills.generate();
	}

	function lifeCycle() {
		next();
		render();

		requestAnimationFrame(lifeCycle);
	}

	function next() {
		window.night = !app.scene.sun.day && Math.abs(app.scene.sun.part) >= .8 ?
			((1 - Math.abs(app.scene.sun.part)) / .2) : !app.scene.sun.day ? 1 : 0;
		window.sunset = Math.abs(app.scene.sun.part) > .8 ? ((Math.abs(app.scene.sun.part) - .8) / .2) : 0;
		app.scene.next();
	}

	function render() {
		app.scene.render();
	}

	function resize() {
		app.size.x = window.innerWidth;
		app.size.y = window.innerHeight;

		app.canvas.width = app.size.x;
		app.canvas.height = app.size.y;
	}

	window.onload = start;
	window.onresize = resize;
})(document);
