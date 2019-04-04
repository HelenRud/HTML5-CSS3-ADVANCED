window.addEventListener("load", init, false);
      
        function init() {
            var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
            var y=50;
            var x=70;
            for (let i=0; i<10; i++) {
                context.beginPath();
                context.moveTo(50, y);
                context.lineTo(270, y);
                context.stroke();
                context.moveTo(x, 30);
                context.lineTo(x, 250);
                context.stroke();
                y += 20;
                x += 20;
            }
        }