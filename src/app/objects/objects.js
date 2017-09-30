window.objects = (function() {
	var list = [];

	function add(index) {
		var r = Math.random();
		if (r < .25) {
			list.push(new Rock(index));
		} else if (r < .5) {
			list.push(new Fox(index));
		} else if (r < .75) {
			list.push(new Bear(index));
		} else {
			list.push(new Girl(index));
		}
	}

	function get() {
		return list;
	}

	function next() {

	}

	function render() {
		list.forEach(function(item) {
			item.render();
		});
	}

	function reset() {
		list.length = 0;
	}

	return {
		add: add,
		get: get,
		next: next,
		render: render,
		reset: reset
	};
})();
