window.weather = (function() {
	var list = [false],
		start = +new Date(),
		duration = 5000;

	function calcNext() {
		var next = parseInt(2 * Math.random());
		start = +new Date();
		list = list.filter(function(item) {
			return item;
		});
		if (!next) {
			list.push(false);
			duration = 20000 + parseInt(20000 * Math.random());
		} else if (next === 1) {
			list.push(new Snow());
			duration = 20000 + parseInt(50000 * Math.random());
		} else {
			list.push(new Rain());
			duration = 20000 + parseInt(50000 * Math.random());
		}
	}

	function next() {
		list = list.filter(function(item, index) {
			item && item.next(index < list.length - 1);
			return item === false || item.active;
		});
		if (start + duration <= +new Date()) {
			calcNext();
		}
	}

	function render() {
		list.forEach(function(item) {
			ctx.save();
			item && item.render();
			ctx.restore();
		});
	}

	return {
		next: next,
		render: render
	};
})();
