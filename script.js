function random(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

class Ball {
    static get colors() {
        return [
            'yellow', 'red', 'green', 'blue', 'orange', 'gold', 'purple', 'darkRed'
        ];
    }

    constructor() {
        this.radius = random(12.5, 20);
        this.x = random(this.radius - 10, width);
        this.y = -this.radius;
        this.speed = random(2, 4);
        this.color = Ball.colors[random(0, Ball.colors.length - 1)];
    }
}


let canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    width = canvas.width,
    height = canvas.height;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    width = window.innerWidth;
    height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);

resizeCanvas();

let balls = [];

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, width, height);

setInterval(() => {
    balls.push(new Ball());
}, random(50, 200));

requestAnimationFrame(function game() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < balls.length; i++) {
        let ball = balls[i];

        ball.y += ball.speed;

        ctx.fillStyle = ball.color;
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, Math.PI * 2, false);
        ctx.closePath();
        ctx.fill();
    }

    requestAnimationFrame(game);
});
