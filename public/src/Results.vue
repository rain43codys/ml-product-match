<template>
  <div id="results">
    <h1>Your match is: {{surveyResult}}</h1>
    <div v-if="msg == ''">
      <p>Do you like your results? If so let us know! It will help us match future users to results.</p>
      <button @click="saveResults()">I Like it!</button>  
    </div>
    <div v-if="msg">
      {{msg}}
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
      surveyResult: '',
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
          var type = Math.max(...Object.values(response.data))
          var output = Object.keys(response.data).filter(key=> response.data[key] === type)
          console.log(output)
          self.surveyResult = output[0]
          self.doneSurvey = true
        })
        .catch(function (error) {
          console.log(error);
        });
      },
      saveResults: function(){
        var saveObject = {input:[],output:"\""+this.surveyResult+"\""};
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
      }
  }
}
</script>

<style>

</style>
