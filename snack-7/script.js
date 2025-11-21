const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C',
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A',
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B',
  },
];

// Recupera i dati dello studente con id 2
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }

let studentWithId2 = null;

for (let i = 0; i < students.length; i++) {
  if (students[i].id === 2) {
    studentWithId2 = students[i];
    break;
  }
}

console.log(studentWithId2);

// Stampa in pagina i dati dello studente con id 2
// Risultato: id: 2, name: 'Mario Banfi', age: 34, class: '4A'

const outputDiv = document.getElementById('output');

if (studentWithId2) {
  const studentInfo = document.createElement('p');
  studentInfo.textContent = `id: ${studentWithId2.id}, name: ${studentWithId2.name}, age: ${studentWithId2.age}, class: ${studentWithId2.class}`;
  outputDiv.appendChild(studentInfo);
}
