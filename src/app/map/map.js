window.map = (function() {
	//TODO: map.long: Should be rechecked
	var long = 4,
		toEnd = 3000,
		list = [],
		points = [],
		strips = [];

	function getBound(index) {
		return index ? (index === '-1' ? points[points.length - 1] : points[index]) : points;
	}

	function reset() {
		list.length = 0;
		points.length = 0;
	}

	function add() {
		list.push(new Hill(list[list.length - 1], !list[list.length - 1].glade && Math.random() < .4));
		addStrips();
		if (Math.random() <= .8) {
			objects.add(points.length - parseInt(Math.random() * 20) - 1);
		}
	}

	function addStrips() {
		var i;
		for(i = 20; i > 0; i = i - 8) {
			Math.random() < .5 && strips.push(new Strip(points[points.length - i].position, points[points.length - i].position.angle(points[points.length - i - 1].position)));
		}
	}

	function init() {
		var i;
		list.push(new StartHill());
		addStrips();
		list.push(new Hill(list[list.length - 1]));
		addStrips();
		for (i = 0; i < long - 2; i++) {
			add();
		}
	}

	function next() {
		if (list[list.length - 1].to.x - toEnd < app.ball.position.x) {
			add();
			checkToRemove();
		}
	}

	function checkToRemove() {
		list = list.filter(function(hill, index) {
			return list.length - index <= long;
		});
	}

	function render() {
		ctx.save();
		bp();
		ctx.fillStyle = '#E8EFEE';
		m(list[0].from.x, list[0].from.y);
		list.forEach(function(hill) {
			hill.render();
		});
		l(list[list.length - 1].to.x, list[list.length - 1].to.y + 2000);
		l(list[0].from.x, list[list.length - 1].to.y + 2000);
		l(list[0].from.x, list[0].from.y);
		ctx.fill();
		cp();
		ctx.restore();

		strips.forEach(function(strip) {
			strip.render();
		});

		ctx.save();
		ctx.globalAlpha = night;
		bp();
		ctx.fillStyle = 'rgb(21, 30, 30)';
		m(list[0].from.x, list[0].from.y);
		list.forEach(function(hill) {
			hill.render();
		});
		l(list[list.length - 1].to.x, list[list.length - 1].to.y + 2000);
		l(list[0].from.x, list[list.length - 1].to.y + 2000);
		l(list[0].from.x, list[0].from.y);
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
