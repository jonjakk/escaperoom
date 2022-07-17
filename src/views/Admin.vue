<template>
  <div class="root">
  <h1>Admin Quiz Creator</h1>
    <div class="input" style="padding-bottom: 10%; padding-top: 10%">
      <label for="time">Total Maximum Time (in minutes)</label>
      <input type="number" id="time" name="time" required v-model="time">
    </div>
    <hr style="border-top: 4px solid #000000;
  border-radius: 5px;">
    <div style="padding-top: 5%">
    <AddTask @add-task="addTask" ></AddTask>
    </div>

    <div>
      <Tasks
        @delete-task="deleteTask"
        :tasks="tasks"></Tasks>
    </div>
    <button @click="onClickRedirect" class="btn btn-1" v-if="tasks.length > 0">Create Escaperoom</button>
  </div>
</template>

<script>
import Tasks from "../components/Tasks";
import AddTask from "../components/AddTask";

export default {
name:'Admin',
  components: {Tasks, AddTask},
  emits: ['delete-task', 'add-task'],
  methods: {
  //redirect to game with information from Admin Panel
    onClickRedirect(){
      this.$emit('push-info', {
        tasks: this.tasks,
        time: this.time
      })
      localStorage.setItem("tasks", JSON.stringify(this.tasks))
      localStorage.setItem("time", this.time)
      this.$router.push('/game')
    },
    addTask(task){
      this.tasks = [...this.tasks, task]
    },
    deleteTask(id){
      if (confirm("Are you sure?"))
      this.tasks = this.tasks.filter((task) => task.id !== id)
    }
  },
data(){
  return {
    tasks: [],
    time: 60 //default duration
  }
}
}
</script>

<style>
/* General button style */
@import url('https://fonts.googleapis.com/css?family=Lato');
.btn {
  border: none;
  font-family: 'Lato';
  font-size: inherit;
  color: inherit;
  background: none;
  cursor: pointer;
  padding: 10px 20px;
  display: inline-block;
  margin: 15px 30px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  outline: none;
  position: relative;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
  border-radius: 5px;
}

.btn:after {
  content: '';
  position: absolute;
  z-index: -1;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
}

/* Pseudo elements for icons */
.btn:before {
  font-family: 'FontAwesome';
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  position: relative;
  -webkit-font-smoothing: antialiased;
}
.btn-1 {
  background: #07aa24;
  color: #fff;
}

.btn-1:hover {
  background: #037e2d;
}

.btn-1:active {
  background: #1bd722;
  top: 2px;
}

.btn-1:before {
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;
  line-height: 3;
  font-size: 140%;
  width: 60px;
}
.btn-2 {
  background: rgba(139, 132, 118, 0.86);
  color: #fff;
  font-weight: 500;
}

.btn-2:hover {
  background: rgba(63, 67, 64, 0.89);
}

.btn-2:active {
  background: #1bd722;
  top: 2px;
}




</style>

