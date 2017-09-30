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

		window.pause = false;
		window.res = {x: 1280, y: 800};
		app.size = {x: window.innerWidth, y: window.innerHeight};
		window.ratio = app.size.x / res.x;
		app.canvas.width = app.size.x;
		app.canvas.height = app.size.y;

		window.gravity = new Vector(0, .8);
		app.ball = new Ball();
		app.texts = new Texts();

		scene.init();

		mountains.init();

		map.init();

		lifeCycle();

		document.addEventListener('keydown', function(event) {
			if (event.keyCode === 80) {
				window.pause = !window.pause;
			}
		});

		document.addEventListener('mousedown', function(event) {
			if (app.ball.isDead) {
				reset()
			} else if (app.ball.isReadyToStart) {
				app.ball.activate();
			} else {
				trampolines.add(event.pageX / ratio);
			}
		});

		document.addEventListener('touchstart', function(event) {
			event.preventDefault();
			if (app.ball.isDead) {
				reset()
			} else if (app.ball.isReadyToStart) {
				app.ball.activate();
			} else {
				trampolines.add(event.touches[0].pageX / ratio);
			}
		});
	}

	function reset() {
		camera.reset();
		app.ball.reset();
		map.reset();
		trampolines.reset();
		objects.reset();
		particles.reset();
		decorations.reset();

		map.init();
	}

	function lifeCycle() {
		if (!pause) {
			next();
		}
		render();

		requestAnimationFrame(lifeCycle);
	}

	function next() {
		window.night = !sun.time.day && Math.abs(sun.time.part) >= .8 ?
			((1 - Math.abs(sun.time.part)) / .2) : !sun.time.day ? 1 : 0;
		window.sunset = Math.abs(sun.time.part) > .8 ? ((Math.abs(sun.time.part) - .8) / .2) : 0;
		scene.next();
	}

	function render() {
		scene.render();
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
