<template>
  <div id="train">
    <h2>Which of the following best describes your dream vacation?</h2>
    <div class="flex">
      <div v-for="(option, index) in options" @click="trainResults(option.key)" class="option">
        <img :src="'./../data-source-images/'+ option.thumbnail" alt="">
        {{ option.lookup }}
        <!-- <button @click="trainResults()">I Like it!</button>   -->
      </div>
    </div>
    <div v-if="msg" class="msg">
      {{msg}} <a href="/">Start over.</a>
    </div>
  </div>
</template>

<script>

import services from './services.js'
 
export default {
  name: 'train',
  props:['questions'],
  // mixins: [services],
  data () {
    return {      
      sendObject: [],
      results: null,
      msg: '',
      options: services.getAllProducts()
    }
  },
  mounted: function(){
      console.log(this.options)
  },
  methods:{
      trainResults: function(option){
        var saveObject = {input:[],output:"\""+option+"\""};
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

<style scoped>
  .flex {
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>
