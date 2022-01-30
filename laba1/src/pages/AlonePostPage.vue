<template>
  <div>
    <h1>{{this.id}}. {{this.title}}</h1>
    <h2>{{this.body}}</h2>
    <my-button @click="$router.push('/posts')">Назад</my-button>
  </div>

</template>

<script>
import axios from 'axios';
import MyButton from "@/components/UI/MyButton";
export default {
  name: "AlonePostPage",
  components: {MyButton},
  data(){
    return{
      id:this.$route.params.id,
      title:"",
      body:"",
    }
  },
  methods:{
    async fetchConcretPost(){
      try{
          const needUrl="https://jsonplaceholder.typicode.com/posts/"+this.id;
          const response = await axios.get(needUrl);
          this.title=response.data.title;
          this.body=response.data.body;
      }catch (error){
        alert('ERROR');
      }
    }
  },
  beforeMount() {
    this.fetchConcretPost();
  },
}
</script>

<style scoped>

</style>