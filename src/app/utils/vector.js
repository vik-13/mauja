function Vector(x, y) {
	this.x = x || 0;
	this.y = y || 0;
}

Vector.prototype = {
	add: function(vector) {
		this.x += vector.x;
		this.y += vector.y;
		return this;
	},
	angle: function(vector) {
		return (typeof vector === 'undefined') ? Math.atan2(this.y, this.x) :
			Math.atan2(vector.y, vector.x) - Math.atan2(this.y, this.x);
	},
	apply: function(vector) {
		this.x = vector.x;
		this.y = vector.y;
		return this;
	},
	distance: function(vector){
		return Math.hypot(this.x - vector.x, this.y - vector.y);
	},
	div: function(num) {
		this.x /= num;
		this.y /= num;
		return this;
	},
	dot: function(vector) {
		return this.mag() * vector.mag() * Math.cos(this.angle(vector));
	},
	get: function() {
		return new Vector(this.x, this.y);
	},
	mag: function() {
		return Math.hypot(this.x, this.y);
	},
	mult: function(num) {
		this.x *= num;
		this.y *= num;
		return this;
	},
	normalize: function() {
		var length = this.mag();
		if (length > 0) {
			this.div(length);
		}
		return this;
	},
	perpendicular: function() {
		var x = this.x;
		this.x = this.y;
		this.y = - x;
		return this;
	},
	round: function() {
		this.x = Math.round(this.x);
		this.y = Math.round(this.y);
		return this;
	},
	sub: function(vector) {
		this.x -= vector.x;
		this.y -= vector.y;
		return this;
	},
	normal: function(vector) {
		return new Vector(this.x - vector.x, this.y - vector.y).perpendicular().normalize();
	}
};
