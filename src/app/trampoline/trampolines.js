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
		app.rocks.list.forEach(function(rock) {
			if (rock.position.distance(position) < (rock.r + 90)) {
				found = true;
				x = rock.position.x - rock.halfWidth;
			}
		});
		return found && x;
	},
	searchIndex: function(x) {
		var found = false, i = app.ball.last;
		while (!found) {
			console.log(x, app.hills.points[i].position.x);
			if (x <= app.hills.points[i].position.x) {
				found = true;
				i--;
			} else {
				i++;
			}
		}
		return i;
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
