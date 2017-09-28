window.mFront = (function() {
	var scale, position, speed = .04;

	function init() {
		scale = app.size.x / 1860;
		position = new Vector(0, 370);
	}

	function next() {
		scale = app.size.x / 1860;
		position.sub(new Vector(speed * app.ball.velocity.x, 0));
		position.x = position.x <= -app.size.x ? 0 : position.x;
	}

	function render() {
		var i;
		for (i = 0; i < 2; i++) {
			ctx.save();

			ctx.translate(position.x + i * app.size.x, position.y);
			ctx.scale(scale, scale);

			ctx.strokeStyle = "rgba(0,0,0,0)";
			ctx.miterLimit = 4;
			ctx.fillStyle = "#A6C0CC";
			bp();
			m(1668,0);
			l(1523,83);
			l(1443,42);
			l(1270,145);
			l(1230,122);
			l(1231,122);
			l(1231,89);
			l(1256,89);
			l(1200,55);
			l(1159,80);
			l(1049,16);
			l(857,130);
			l(661,15);
			l(441,147);
			l(233,25);
			l(156,72);
			l(127,53);
			l(112,62);
			l(112,58);
			l(114,58);
			l(114,56);
			l(108,56);
			l(110,45);
			l(106,36);
			l(107,43);
			l(105,50);
			l(107,56);
			l(102,56);
			l(102,58);
			l(103,58);
			l(103,67);
			l(83,80);
			l(93,80);
			l(93,109);
			l(45,137);
			l(0,113);
			l(0,1050);
			l(1860,1049);
			l(1860,111);
			l(1668,0);
			cp();
			m(1209,101);
			l(1197,101);
			l(1197,92);
			l(1209,92);
			l(1209,101);
			cp();
			ctx.fill();
			ctx.stroke();
			ctx.restore();
		}
	}

	return {
		init: init,
		next: next,
		render: render
	};
})();
