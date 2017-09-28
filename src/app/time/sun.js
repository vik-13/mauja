window.sun = (function() {
	var position,
		angle = Math.PI,
		speed = .001,
		time = {
			day: true,
			part: Math.cos(angle)
		},
		moonPosition;

	function get() {
		return position;
	}

	function init() {
		position = new Vector();
	}

	function next() {
		angle += speed;
		if (angle > 2 * Math.PI) {
			angle -= (2 * Math.PI);
		}
		time.part = Math.cos(angle);
		time.day = (angle >= Math.PI) && angle <= 2 * Math.PI;
		position.apply(new Vector(app.size.x / 2 + (app.size.x * .8 / 2) * Math.cos(angle),
			300 + 250 * Math.sin(angle)));
		moonPosition = new Vector(app.size.x / 2 + (app.size.x * .8 / 2) * Math.cos(angle + Math.PI),
			300 + 250 * Math.sin(angle + Math.PI))
	}

	function render() {
		ctx.save();
		ctx.translate(position.x, position.y);
		ctx.scale(ratio, ratio);
		ctx.fillStyle = "rgb(253, 214, 49)";
		ctx.arc(0, 0, 30, 0, Math.PI * 2);
		ctx.fill();
		ctx.restore();

		ctx.save();
		ctx.translate(moonPosition.x, moonPosition.y);
		ctx.scale(ratio, ratio);
		ctx.miterLimit=4;
		ctx.fillStyle="#FCFC65";
		bp();
		m(68,55);
		ctx.bezierCurveTo(45,58,25,42,23,19);
		ctx.bezierCurveTo(22,12,23,6,26,0);
		ctx.bezierCurveTo(9,5,-1,22,0,41);
		ctx.bezierCurveTo(2,62,22,78,43,76);
		ctx.bezierCurveTo(57,74,68,66,74,54);
		ctx.bezierCurveTo(72,55,70,55,68,55);
		cp();
		ctx.fill();
		ctx.restore();
	}

	return {
		time: time,
		get: get,
		init: init,
		next: next,
		render: render
	};
})();
