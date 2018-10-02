<template>
  <div id="question">
    {{question.label}}<br/><br/>
    {{value}}<br/>
    Strongly Disagree <input v-model="value" type="range" min="0" max="6"/> Strongly Agree<br/>
    <button v-show="value" @click="NextQuestion()">Next</button>
  </div>
</template>

<script>
export default {
  name: 'question',
  props:['question'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      value: ''
    }
  },
  methods:{
      NextQuestion:function(){
          if(this.value !== null){
            this.$emit('NextQuestion', this.value);     
          }
      }
  }
}
</script>

<style>

</style>
