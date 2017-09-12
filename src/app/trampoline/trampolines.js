function Trampolines() {
	this.list = [];
}

Trampolines.prototype = {
	add: function(x) {
		var index,
			trampoline;

		if (this.list.length) {
			this.list[0].deactivate();
			this.list.length = 0;
		}

		index = this.searchBestPosition(x);
		if (index !== -1) {
			trampoline = new Trampoline(index);
			this.list.push(trampoline);
		}
	},
	searchBestPosition: function(x) {
		var found = false, i = app.ball.last;
		while (!found) {
			if (x <= app.ball.position.x + app.scene.camera.outPosition.x) {
				found = true;
				i = -1;
			} else if (x <= (app.hills.points[i].position.x + app.scene.camera.outPosition.x)) {
				found = true;
				i--;
			} else {
				i++;
			}
		}
		return i;
	},
	next: function() {},
	render: function() {
		this.list.forEach(function(trampoline) {
			trampoline.render();
		});
	}
};
