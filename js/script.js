// creo costante lista
const lista = ['farina', 'uova', 'pomodoro', 'olio', 'sale','pasta'];
// assegno a cont list il valore dell id nel html
const cont_list = document.getElementById('spesa');
// inzializzo il contatore i
let i=0;

// creo un ciclo while che si ripete tante volte quanti sono gli elementi nella lista
while ( i<lista.length){
     // creo li
     const li = document.createElement ('li');
     // inserisco li nel ul
     cont_list.appendChild(li);
     // inserisco nel li un elemento del array
     li.innerText = lista[i];
     // incremento
     i++
}
