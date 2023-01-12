export class Setup {
	static setupAndGetContext(Screen) {
		const displayCanvas = document.getElementById('displayCanvas');
		displayCanvas.setAttribute('width', Screen.width);
		displayCanvas.setAttribute('height', Screen.height);
		return displayCanvas.getContext('2d');
	}
}

