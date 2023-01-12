export class TennisBall {
	constructor(context, Screen, reportFunction) {
		this.ctx = context;
		this.width = Screen.width;
		this.height = Screen.height;
		this.run = false;
		this.y = undefined;
		this.g = 0.98;
		this.velocity = 1;
		this.ballSize = 20;
		this.ballRadius = 10;
		this.x = (Screen.width / 2) - 10;
		this.reportFunction = reportFunction;
		this.inertionFactor = 0.9;
		this.initialize()
	}

	initialize() {
		this.ctx.beginPath();
		this.ctx.arc(this.x, 0 + this.ballRadius, this.ballRadius, 0, 2 * Math.PI, false);
		this.ctx.fillStyle = 'yellow';
		this.ctx.fill();
	}

	showOnCanvas() {
		this.ctx.clearRect(0, 0, this.width, this.height);
		this.ctx.beginPath();
		this.ctx.arc(this.x, this.y, this.ballRadius, 0, 2 * Math.PI, false);
		this.ctx.fillStyle = 'yellow';
		this.ctx.fill();
		this.ctx.closePath();
	}

	draw() {
		this.showOnCanvas();

		this.reportFunction(this.g, this.velocity, this.y, this.inertionFactor);

		this.y += this.velocity;
		this.velocity += this.g;

		if (this.y + this.ballRadius > this.height) {
			this.y = this.height - this.ballRadius;
			this.velocity *= -this.inertionFactor;
			this.inertionFactor -= 0.01;
			if (this.inertionFactor < 0) {
				return;
			}
		}

		requestAnimationFrame(this.draw.bind(this));
	}

	start() {
		this.draw();
	}

	stop() {
		this.y = 0 + this.ballRadius;
		this.inertionFactor = 0.9;
		this.velocity = 1;
	}
}