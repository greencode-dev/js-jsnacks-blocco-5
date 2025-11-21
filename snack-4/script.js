const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
];

// Crea un nuovo array coi nomi di tutti gli autori
// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']

const authors = [];

for (let i = 0; i < posts.length; i++) {
  authors.push(posts[i].author);
}

console.log(authors);

// Stampa in pagina tutti i nomi degli autori
// Risultato: 'Marco', 'Luca', 'Fabrizio', 'Enrico'

const authorsList = document.getElementById('output');

for (let i = 0; i < authors.length; i++) {
  const listItem = document.createElement('li');
  listItem.textContent = authors[i];
  authorsList.appendChild(listItem);
}
