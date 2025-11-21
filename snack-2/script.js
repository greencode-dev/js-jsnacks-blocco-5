const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 },
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}

// Stampa in pagina tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

const peopleList = document.getElementById('output');

for (let i = 0; i < people.length; i++) {
  const listItem = document.createElement('li');
  listItem.textContent = people[i].name;
  peopleList.appendChild(listItem);
}
