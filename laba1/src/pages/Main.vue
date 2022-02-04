<template>
  <h1>Добро пожаловать !</h1>
  <div class="slider">
    <h1>{{slides[current].name}}</h1>
    <h2>{{slides[current].shortDesc}}</h2>
  </div>
</template>

<script>

import axios from 'axios';
export default {
  name: "Main",
  data(){
    return{
      current:0,
      slides:[],
    }
  },
  methods:{
    async fetchPosts(){
      try{
          const response = await axios.get('/articles.json');
          this.slides=response.data;

      }catch (error){
        alert('ERROR');
      }
    },
    goNext(){
      this.current+=1;
    }
  },
  beforeMount() {
    this.fetchPosts();
  },
  computed:{

  }

}

</script>

<style scoped>

</style>