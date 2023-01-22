import { Dimensions } from './dimensions.js';

export class TennisBall {
	constructor(displayContext) {
		this.ctx = displayContext;
		this.width = Dimensions.SCREEN.WIDTH;
		this.height = Dimensions.SCREEN.HEIGHT;
		this.radius = Dimensions.BALL.RADIUS;
		this.setInitialValues();
		this.showOnBallCanvas();
	}

	setInitialValues() {
		this.y = 0 + Dimensions.BALL.RADIUS;
		this.x = (Dimensions.SCREEN.WIDTH / 2) - Dimensions.BALL.RADIUS / 2;
		this.g = 0.98;
		this.inertionFactor = 0.9;
		this.velocity = 1;
	}

	showOnBallCanvas() {
		this.ctx.clearRect(0, 0, this.width, this.height);
		this.ctx.beginPath();
		this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
		this.ctx.fillStyle = 'yellow';
		this.ctx.fill();
		this.ctx.closePath();
	}

	fixDirectionIfNeeded() {
		if (this.y + this.radius > this.height) {
			this.y = this.height - this.radius;
			this.velocity *= -this.inertionFactor;
			this.inertionFactor -= 0.01;
		}
	}

	animate() {
		this.showOnBallCanvas();

		this.y += this.velocity;
		this.velocity += this.g;

		this.fixDirectionIfNeeded();

		if (this.inertionFactor < 0) return;

		requestAnimationFrame(this.animate.bind(this));
	}

	stop() {
		this.setInitialValues();
	}
}