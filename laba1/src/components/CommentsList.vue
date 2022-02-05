<template>
  <comment-item v-for="comment in comments" :key="comment.id" :comment="comment" ></comment-item>
</template>

<script>
import CommentItem from "./CommentItem";
import axios from 'axios';
export default {
  name: "CommentsList",
  components: {CommentItem},
  props:{
    id:{
      type:Number,
      required:true,
    }
  },
  data(){
    return{
      comments:[],
    }
  },
  methods:{
    async getComments(){
      try{
        const url='http://demo-api.vsdev.space/api/articles/'+this.id+'/comments'
        const response = await axios.get(url);
        this.comments=response.data;
      }catch (error){
        alert('ERROR');
      }
    },
  },
  mounted() {
    this.getComments();
  }
}
</script>

<style scoped>

</style>