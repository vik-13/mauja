// w=256 px h=134 px
function House(position) {
	this.position = position;
	this.back = false;
}

House.prototype = {
	render: function () {
		var i;
		for (i = 0; i < 2; i++) {
			ctx.save();
			ctx.globalAlpha = !i ? 1 : night;
			ctx.translate(this.position.x, this.position.y);
			ctx.miterLimit = 4;
			ctx.fillStyle = !i ? '#7C3232' : '#202B2C';
			bp();
			m(0, 76);
			l(0, 99);
			l(28, 103);
			l(52, 104);
			l(73, 121);
			l(105, 125);
			l(115, 134);
			l(151, 124);
			l(185, 124);
			l(206, 121);
			l(220, 125);
			l(244, 120);
			l(256, 121);
			l(256, 81);
			l(127, 81);
			l(67, 0);
			l(0, 76);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#D5E2DF' : 'rgb(59, 74, 80)';
			bp();
			m(196, 0);
			l(255, 81);
			l(127, 81);
			l(67, 0);
			l(196, 0);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#7C3232' : '#202B2C';
			bp();
			m(185, 52);
			l(171, 37);
			l(165, 38);
			l(165, 19);
			l(185, 19);
			l(185, 52);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#D5E2DF' : '#FCFC65';
			bp();
			m(59, 74);
			l(45, 74);
			l(45, 89);
			l(59, 91);
			l(59, 74);
			cp();
			ctx.fill();

			ctx.fillStyle = !i ? '#D5E2DF' : '#FCFC65';
			bp();
			m(63, 75);
			l(63, 92);
			l(78, 95);
			l(78, 75);
			l(63, 75);
			cp();
			ctx.fill();
			ctx.restore();
		}
	}
};
