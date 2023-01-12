export const report = (gravityText, velocityText, positionYText, inertionFactor) => {
    document.getElementById('gravity').innerHTML = "g = " + gravityText;
    document.getElementById('velocity').innerHTML = "v = " + velocityText;
    document.getElementById('positionY').innerHTML = "y = " + positionYText;
    document.getElementById('inertionFactor').innerHTML = "bounce force = " + inertionFactor;
}