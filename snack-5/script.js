const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

const evenNums = [];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    evenNums.push(nums[i]);
  }
}

console.log(evenNums);

// Stampa in pagina tutti i numeri pari
// Risultato: 2, 8, 4, 12

const evenNumsList = document.getElementById('output');

for (let i = 0; i < evenNums.length; i++) {
  const listItem = document.createElement('li');
  listItem.textContent = evenNums[i];
  evenNumsList.appendChild(listItem);
}
