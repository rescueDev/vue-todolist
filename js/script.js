// DESCRIZIONE:
// Creiamo una mini app di todolist con html+css+js in Vue
// Features principali:
// un input permette all’utente di scrivere una “cosa da fare”;
// un bottone permette di aggiungere quella cosa alla lista di cose da fare in pagina, come promemoria;
// una volta che l’utente ha ipoteticamente svolto l’attività, grazie ad un bottone (X) può eliminare quella determinata cosa dalla lista.

//creo istanza Vue

var app = new Vue({
  el: "#root",
  data: {
    dato: " ",
    tasks: [],
    datoIndex: 0,
    logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRKnpYyR8hFiQxks8xMFBVKF8bYUauu_OZvg&usqp=CAU",
  },
  methods: {
    addTasks() {
      this.tasks.push(this.dato);
      console.log(this.tasks);
      this.dato = ""; //ripulisco ad ogni aggiunta l'input
    },
    removeTask(index) {
      this.$delete(this.tasks, index); //cancello il singolo elemento dell'array legandolo al suo indice per eliminare quello cliccato
    },
    cleanAll() {
      this.tasks.splice(this.dato); //rimuovo tutti i task con bottone
    },
  },
});
