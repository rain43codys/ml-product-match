<template>
  <div class="flex" id="mode">
    <div class="train-mode mode flex" @click="trainMode('train')">TRAINING MODE</div>
    <div class="match-mode mode flex" @click="trainMode('survey')">TAKE THE SURVEY</div>
  </div>
</template>

<script>
import services from './services.js'

export default {
  name: 'app',
  // mixins:[services],
  data () {
    return {
      mode: "",
    }
  },
  mounted: function(){
   
  },
  methods:{
    trainMode: function(value) {
      this.mode = value
      this.$emit('pickedMode', this.mode);  
      this.$router.push({ name: 'single-question', params: { question: 0 }});
    },
  },
}

</script>

<style>
  #mode {
    justify-content: space-around;
    cursor: pointer;
  }
  .mode {
    width: 40%;
    height: 300px;
    border: 1px solid black;
    background: #eee;
    border-radius: 20px;
  }
</style>
