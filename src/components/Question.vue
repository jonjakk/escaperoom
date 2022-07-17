<template>
  <div :class="question">
    <iframe v-bind:src="question.media"></iframe>
    <h3>Question: {{question.question}}</h3>
    <h5 id="answer">Answer: {{question.answer}}</h5>
  </div>
</template>

<script>
export default {
  name: 'Question',
  props: {
    question: Object,
  }
}
</script>
