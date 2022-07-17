<template>
  <div :class="task">
    <iframe v-bind:src="task.media"></iframe>
    <h2>
      Question: {{task.question}}
      <i @click="$emit('delete-task', task.id)" class="fas fa-times" id="cross"></i>
    </h2>
    <h2>Answer: {{task.answer}}</h2>
    <hr class="dashed">
  </div>
</template>

<script>
  export default {
    name: 'Task',
    props: {
      task: Object,
    }
  }
</script>

<style>
.fas {
  color: red;
}
hr.dashed {
  border-top: 3px dashed #bbb;
}

</style>
