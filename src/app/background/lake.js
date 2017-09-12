function Lake() {
	this.scale = app.size.x / 1964;
	this.position = new Vector(0, 550);
	this.speed = .04;
}

// lake: w=1964 px, h=792px
Lake.prototype = {
	next: function() {
		this.position.sub(new Vector(this.speed * app.ball.velocity.x, 0));
		if (this.position.x <= -app.size.x) {
			this.position.x = 0;
		}
	},
	r: function() {
		var i;
		for (i = 0; i < 2; i++) {
			ctx.save();

			ctx.translate(this.position.x + i * app.size.x, this.position.y);
			ctx.scale(this.scale, this.scale);

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
};
