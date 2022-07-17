<template>
  <h2> {{ this.minutes }}:{{ this.seconds }} </h2>
</template>

<script>
export default {

  props : {
    timerCount: Number
  },
  computed :{
  },
  data (){
    return {
      minutes : 0,
      seconds : 0,
      timerCountNew: Number
    }
  },
  mounted() {
    this.timerCountNew = this.timerCount;
  },

  watch: {

    timerCountNew: {
      handler(value) {

        if (value > 0) {
          setTimeout(() => {
            this.minutes = Math.floor(this.timerCountNew/60);
            this.seconds = this.timerCountNew % 60;
            this.timerCountNew--;
          }, 1000);
        }

        if (this.timerCountNew === 0) {
          this.$emit('time-up', false) //false = not won
        }

      },
      immediate: true
    }

  },
  emits : ['time-up']
}

</script>
