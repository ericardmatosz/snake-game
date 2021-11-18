window.onload = function() {
    let stage = document.getElementById('stage');
    let ctx = stage.getContext('2d');
    document.addEventListener("keydown", keyPush)
    const vel = 1;
    var velX = velY = 0;
    var px = 10;
    var py = 15;
    var size = 20;
    var amount = 20;
    var appleX = appleY = 15;

    var trail = [];
    tail = 5;
    
    setInterval(play, 60)

    function play(){
        px += velX;
        py += velY;

        if(px < 0) 
            px = amount - 1

        if(px > amount - 1) 
            px = 0

        if(py < 0) 
            py = amount - 1

        if(py > amount - 1) 
            py = 0

        ctx.fillStyle = 'pink';
        ctx.fillRect(0,0, stage.width, stage.height);

        ctx.fillStyle = '#ff3333'
        ctx.fillRect(appleX * size, appleY * size, size,size);
        ctx.fillStyle = '#2eb82e'

        for (var i = 0; i < trail.length; i++) {
            ctx.fillRect(trail[i].x * size, trail[i].y * size, size, size);

            if(trail[i].x == px && trail[i].y == py){
                velX = velY = 0
                tail = 5;
            }
        }

        trail.push({x: px, y: py});

        while (trail.length > tail) {
            trail.shift();
        }

        if(appleX == px && appleY == py) {
            tail++;
            appleX = Math.floor(Math.random() * amount)
            appleY = Math.floor(Math.random() * amount)
        }
    }

    function keyPush(event) {
        switch (event.keyCode) {
            case 37:
                velX = - vel
                velY = 0
            break;
            case 38:
                velX = 0
                velY = - vel
            break;
            case 39:
                velX = vel
                velY = 0
            break;
            case 40:
                velX = 0
                velY = vel
            break;
        }
    }
}

// 37 is left 
// 38 is up
// 39 is right
// 40 is down