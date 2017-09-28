window.mMiddle = (function() {
    var scale, position, speed = .005;

    function init() {
		scale = app.size.x / 1599;
		position = new Vector(0, 270);
    }

    function next() {
		scale = app.size.x / 1599;
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
			ctx.fillStyle = "#B2CED6";
			bp();
			m(1561, 86);
			l(1550, 54);
			l(1543, 75);
			l(1533, 69);
			l(1532, 69);
			l(1525, 38);
			l(1518, 61);
			l(1449, 22);
			l(1391, 57);
			l(1381, 29);
			l(1370, 70);
			l(1343, 87);
			l(1285, 55);
			l(1222, 94);
			l(1210, 63);
			l(1204, 88);
			l(1197, 69);
			l(1184, 117);
			l(1178, 121);
			l(1168, 94);
			l(1158, 133);
			l(1147, 140);
			l(1116, 123);
			l(1103, 79);
			l(1092, 109);
			l(1019, 68);
			l(978, 93);
			l(969, 69);
			l(961, 104);
			l(947, 112);
			l(896, 83);
			l(879, 25);
			l(867, 59);
			l(854, 10);
			l(843, 53);
			l(750, 0);
			l(657, 57);
			l(646, 25);
			l(634, 72);
			l(625, 77);
			l(613, 43);
			l(600, 93);
			l(580, 105);
			l(570, 76);
			l(561, 104);
			l(547, 95);
			l(534, 48);
			l(522, 82);
			l(419, 23);
			l(365, 56);
			l(355, 26);
			l(344, 69);
			l(318, 85);
			l(304, 48);
			l(289, 103);
			l(274, 112);
			l(227, 86);
			l(181, 114);
			l(81, 58);
			l(34, 87);
			l(22, 53);
			l(9, 102);
			l(0, 108);
			l(0, 1193);
			l(1599, 1193);
			l(1599, 108);
			l(1561, 86);
			cp();
			m(1203, 79);
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
