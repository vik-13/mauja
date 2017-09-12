function Trampolines() {
	this.list = [];
}

Trampolines.prototype = {
	add: function(x) {
		var info,
			trampoline,
			position, start, end, convertedX = x - app.scene.camera.outPosition.x;

		if (this.list.length) {
			this.list[0].deactivate();
			this.list.length = 0;
		}

		info = this.searchBestPosition(convertedX);
		if (info.index !== -1) {
			if (info.collision) {
				position = app.hills.points[info.index].position.get();
			} else {
				start = app.hills.points[info.index].position;
				end = app.hills.points[info.index + 1].position;
				position = new Vector(convertedX, start.y + ((convertedX - start.x) / (end.x - start.x)) * (end.y - start.y));
			}
			console.log(position, info.index);
			trampoline = new Trampoline(position, info.index);
			this.list.push(trampoline);
		}
	},
	check: function(x, index, collide) {
		var start, end, position, collision = false;
		if (collide) {
			position = app.hills.points[index].position.get();
		} else {
			start = app.hills.points[index].position;
			end = app.hills.points[index + 1].position;
			position = new Vector(x, start.y + ((x - start.x) / (end.x - start.x)) * (end.y - start.y));
		}

		app.rocks.list.forEach(function(rock) {
			if (rock.position.distance(position) < 2 * rock.r) {
				collision = true;
			}
		});
		return collision;
	},
	searchBestPosition: function(x) {
		var found = false, i = app.ball.last, collision = false;
		while (!found) {
			if (collision) {
				i -= 1;
				if (!this.check(x, i, true)) {
					found = true;
				}
			} else if (x <= app.hills.points[i].position.x) {
				i -= 1;
				if (this.check(x, i)) {
					collision = true;
				} else {
					found = true;
				}
			} else {
				i++;
			}
		}
		return {index: i, collision: collision};
	},
	next: function() {},
	render: function() {
		this.list.forEach(function(trampoline) {
			trampoline.render();
		});
	}
};
