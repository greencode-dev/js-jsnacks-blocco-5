const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// Stampa in pagina tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

const namesList = document.getElementById('output');

for (let i = 0; i < names.length; i++) {
  const listItem = document.createElement('li');
  listItem.textContent = names[i];
  namesList.appendChild(listItem);
}
