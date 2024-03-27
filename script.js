document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('guess-form');
  const resultMessage = document.getElementById('result');
  let attempts = 0;
  const maxAttempts = 10;
  const secretNumber = Math.floor(Math.random() * 1000) + 1;

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe
    
    if (attempts >= maxAttempts) {
      resultMessage.textContent = `¡Se acabaron los intentos! El número secreto era ${secretNumber}.`;
      return;
    }
    
    const guessInput = document.getElementById('guess-input');
    const guessedNumber = parseInt(guessInput.value);
    
    if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 1000) {
      resultMessage.textContent = 'Por favor ingrese un número válido entre 1 y 1000.';
      return;
    }

    attempts++;

    if (guessedNumber === secretNumber) {
      resultMessage.textContent = `¡Felicitaciones! ¡Adivinaste el número secreto ${secretNumber} en ${attempts} intentos!`;
    } else if (guessedNumber > secretNumber) {
      resultMessage.textContent = 'Te equivocaste... el número secreto es menor.';
    } else {
      resultMessage.textContent = 'Te equivocaste... el número secreto es mayor.';
    }

    if (attempts >= maxAttempts) {
      resultMessage.textContent += ` Se acabaron los intentos. El número secreto era ${secretNumber}.`;
    }
  });
});
