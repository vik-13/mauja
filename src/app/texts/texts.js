function Texts() {

}

Texts.prototype = {
	welcome: function() {
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
	},
	score: function() {
		ctx.save();
		ctx.font = '24px Courier New';
		ctx.textAlign = 'left';
		ctx.fillStyle = "white";
		ctx.fillText('Score: ' + app.ball.last + 'm', 10, 30);
		ctx.restore();
	},
	dead: function() {
		ctx.save();
		ctx.translate(app.size.x - (app.size.x * .07), 70);

		ctx.font = (app.size.x * .026) + 'px Courier New';
		ctx.textAlign = 'right';
		ctx.fillStyle = "white";
		ctx.fillText('Your score is: ' + app.ball.last + 'm', 0, 0);

		ctx.font = (app.size.x * .026) + 'px Courier New';
		ctx.textAlign = 'right';
		ctx.fillStyle = "white";
		ctx.fillText('Click to start again', 0, 60);
		ctx.restore();
	}
};
