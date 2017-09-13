function Trampolines() {
	this.list = [];
}

Trampolines.prototype = {
	add: function(x) {
		var index, collision,
			position, start, end, convertedX = x - app.scene.camera.outPosition.x;

		if (this.list.length) {
			this.list[0].deactivate();
			this.list.length = 0;
		}

		index = this.searchIndex(convertedX);
		start = app.hills.points[index].position;
		end = app.hills.points[index + 1].position;
		position = new Vector(convertedX, start.y + ((convertedX - start.x) / (end.x - start.x)) * (end.y - start.y));

		collision = this.check(position);
		if (collision) {
			convertedX = collision - 90;
			index = this.searchIndex(convertedX);
			start = app.hills.points[index].position;
			end = app.hills.points[index + 1].position;
			position = new Vector(convertedX, start.y + ((convertedX - start.x) / (end.x - start.x)) * (end.y - start.y));
		}

		this.list.push(new Trampoline(position, index));
	},
	check: function(position) {
		var found = false, x = 0;
		app.objects.list.forEach(function(item) {
			if (item.position.distance(position) < (item.r + 90)) {
				found = true;
				x = item.position.x - item.halfWidth;
			}
		});
		return found && x;
	},
	searchIndex: function(x) {
		var found = false, i = app.ball.last;
		while (!found) {
			if (x <= app.hills.points[i].position.x) {
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
