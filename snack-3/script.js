const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

const incrementedNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  incrementedNumbers.push(numbers[i] + 1);
}

console.log(incrementedNumbers);

// Stampa in pagina tutti i numeri incrementati di 1
// Risultato: 3, 9, 5, 8, 3, 88

const numbersList = document.getElementById('output');

for (let i = 0; i < incrementedNumbers.length; i++) {
  const listItem = document.createElement('li');
  listItem.textContent = incrementedNumbers[i];
  numbersList.appendChild(listItem);
}
