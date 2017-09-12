var SVGIcons = {
    // w=74.61 px h=76.41 px
    "moon": {
        draw: function(ctx){
            ctx.save();
            ctx.strokeStyle="rgba(0,0,0,0)";
            ctx.miterLimit=4;
            ctx.save();
            ctx.fillStyle="#C6A620";
            ctx.beginPath();
            ctx.moveTo(68.285,55.714);
            ctx.bezierCurveTo(45.95099999999999,58.17,25.854999999999997,42.056,23.398999999999994,19.722);
            ctx.bezierCurveTo(22.635,12.777,23.669,6.049,26.125,0);
            ctx.bezierCurveTo(9.334,5.978,-1.794,22.869,0.239,41.357);
            ctx.bezierCurveTo(2.6149999999999998,62.958,22.051000000000002,78.543,43.651999999999994,76.167);
            ctx.bezierCurveTo(57.489999999999995,74.645,68.84899999999999,66.116,74.609,54.507000000000005);
            ctx.bezierCurveTo(72.566,55.065,70.456,55.475,68.285,55.714);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
            ctx.save();
        }
    }
};