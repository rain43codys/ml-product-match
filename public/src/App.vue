<template>
  <div>
    <h1>ML Survey</h1>
    <router-link :to="{ name: 'single-question', params: { question: 0 }}" v-show="paramId == null" 
    >Begin</router-link>    
    <router-view @pickedMode="pickedMode" @NextQuestion="NextQuestion" :questions="questions" :mode="mode"></router-view><br/>    
  </div>
</template>

<script>

// import services from './services.js'

export default {
  name: 'app',
  // mixins:[services],
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
      paramId: null,
      answers: {
        input: [],
        output: ""
      },
      surveyResult: "",
      doneSurvey: false,
      msg: "",
      mode: "",
    }
  },
  beforeMount:function(){
    this.SetPage();
    console.log(this.$route)
  },
  mounted: function(){
    this.activeQuestion = this.questions[0];
    this.paramId = parseInt(this.$route.params.question);
  },
  methods:{
    SetPage: function(){
      if(!this.mode) {
        this.$router.push({ name: 'mode' });
      }
      // for(var i = 0;i < this.questions.length;i++){
        // else if(!this.questions[i].value){
        //   this.$router.push({ name: 'single-question', params: { question: i }});
        //   return;
        // }
      // }      
    },
    NextQuestion:function(value){
      console.log(value);
      this.questions[this.paramId].value = value;

      if((this.answers.input.length) < this.questions.length){
        this.answers.input.push(Number(value))
      }

      if((this.paramId+1) < this.questions.length){
        this.$router.push({ name: 'single-question', params: { question: (this.paramId+1) }});      
      }else{
        
      }
    },
    pickedMode: function(value){
      console.log(value)
      this.mode = value;
    },
    dontSendResult: function(){
      this.msg = "Thanks for participating in the survey."
    }
  },
  watch:{
    '$route' (to, from){
      this.SetPage();
      this.paramId = parseInt(this.$route.params.question);
      this.activeQuestion = this.questions[this.$route.params.question];
    }
  }
}

</script>

<style>
  body {
    margin:0; padding:0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    max-width: 1200px;
    margin: 0 auto;
    margin-top:70px;
  }
  h1 {
    margin-bottom: 30px;
  }
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  a {
    color: #42b983;
  }
  .results {
    background: #ccc;
    margin-top: 50px;
    padding: 40px;
  }
  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .train{ 
    border: 1px solid red;
    padding: 20px;
    margin: 20px auto;
    color: red;
    border-radius: 15px;
    display: inline-block;
  }
  .msg {
    border: 2px solid black;
    width: 60%;
    padding: 10px;
    background: #eee;
    border-radius: 15px;
    margin: 0 auto;
  }
  .option {
    width: 19%;
    padding: 30px 0;
    border: 1px solid black;
    cursor: pointer;
    margin-bottom: 30px;
    border-radius: 15px;
  }
  .option img {
    width: 100%;
  }
</style>
