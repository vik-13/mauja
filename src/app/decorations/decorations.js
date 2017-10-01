window.decorations = (function() {
	var list = [];

	function addCustom(decor) {
		list.push(decor);
	}

	function addHouse(position) {
		list.push(new House(position));
	}

	function addTree(position, front) {
		list.push(new Tree(position, front || false));
	}

	function reset() {
		list.length = 0;
	}

	function next() {
		list = list.filter(function(decor) {
			return decor.position.x + camera.getFinal().x >= -300;
		});
	}

	function render(back) {
		//TODO: Rendering decorators: It should be refactored...
		list.forEach(function(decor) {
			if (back && decor.back) {
				decor.render();
			} else if (!back && !decor.back) {
				decor.render();
			}
		});
	}

	return {
		addCustom: addCustom,
		addHouse: addHouse,
		addTree: addTree,
		reset: reset,
		next: next,
		render: render
	};
})();
