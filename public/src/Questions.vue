<template>
  <div id="question">
    <h2>Please indicate how much you agree or disagree with each of the following statements.</h2>    

    <router-view @NextQuestion="NextQuestion" :question="activeQuestion"></router-view>
  </div>
</template>

<script>
export default {
  name: 'questions',
  props:['questions'],
  data () {
    return {
      value: '',
      activeQuestion: {},      
      paramId: 0
    }
  },
  mounted: function(){
    this.activeQuestion = this.questions[0];    
  },
  methods:{
    NextQuestion:function(value){      
      this.questions[this.paramId].value = value;
      if((this.paramId+1) < this.questions.length){
        this.$router.push({ name: 'single-question', params: { question: (this.paramId+1) }});      
      }else{
        this.$router.push({ name: 'results'});    
      }
    }
  },
  watch:{
    '$route' (to, from){
      this.paramId = parseInt(this.$route.params.question);
      this.activeQuestion = this.questions[this.$route.params.question];
    }
  }
}
</script>

<style>

</style>
