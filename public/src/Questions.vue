<template>
  <div id="survey">
    <span>Please indicate how much you agree or disagree with each of the following statements.</span>
    <router-view @NextQuestion="NextQuestion" :question="activeQuestion"></router-view>
    <div v-if="mode === 'train'" class="train">
      <span> You are in training mode.</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'questions',
  props:['questions', 'mode'],
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
        if(this.mode === 'train') {
          this.$router.push({ name: 'train'});    
        }
        else {
          this.$router.push({ name: 'results'});    
        }
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
  #survey span {
    font-size: 14px;
  }
</style>
