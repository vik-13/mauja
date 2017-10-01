window.map = (function() {
	//TODO: map.long: Should be rechecked
	var long = 4,
		toEnd = 3000,
		list = [],
		points = [];

	function getBound(index) {
		return index ? (index === '-1' ? points[points.length - 1] : points[index]) : points;
	}

	function reset() {
		list.length = 0;
		points.length = 0;
	}

	function add() {
		list.push(new Hill(list[list.length - 1], !list[list.length - 1].glade && Math.random() < .4));
		if (Math.random() <= .8) {
			objects.add(points.length - parseInt(Math.random() * 20) - 1);
		}
	}

	function init() {
		var i;
		list.push(new StartHill());
		list.push(new Hill(list[list.length - 1]));
		for (i = 0; i < long - 2; i++) {
			add();
		}
	}

	function next() {
		if (list[list.length - 1].to.x - toEnd < app.ball.position.x) {
			add();
		}
	}

	function render() {
		var i,
			start = list[list.length - long],
			end = list[list.length - 1];

		ctx.save();
		bp();
		ctx.fillStyle = '#E8EFEE';
		m(start.from.x, start.from.y);
		for (i = list.length - long; i < list.length; i++) {
			list[i].render();
		}
		l(end.to.x, end.to.y + 2000);
		l(start.from.x, end.to.y + 2000);
		l(start.from.x, start.from.y);
		ctx.fill();
		cp();
		ctx.restore();

		ctx.save();
		ctx.globalAlpha = night;
		bp();
		ctx.fillStyle = 'rgb(21, 30, 30)';
		m(start.from.x, start.from.y);
		for (i = list.length - long; i < list.length; i++) {
			list[i].render();
		}
		l(end.to.x, end.to.y + 2000);
		l(start.from.x, end.to.y + 2000);
		l(start.from.x, start.from.y);
		ctx.fill();
		cp();
		ctx.restore();
	}

	return {
		getBound: getBound,
		add: add,
		init: init,
		reset: reset,
		next: next,
		render: render
	};
})();
