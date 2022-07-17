<template>
  <div class = "root">

    <h1 v-if="winner && gameEnd">Congratulations you have won</h1>
    <h1 v-if="!winner && gameEnd">Oh no, you lost :(</h1>
    <div class="topRight">
    <Timer :timer-count="time * 60" @time-up="gameFinished"></Timer>
    </div>
    <Questions
      :tasks="tasks" @game-finished="gameFinished" @restart="restart"></Questions>

  </div>
</template>

<script>

import Admin from "./Admin";
import Questions from "../components/Questions";
import Timer from "../components/Timer";


export default {
name: 'Game',
  props : {
  tasks : Array,
    time: Number
  },
  data() {
  return {
    gameEnd : false,
    winner : false,
  }
  },
  components : {
    Timer,
    Questions,
  Admin
  },
  methods : {
    restart(){
      this.gameEnd = false;
    },
    gameFinished(won){
      this.gameEnd = true;
      if (won){
        this.winner = true;
      }else {
        this.winner = false;
      }

    }
  },
  created(){
    //retrieve data that admin set
    this.time = localStorage.getItem("time");
    this.tasks = JSON.parse(localStorage.getItem("tasks"))
  },

}
</script>

<style scoped>
div.topRight {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  background-color: green;
  border: 2px solid #4CAF50;
  max-width: 25%;
}
h1{
  padding-bottom: 5%;
}

</style>

