const header = document.getElementById("header");
const ctx = header.getContext('2d');
header.width = window.innerWidth;
header.height = window.innerHeight;

let particlesArray;


let mouse = {
    x: null,
    y: null,
    radius: (header.height/80) * (header.width/80)

    }
    window.addEventListener('mousemove',
    function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
    }
);


class Praticle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
alert("kkkkk")
    }


draw() {
    ctx.beginPath();
    ctx.arc( this.x,  this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = '#8C5523';
    ctx.fill();

}

update() {
    if (this.x > header.width || this.x < 0 ) {
        this.directionX = -this.directionX;
    }

    
    if (this.y > header.height || this.y < 0) {
        this.directionY = -this.directionY;
    }

    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx*dx + dy*dy);

    if (distance < mouse.radius + this.size){
        if(mouse.x < this.x && this.x < header.width - this.size * 10){
            this.x += 10;

        }
        if(mouse.x > this.x && this.x > this.size * 10){
            this.x -= 10;

        }
        if(mouse.y < this.y && this.y < header.height - this.size * 10){
            this.y += 10;

        }
        if(mouse.y > this.y && this.y > this.size * 10){
            this.y -= 10;

        }
    }

    this.x += this.directionX;
    this.y += this.directionY;
    this.draw();

}   


}

function init() {
    particlesArray = [];
    let numberOfParticles = (header.height * header.width) / 9000;
    for (let i = 0; i < numberOfParticles; i++) {

        let size = (Math.random() * 5) + 1;
        let x = (Math,random() * ((innerWidth - size * 2) - (size * 2)) + size *2);
        let y = (Math,random() * ((innerHeight - size * 2) - (size * 2)) + size *2);
        let directionX = (Math.random() * 5) - 2.5;
        let directionY = (Math.random() * 5) - 2.5;
        let color = '#8C5523';

        particlesArray.push(new Praticle(x, y, directionX, directionY, size, color));

    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,innerWidth, innerHeight);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }
}

init();
animate();

