window.trampolines = (function() {
	var list = [];

	function reset() {
		list.length = 0;
	}

	function add(x) {
		var index, collision,
			position, start, end, convertedX = x - camera.getFinal().x;

		if (list.length) {
			list[0].deactivate();
			list.length = 0;
		}

		index = searchIndex(convertedX);
		start = map.getBound(index).position;
		end = map.getBound(index + 1).position;
		position = new Vector(convertedX, start.y + ((convertedX - start.x) / (end.x - start.x)) * (end.y - start.y));

		collision = check(position);
		if (collision) {
			convertedX = collision - 90;
			index = searchIndex(convertedX);
			start = map.getBound(index).position;
			end = map.getBound(index + 1).position;
			position = new Vector(convertedX, start.y + ((convertedX - start.x) / (end.x - start.x)) * (end.y - start.y));
		}

		list.push(new Trampoline(position, index));
	}

	function check(position) {
		var found = false, x = 0;
		objects.get().forEach(function(item) {
			if (item.position.distance(position) < (item.r + 90)) {
				found = true;
				x = item.position.x - item.halfWidth;
			}
		});
		return found && x;
	}

	function get() {
		return list;
	}

	function searchIndex(x) {
		var found = false, i = app.ball.last;
		while (!found) {
			if (x <= map.getBound(i).position.x) {
				found = true;
				i--;
			} else {
				i++;
			}
		}
		return i;
	}

	function next() {

	}

	function render() {
		list.forEach(function(trampoline) {
			trampoline.render();
		});
	}

	return {
		reset: reset,
		add: add,
		check: check,
		get: get,
		searchIndex: searchIndex,
		next: next,
		render: render
	};
})();
