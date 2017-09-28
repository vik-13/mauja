window.mountains = (function() {
	function init() {
		mMiddle.init();
		mFront.init();
		lake.init();
	}

	function next() {
		mBack.next();
		mMiddle.next();
		mFront.next();
		lake.next();
	}

	function render() {
		mBack.render();
		mMiddle.render();
		mFront.render();
		lake.render();
	}

	return {
		init: init,
		next: next,
		render: render
	}
})();
