function distance(point, t) {
	return point.from.get().mult(Math.pow(1 - t, 3))
		.add(point.c1.get().mult(3 * t * Math.pow(1 - t, 2)))
		.add(point.c2.get().mult(3 * Math.pow(t, 2) * (1 - t)))
		.add(point.to.get().mult(Math.pow(t, 3)));
}
