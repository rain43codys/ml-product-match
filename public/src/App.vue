<template>
  <div id="app">
    <h1>ML Survey</h1>
    <h2>Please indicate how much you agree or disagree with each of the following statements.</h2>    
    <router-link :to="{ name: 'single-question', params: { question: 0 }}" v-show="paramId == null" 
    >Begin</router-link>    
    
    <router-view @NextQuestion="NextQuestion" :question="activeQuestion"></router-view><br/>    
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      questions:[
        {label:'I will hurry to places even when I have plenty of time.'},
        {label:'My personal interests and pastimes are quite different and novel from what others do.'},
        {label:'Chance has little to do with the successes I\'ve had in my life.'},
        {label:'I am actively involved in a regular, rigorous fitness program'},
        {label:'I would rather go for a walk than read a book.'},
        {label:'I often buy new products before they become popular or come down in price.'},
        {label:'I have much more energy than most persons my age.'},
        {label:'I make decisions quickly and easily rather than deliberating over them.'},
        {label:'I prefer being around people most of the time.'}
      ],
      activeQuestion: {},
      paramId: null
    }
  },
  beforeMount:function(){
    this.SetPage();
  },
  mounted: function(){
    
    this.activeQuestion = this.questions[0];
    this.paramId = parseInt(this.$route.params.question);
  },
  methods:{
    SetPage: function(){
      for(var i = 0;i < this.questions.length;i++){
        if(!this.questions[i].value){
          this.$router.push({ name: 'single-question', params: { question: i }});
          return;
        }
      }      
    },
    NextQuestion:function(value){
      console.log(value);
      this.questions[this.paramId].value = value;
      if((this.paramId+1) < this.questions.length){
        this.$router.push({ name: 'single-question', params: { question: (this.paramId+1) }});      
      }else{
        alert('your done!');
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
