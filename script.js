document.getElementById('update').addEventListener('click', updateVisualization);

function updateVisualization() {
  const velocityInput = parseFloat(document.getElementById('velocity').value);
  const speedOfLight = 1; // Represented as 100% of the speed of light
  const velocity = (velocityInput / 100) * speedOfLight;

  // Calculate time dilation factor (γ)
  const gamma = 1 / Math.sqrt(1 - (velocity * velocity));

  // Calculate length contraction factor
  const lengthContraction = 1 / gamma;

  // Update the object's appearance
  const object = document.getElementById('object');
  object.style.width = `${100 * lengthContraction}px`; // Adjust length
  object.style.height = `${100 * lengthContraction}px`; // Adjust height

  // Update the clock and length display
  document.getElementById('clock').textContent = `Time: ${gamma.toFixed(2)}s`;
  document.getElementById('length').textContent = `Length: ${lengthContraction.toFixed(2)}m`;

  // Update the info panel
  document.getElementById('time-dilation').textContent = `Time Dilation Factor (γ): ${gamma.toFixed(2)}`;
  document.getElementById('length-contraction').textContent = `Length Contraction Factor: ${lengthContraction.toFixed(2)}`;
}
