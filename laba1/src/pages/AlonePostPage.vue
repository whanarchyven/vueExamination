<template>
  <div>
    <loading v-model:active="isPostLoading"
             :can-cancel="false"
             :is-full-page="true"
             :color="'#008000'"
             />
    <h1>{{this.id}}. {{this.title}}</h1>
    <h2>{{this.body}}</h2>
    <my-button @click="$router.push('/posts')">Назад</my-button>
  </div>

</template>

<script>
import axios from 'axios';
import MyButton from "@/components/UI/MyButton";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  name: "AlonePostPage",
  components: {MyButton,Loading},
  data(){
    return{
      id:this.$route.params.id,
      title:"",
      body:"",
      isPostLoading:true,
    }
  },

  methods:{
    async fetchConcretPost(){
      try{
        this.isPostLoading=true;
        setTimeout(async ()=>{
          const needUrl="https://jsonplaceholder.typicode.com/posts/"+this.id;
          const response = await axios.get(needUrl);
          this.title=response.data.title;
          this.body=response.data.body;
          this.isPostLoading=false;
        },600);

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