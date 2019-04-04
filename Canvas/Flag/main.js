window.addEventListener("load", init, false);
function init(){
    var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
            context.fillStyle = 'red';
            context.beginPath();
            context.moveTo(100, 100);
            context.bezierCurveTo(200, 150, 250, 30, 400, 100);
            context.lineTo(400, 300);
            context.bezierCurveTo (250, 230, 200, 350, 100, 300);
            context.closePath();
            // context.shadowInset = true;
            context.shadowBlur = 15;
            context.shadowColor = "#000";

            var gradient = context.createLinearGradient(100, 100, 400, 100);
           
            gradient.addColorStop(0, "red");
            gradient.addColorStop(0.25, "red");
            gradient.addColorStop(0.26, "white");
            gradient.addColorStop(0.75, "white");
            gradient.addColorStop(0.76, "red");
            gradient.addColorStop(1, "red");
            context.fillStyle = gradient;
            context.fill();

            context.beginPath();
            context.shadowBlur = 0;
            context.moveTo(250, 110);
            context.lineTo(260, 130);
            context.lineTo(270, 120);
            context.lineTo(260, 160);
            context.lineTo(275, 140);
            context.lineTo(277, 147);
            context.lineTo(287, 140);
            context.lineTo(284, 155);
            context.lineTo(290, 157);
            context.lineTo(270, 180);
            context.lineTo(275, 190);
            context.lineTo(251, 185);
            context.lineTo(251, 220);
            context.lineTo(249, 220);
            context.lineTo(249, 185);
            context.lineTo(228, 192);
            context.lineTo(235, 180);
            context.lineTo(215, 160);
            context.lineTo(225, 158);
            context.lineTo(220, 142);
            context.lineTo(228, 143);
            context.lineTo(229, 135);
            context.lineTo(243, 155);
            context.lineTo(237, 123);
            context.lineTo(245, 133);
            context.closePath();
            context.stroke();
            context.fillStyle = 'red';
            context.fill();
        
}