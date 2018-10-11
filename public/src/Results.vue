<template>
  <div id="results">
    <div>
      <h2>Your top result: </h2>
      <div class="option top" >
        <img :src="'./../data-source-images/'+ surveyResults[0][3]" alt="">
        {{ surveyResults[0][2] }} <br>
        <button @click="saveResults(surveyResults[0][0])">I Like it!</button>
      </div>
      <br/>
      <strong>Didn't like the result? Pick one from these other options!</strong>
    </div>
    <ul class="flex">
      <li v-for="(surveyResult, index) in surveyResults" v-bind:key="surveyResult[0]" v-if="index != 0" class="option">
        <img :src="'./../data-source-images/'+ surveyResult[3]" alt="">
        {{surveyResult[2]}} <br>
        <button @click="saveResults(surveyResult[0])">I Like it!</button>  
      </li>
    </ul>
    <div v-if="msg" class="msg">
      {{msg}} <a href="/">Start over.</a>
    </div>
  </div>
</template>

<script>
import services from './services.js'

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
          })
          self.surveyResults.forEach(item =>{
            console.log(services.getProductLookUp(item[0]))
            item.push(services.getProductLookUp(item[0]), services.getProductImage(item[0]))
          })
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

<style scoped>
  .flex {
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .top.option {
    width: 30%;
    margin: 0 auto;
  }
</style>