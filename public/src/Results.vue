<template>
  <div id="results">
    <h1>Your match is: {{results}}</h1>
    <p>Do you like your results? If so let us know! It will help us match future users to results.</p>
    <button @click="saveResults()">I Like it!</button>  
  </div>
</template>

<script>
export default {
  name: 'results',
  props:['questions'],
  data () {
    return {      
      sendObject: [],
      results: null
    }
  },
  mounted: function(){
      this.GetResults();
  },
  methods:{
      GetResults: function(){
        for(var i = 0;i < this.questions.length;i++){
            this.sendObject.push(this.questions[i].value);
        }
        this.results = 'green';
      },
      saveResults: function(){
          console.log(this.sendObject, this.results);
      }
  }
}
</script>

<style>

</style>
