function Fox(index) {
	this.position = new Vector(app.hills.points[index].position.x, app.hills.points[index].position.y);
	this.r = 30;
	this.angle = app.hills.points[index].normal.angle() + (Math.PI / 2);
}

Fox.prototype = {
	render: function() {
		var shiftX = -56, shiftY = -23;
		var i;

		for (i = 0; i < 2; i++) {
			ctx.save();
			ctx.globalAlpha = !i ? 1 : night;
			ctx.translate(this.position.x, this.position.y);
			ctx.rotate(this.angle);

			ctx.miterLimit = 4;
			ctx.fillStyle = "#C2C2C2";
			bp();
			m(shiftX, 17.226 + shiftY);
			l(22.184 + shiftX, 16.966 + shiftY);
			l(12.613 + shiftX, 20.314 + shiftY);
			l(shiftX, 17.226 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#E3E3E3";
			bp();
			m(23.914 + shiftX, 31.1 + shiftY);
			l(22.184 + shiftX, 16.966 + shiftY);
			l(12.613 + shiftX, 20.314 + shiftY);
			l(23.914 + shiftX, 31.1 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#E3642A";
			bp();
			m(24.486 + shiftX, 13.366 + shiftY);
			l(shiftX, 17.226 + shiftY);
			l(22.184 + shiftX, 16.966 + shiftY);
			l(24.486 + shiftX, 13.366 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#E77B3B";
			bp();
			m(20.649 + shiftX, 10.194 + shiftY);
			l(24.486 + shiftX, 13.366 + shiftY);
			l(14.951 + shiftX, 14.869 + shiftY);
			l(20.649 + shiftX, 10.194 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#E3642A";
			bp();
			m(10.939 + shiftX, 7.962 + shiftY);
			l(14.951 + shiftX, 14.869 + shiftY);
			l(20.649 + shiftX, 10.194 + shiftY);
			l(16.296 + shiftX, 7.181 + shiftY);
			l(10.939 + shiftX, 7.962 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#CE4121";
			bp();
			m(8.297 + shiftX, 4.241 + shiftY);
			l(10.939 + shiftX, 7.962 + shiftY);
			l(16.296 + shiftX, 7.181 + shiftY);
			l(8.297 + shiftX, 4.241 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#E65827";
			bp();
			m(shiftX, 17.226 + shiftY);
			l(5.804 + shiftX, 13.841 + shiftY);
			l(10.38 + shiftX, 10.604 + shiftY);
			l(14.951 + shiftX, 14.869 + shiftY);
			l(shiftX, 17.226 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#CE4121";
			bp();
			m(11.904 + shiftX, 9.6 + shiftY);
			l(10.38 + shiftX, 10.604 + shiftY);
			l(5.804 + shiftX, 13.841 + shiftY);
			l(10.939 + shiftX, 7.962 + shiftY);
			l(11.904 + shiftX, 9.6 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#CE4121";
			bp();
			m(14.951 + shiftX, 14.768 + shiftY);
			ctx.fill();

			ctx.fillStyle = "#D24C23";
			bp();
			m(14.951 + shiftX, 14.869 + shiftY);
			l(10.38 + shiftX, 10.604 + shiftY);
			l(11.904 + shiftX, 9.6 + shiftY);
			l(14.951 + shiftX, 14.869 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#E77B3B";
			bp();
			m(43.14 + shiftX, 13.394 + shiftY);
			l(22.184 + shiftX, 16.966 + shiftY);
			l(24.486 + shiftX, 13.366 + shiftY);
			l(43.14 + shiftX, 13.394 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#E3642A";
			bp();
			m(23.914 + shiftX, 31.1 + shiftY);
			l(43.14 + shiftX, 13.394 + shiftY);
			l(22.184 + shiftX, 16.966 + shiftY);
			l(23.914 + shiftX, 31.1 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#E65827";
			bp();
			m(53.726 + shiftX, 23.44 + shiftY);
			l(43.14 + shiftX, 13.394 + shiftY);
			l(23.914 + shiftX, 31.1 + shiftY);
			l(53.726 + shiftX, 23.44 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#E77B3B";
			bp();
			m(66.301 + shiftX, 8.334 + shiftY);
			l(53.726 + shiftX, 23.44 + shiftY);
			l(43.14 + shiftX, 13.394 + shiftY);
			l(66.301 + shiftX, 8.334 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#E65827";
			bp();
			m(63.684 + shiftX, 26.605 + shiftY);
			l(66.301 + shiftX, 8.334 + shiftY);
			l(53.726 + shiftX, 23.44 + shiftY);
			l(63.684 + shiftX, 26.605 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#E3642A";
			bp();
			m(74.71 + shiftX, 23.44 + shiftY);
			l(66.301 + shiftX, 8.334 + shiftY);
			l(63.684 + shiftX, 26.605 + shiftY);
			l(65.594 + shiftX, 27.235 + shiftY);
			l(74.71 + shiftX, 23.44 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#D54022";
			bp();
			m(13.813 + shiftX, 37.057 + shiftY);
			l(53.726 + shiftX, 23.44 + shiftY);
			l(23.914 + shiftX, 31.1 + shiftY);
			l(13.813 + shiftX, 37.057 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#A03017";
			bp();
			m(16.799 + shiftX, 38.787 + shiftY);
			l(13.813 + shiftX, 37.057 + shiftY);
			l(34.125 + shiftX, 30.127 + shiftY);
			l(16.799 + shiftX, 38.787 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#210D08";
			bp();
			m(8.511 + shiftX, 43.587 + shiftY);
			l(13.813 + shiftX, 37.057 + shiftY);
			l(16.799 + shiftX, 38.787 + shiftY);
			l(8.511 + shiftX, 43.587 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#A03017";
			bp();
			m(43.726 + shiftX, 38.592 + shiftY);
			l(42.525 + shiftX, 27.261 + shiftY);
			l(34.442 + shiftX, 30.019 + shiftY);
			l(43.726 + shiftX, 38.592 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#210D08";
			bp();
			m(41.215 + shiftX, 44.368 + shiftY);
			l(43.726 + shiftX, 38.592 + shiftY);
			l(39.375 + shiftX, 34.574 + shiftY);
			l(41.215 + shiftX, 44.368 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#D54022";
			bp();
			m(53.726 + shiftX, 23.44 + shiftY);
			l(59.678 + shiftX, 35.681 + shiftY);
			l(63.684 + shiftX, 26.605 + shiftY);
			l(53.726 + shiftX, 23.44 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#A03017";
			bp();
			m(61.316 + shiftX, 39.252 + shiftY);
			l(63.684 + shiftX, 26.605 + shiftY);
			l(59.678 + shiftX, 35.681 + shiftY);
			l(61.316 + shiftX, 39.252 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#210D08";
			bp();
			m(54.991 + shiftX, 44.61 + shiftY);
			l(61.316 + shiftX, 39.252 + shiftY);
			l(59.678 + shiftX, 35.681 + shiftY);
			l(54.991 + shiftX, 44.61 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#D54022";
			bp();
			m(80.216 + shiftX, 33.411 + shiftY);
			l(74.71 + shiftX, 23.44 + shiftY);
			l(65.594 + shiftX, 27.235 + shiftY);
			l(80.216 + shiftX, 33.411 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#A03017";
			bp();
			m(83.342 + shiftX, 30.249 + shiftY);
			l(80.216 + shiftX, 33.411 + shiftY);
			l(74.71 + shiftX, 23.44 + shiftY);
			l(83.342 + shiftX, 30.249 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#210D08";
			bp();
			m(83.751 + shiftX, 43.457 + shiftY);
			l(83.342 + shiftX, 30.249 + shiftY);
			l(80.216 + shiftX, 33.411 + shiftY);
			l(83.751 + shiftX, 43.457 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#E77B3B";
			bp();
			m(82.932 + shiftX, 8.595 + shiftY);
			l(66.301 + shiftX, 8.334 + shiftY);
			l(84.979 + shiftX, 21.952 + shiftY);
			l(82.932 + shiftX, 8.595 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#E3642A";
			bp();
			m(102.131 + shiftX, 15.664 + shiftY);
			l(84.979 + shiftX, 21.952 + shiftY);
			l(82.932 + shiftX, 8.595 + shiftY);
			l(102.131 + shiftX, 15.664 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#D54022";
			bp();
			m(102.875 + shiftX, 23.849 + shiftY);
			l(102.131 + shiftX, 15.664 + shiftY);
			l(84.979 + shiftX, 21.952 + shiftY);
			l(102.875 + shiftX, 23.849 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#A03017";
			bp();
			m(111.358 + shiftX, 14.101 + shiftY);
			l(102.131 + shiftX, 15.664 + shiftY);
			l(102.875 + shiftX, 23.849 + shiftY);
			l(111.358 + shiftX, 14.101 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#D54022";
			bp();
			m(108.567 + shiftX, 5.916 + shiftY);
			l(111.358 + shiftX, 14.101 + shiftY);
			l(102.131 + shiftX, 15.664 + shiftY);
			l(108.567 + shiftX, 5.916 + shiftY);
			cp();
			ctx.fill();

			ctx.fillStyle = "#E3642A";
			bp();
			m(94.615 + shiftX, shiftY);
			l(102.131 + shiftX, 15.664 + shiftY);
			l(108.567 + shiftX, 5.916 + shiftY);
			l(94.615 + shiftX, shiftY);
			cp();
			ctx.fill();
			ctx.restore();
		}
	}
};
