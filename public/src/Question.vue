<template>
  <div id="question">
    <p>{{question.label}}</p>
    <div class="input flex">
      <span class="label">Strongly Disagree</span>
      <div class="input-box">
        <input v-model="value" type="range" min="0" max="6" name="test"/> 
        <output for="test" v-bind:style="{ left: value/6*100 + '%', transform: 'translateX(' + -value/6*100 + '%)'}">{{value}}</output>
      </div>
      <span class="label">Strongly Agree</span>
    </div>
    <button :disabled="!value" @click="NextQuestion()">Next</button>
  </div>
</template>

<script>
export default {
  name: 'question',
  props:['question'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      value: ''
    }
  },
  methods:{
      NextQuestion:function(){
          if(this.value !== null){
            this.$emit('NextQuestion', this.value);     
          }
      }
  },
  watch:{
    '$route' (to, from){
      if(to.name === 'single-question' && from.name === 'single-question'){
        this.value = ''
      }
    }
  }
}
</script>

<style>
  #question p {
    font-size: 22px;
  }
  .input-box {
    width: 30%;
    margin: 10px 10px;
    position: relative;
  }

  input[type=range] {
    height: 32px;
    -webkit-appearance: none;
    /*margin: 10px 10px;*/
    width: 100%;
  }
  input[type=range]:focus {
    outline: none;
  }
  input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 16px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #B6B6B6;
    border-radius: 25px;
    border: 1px solid #8A8A8A;
  }
  input[type=range]::-webkit-slider-thumb {
    box-shadow: 1px 1px 1px #828282;
    border: 1px solid #8A8A8A;
    height: 24px;
    width: 35px;
    border-radius: 6px;
    background: #DADADA;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -5px;
  }
  input[type=range]:focus::-webkit-slider-runnable-track {
    background: #B6B6B6;
  }
  input[type=range]::-moz-range-track {
    width: 100%;
    height: 16px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #B6B6B6;
    border-radius: 25px;
    border: 1px solid #8A8A8A;
  }
  input[type=range]::-moz-range-thumb {
    box-shadow: 1px 1px 1px #828282;
    border: 1px solid #8A8A8A;
    height: 24px;
    width: 35px;
    border-radius: 6px;
    background: #DADADA;
    cursor: pointer;
  }
  input[type=range]::-ms-track {
    width: 100%;
    height: 16px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  input[type=range]::-ms-fill-lower {
    background: #B6B6B6;
    border: 1px solid #8A8A8A;
    border-radius: 50px;
    box-shadow: 0px 0px 0px #000000;
  }
  input[type=range]::-ms-fill-upper {
    background: #B6B6B6;
    border: 1px solid #8A8A8A;
    border-radius: 50px;
    box-shadow: 0px 0px 0px #000000;
  }
  input[type=range]::-ms-thumb {
    margin-top: 1px;
    box-shadow: 1px 1px 1px #828282;
    border: 1px solid #8A8A8A;
    height: 24px;
    width: 35px;
    border-radius: 6px;
    background: #DADADA;
    cursor: pointer;
  }
  input[type=range]:focus::-ms-fill-lower {
    background: #B6B6B6;
  }
  input[type=range]:focus::-ms-fill-upper {
    background: #B6B6B6;
  }
  output { 
    position: absolute;
    /*background: #999999;*/
    width: 33px; 
    /*height: 30px; */
    text-align: center; 
    color: white; 
    border-radius: 10px; 
    display: inline-block; 
    left: 50%;
    margin-left: 1%;
    transform: translateX(-50%);
    top: -34%;
    color: black;
    font-weight: bold;
  }
  /*output:after { 
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-top: 10px solid #999999;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    margin-top: -1px;
  }*/
  .label {
    width: 90px;
  }
</style>
