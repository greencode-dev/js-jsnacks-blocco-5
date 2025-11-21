const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.

const zucchineLunghe = [];
const zucchineCorte = [];

for (let i = 0; i < zucchine.length; i++) {
  const zucchina = zucchine[i];
  if (zucchina.length >= 15) {
    zucchineLunghe.push(zucchina);
  } else {
    zucchineCorte.push(zucchina);
  }
}

console.log('Zucchine Lunghe:', zucchineLunghe);
console.log('Zucchine Corte:', zucchineCorte);

// Stampa in pagina in un unico output i due array di zucchine

const outputDiv = document.getElementById('output');

// Ciclo per le zucchine lunghe

const lungheHeader = document.createElement('h2');
lungheHeader.textContent = 'Zucchine Lunghe (>= 15cm)';
outputDiv.appendChild(lungheHeader);

const lungheList = document.createElement('ol');
for (let i = 0; i < zucchineLunghe.length; i++) {
  const listItem = document.createElement('li');
  listItem.textContent = `Tipo: ${zucchineLunghe[i].type}, Peso: ${zucchineLunghe[i].weight}kg, Lunghezza: ${zucchineLunghe[i].length}cm`;
  lungheList.appendChild(listItem);
}
outputDiv.appendChild(lungheList);

// inserisci un spazio tra i due elenchi

const spacer = document.createElement('div');
spacer.style.height = '20px';
outputDiv.appendChild(spacer);

// Ciclo per le zucchine corte

const corteHeader = document.createElement('h2');
corteHeader.textContent = 'Zucchine Corte (< 15cm)';
outputDiv.appendChild(corteHeader);

const corteList = document.createElement('ol');
for (let i = 0; i < zucchineCorte.length; i++) {
  const listItem = document.createElement('li');
  listItem.textContent = `Tipo: ${zucchineCorte[i].type}, Peso: ${zucchineCorte[i].weight}kg, Lunghezza: ${zucchineCorte[i].length}cm`;
  corteList.appendChild(listItem);
}
outputDiv.appendChild(corteList);
