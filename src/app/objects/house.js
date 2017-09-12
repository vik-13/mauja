// w=256 px h=134 px
function House() {

}

House.prototype = {
    r: function () {
        ctx.save();
        ctx.strokeStyle = "rgba(0,0,0,0)";
        ctx.miterLimit = 4;
        ctx.save();
        ctx.save();
        ctx.fillStyle = "#7C3232";
        ctx.beginPath();
        ctx.moveTo(0, 76);
        ctx.lineTo(0, 99);
        ctx.lineTo(28, 103);
        ctx.lineTo(52, 104);
        ctx.lineTo(73, 121);
        ctx.lineTo(105, 125);
        ctx.lineTo(115, 134);
        ctx.lineTo(151, 124);
        ctx.lineTo(185, 124);
        ctx.lineTo(206, 121);
        ctx.lineTo(220, 125);
        ctx.lineTo(244, 120);
        ctx.lineTo(256, 121);
        ctx.lineTo(256, 81);
        ctx.lineTo(127, 81);
        ctx.lineTo(67, 0);
        ctx.lineTo(0, 76);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
        ctx.save();
        ctx.fillStyle = "#D5E2DF";
        ctx.beginPath();
        ctx.moveTo(196, 0);
        ctx.lineTo(255, 81);
        ctx.lineTo(127, 81);
        ctx.lineTo(67, 0);
        ctx.lineTo(196, 0);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
        ctx.save();
        ctx.fillStyle = "#7C3232";
        ctx.beginPath();
        ctx.moveTo(185, 52);
        ctx.lineTo(171, 37);
        ctx.lineTo(165, 38);
        ctx.lineTo(165, 19);
        ctx.lineTo(185, 19);
        ctx.lineTo(185, 52);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
        ctx.save();
        ctx.save();
        ctx.fillStyle = "#D5E2DF";
        ctx.beginPath();
        ctx.moveTo(59, 74);
        ctx.lineTo(45, 74);
        ctx.lineTo(45, 89);
        ctx.lineTo(59, 91);
        ctx.lineTo(59, 74);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
        ctx.save();
        ctx.fillStyle = "#D5E2DF";
        ctx.beginPath();
        ctx.moveTo(63, 75);
        ctx.lineTo(63, 92);
        ctx.lineTo(78, 95);
        ctx.lineTo(78, 75);
        ctx.lineTo(63, 75);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
        ctx.save();
    }
};
