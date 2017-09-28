window.lake = (function() {
	var scale, position, speed = .04;

	function init() {
		scale = app.size.x / 1964;
		position = new Vector(0, 550);
	}

	function next() {
		scale = app.size.x / 1964;
		position.sub(new Vector(speed * app.ball.velocity.x, 0));
		position.x = position.x <= -app.size.x ? 0 : position.x;
	}

	function render() {
		var i;
		for (i = 0; i < 2; i++) {
			ctx.save();

			ctx.translate(position.x + i * app.size.x, position.y);
			ctx.scale(scale, scale);

			ctx.miterLimit=4;
			ctx.fillStyle="#B2CED6";
			bp();
			m(0,0);
			l(211,0);
			l(127.5,26);
			l(1286.518,26);
			l(1185,0);
			l(1964,0);
			l(1964,792);
			l(0,793);
			l(0,0);
			cp();
			ctx.fill();
			ctx.restore();
		}
	}

	return {
		init: init,
		next: next,
		render: render
	};
})();
