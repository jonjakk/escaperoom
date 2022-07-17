<template>
  <form @submit="onSubmit" class="add-form">
    <div class="input">
      <label for="media">Embed I-frame link</label>
      <input type="text" id="media" name="media" v-model="media">
    </div>

    <div class="input">
      <label for="question">Question</label>
      <input type="text" id="question" name="question" v-model="question">
    </div >
    <div class="input">
      <label for="answer">Answer</label>
      <input type="text" id="answer" name="answer" v-model="answer">
    </div>

    <div class="input">
    <button type="submit" value="saveTask" class="btn btn-2" >Add Question</button>
    </div>
  </form>


</template>

<script>

export default {
  name: 'AddTask',
  data(){
    return {
      media: '',
      question: '',
      answer: ''
    }
  },
  methods: {

    onSubmit(e){
      e.preventDefault()

      const newTask = {
        id: Math.floor(Math.random() * 100000),
        media: this.media,
        question: this.question,
        answer: this.answer
      }

      this.$emit("add-task", newTask)

      //reset values
      this.media = ''
      this.question = ''
      this.answer = ''
    }
  }
}
</script>

<style>
.input{
  width: 50%;
  margin: 0 auto;
  text-align: center;
}
</style>
