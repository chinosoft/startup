var startX = 20;
        var startY = 100;
        
        var canvas = document.getElementById('myCanvas'); 
        var ctx = canvas.getContext('2d'); 
        
        var moveRect = setInterval(animate, 30);
        
        function animate() {

            if (startX < 580)
            {
                ctx.fillStyle = 'red';
                ctx.beginPath(); 
                ctx.rect(startX, startY, 100, 100);
                ctx.fillStyle = "lightblue"; 
                ctx.fill();
                startX++;
            }
            
        }
      