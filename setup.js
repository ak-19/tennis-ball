import { Dimensions } from './dimensions.js';

export class Setup {
	static setupAndGetContext() {
		const displayCanvas = document.getElementById('displayCanvas');
		displayCanvas.setAttribute('width', Dimensions.SCREEN.WIDTH);
		displayCanvas.setAttribute('height', Dimensions.SCREEN.HEIGHT);
		return displayCanvas.getContext('2d');
	}
}

