// script.js
document.addEventListener('DOMContentLoaded', () => {
  const output = document.getElementById('output');
  const clearButton = document.getElementById('clear');
  const copyButton = document.getElementById('copy');

  // Add event listeners to keyboard buttons
  document.querySelectorAll('.keyboard button').forEach(button => {
    button.addEventListener('click', () => {
      const char = button.getAttribute('data-key');
      output.value += char;
    });
  });

  // Clear button functionality
  clearButton.addEventListener('click', () => {
    output.value = '';
  });

  // Copy button functionality
  copyButton.addEventListener('click', () => {
    output.select();
    document.execCommand('copy');
    alert('Text copied to clipboard!');
  });
});
