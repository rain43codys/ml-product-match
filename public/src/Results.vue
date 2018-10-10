<template>
  <div id="results">
    <div v-if="msg == ''">
      <h1>Your top result: </h1>
      <h2>{{surveyResults[0][0]}} <button @click="saveResults(surveyResults[0][0])">I Like it!</button></h2>
      <br/>
      <strong>Didn't like? Here are some other options</strong>
    </div>
    <ul v-if="msg == ''">
      <li v-for="(surveyResult, index) in surveyResults" v-bind:key="surveyResult[0]" v-if="index != 0">
        {{surveyResult[0]}}
        <button @click="saveResults(surveyResult[0])">I Like it!</button>  
      </li>
    </ul>
    <div v-if="msg">
      {{msg}}
      <a href="/">Go Back</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'results',
  props:['questions'],
  data () {
    return {      
      sendObject: [],
      results: null,
      surveyResults: [[]],
      msg: ''
    }
  },
  mounted: function(){
      this.GetResults();
  },
  methods:{
      GetResults: function(){
        for(var i = 0;i < this.questions.length;i++){
            this.sendObject.push(parseInt(this.questions[i].value));
        }
        var self = this;
        this.axios.post('/getResult', this.sendObject).then(function (response) {
          console.log(response);
          //var type = Math.max(...Object.values(response.data))
          //var output = Object.keys(response.data).filter(key=> response.data[key] === type)
          var sortable = [];
          for (var type in response.data) {
              sortable.push([type, response.data[type]]);
          }
          self.surveyResults = sortable.sort(function(a, b){
            return b[1] - a[1];
          });
          self.doneSurvey = true
        })
        .catch(function (error) {
          console.log(error);
        });
      },
      saveResults: function(type){
        var saveObject = {input:[],output:"\""+type+"\""};
        for(var i = 0;i < this.questions.length;i++){
            saveObject.input.push(parseInt(this.questions[i].value));
        }
        var self = this;
        this.axios.post('/postResult', saveObject).then(function (response) {
          console.log(response);
          self.msg = "Thanks for participating in the survey."
        })
        .catch(function (error) {
          console.log(error);
        });
      },
  }
}
</script>

<style>

</style>
