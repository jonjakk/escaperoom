<template>
  <div>
    <div :key="task.id" v-for="(task, index) in tasks.slice(0, curPos)" v-if="!showRestart">
      <iframe v-bind:src="task.media"></iframe>
      <h3> {{ task.question }}</h3>
      <h5 v-if="curPos - 2 >= index "> Answer: {{ task.answer }}</h5>

    </div>
    <input type="text" id="userInput" name="userInput" v-model="userInput" placeholder="Enter your answer" v-if="!showRestart">
    <button @click="checkAnswer" v-if="!showRestart">Check Answer</button>

    <h4 v-if= "!showRestart && correctAnswer === 1" class = "fade" style="color: #145c0b">Correct Answer!</h4>
    <h4 v-if="!showRestart && correctAnswer === 2" class = "fade" style="color: #5e0709">Wrong Answer.</h4>

    <button v-if="showRestart" @click="restart">Restart</button>

  </div>

</template>

<script>
import Task from './Task'
console.log(this.showRestart)
export default {
  name: 'Questions',
  props: {
    tasks: Array,
  },
  components: {
    Task,
  },
  created() {
    this.showRestart = false;
    this.tasks = JSON.parse(localStorage.getItem("tasks"))
  },
  data(){
    return {
      userInput: '',
      curPos: 1,
      showRestart: false,
      correctAnswer: 0
    }
  },
  methods : {
    checkAnswer(){
      if (this.userInput === this.tasks[this.curPos-1].answer){
        this.curPos++;
        //Check whether you are at the end, if notify game
        if (this.curPos === this.tasks.length + 1){
          this.showRestart = true;
          this.$emit("game-finished", true) //true = you have won
          this.curPos = 0;
        }
        this.feedbackPopup(1) // 1 = popup for correct answer
      }else {
        this.feedbackPopup(2) // 2 = popup wrong answer, 0 = No popup
      }
      this.userInput = '' //clear inpout field
    },
    restart(){
      console.log(this.showRestart)
      this.curPos = 1;
      this.showRestart = false;
      this.correctAnswer = 0;
      this.$emit("restart")
    },
    feedbackPopup(correctAnswer){
      this.correctAnswer = correctAnswer;
    }
  },
  emits : ["game-finished", "restart"]
}

</script>

<style>
.fade{
  animation: fadeIn 2s;
}


</style>
