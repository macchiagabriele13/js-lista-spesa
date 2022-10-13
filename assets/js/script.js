/* Rivediamo l’esercizio visto insieme, ma questa volta con il ciclo while al posto del ciclo for. Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone, in particolare alla variabile di indice. */

/* Creo lista della spesa in un Array */

const toBuyList = [
    'Prosciutto',
    'Melone',
    'Pop-Corn',
    'Vino Bianco',
]

console.log(toBuyList + 'Fine Arrey');
console.log('Inizio loop');

// Stampo gli elementi di un array con ciclo While

const ulElement = document.querySelector('.list')
  console.log(ulElement + 'sono qui');

  let i = 0;
  while (i < toBuyList.length) {
   const toBuyItem = toBuyList[i]
   console.log(toBuyItem);
   

  const liElement = `<li>${toBuyItem}</li>`
  ulElement.insertAdjacentHTML('beforeend', liElement)

  i++

  }

  console.log('Fine loop');




 

