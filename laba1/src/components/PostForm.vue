<template>
  <form @submit.prevent>
    <my-input v-model="post.title" v-focus type="text" placeholder="Название" />
    <my-input v-model="post.body" type="text" placeholder="Описание"/>
    <my-button @click="createPost">Добавить пост </my-button>
  </form>
</template>

<script>

import MyInput from "@/components/UI/MyInput";
export default {
  name: "PostForm",
  components: {MyInput},
  data(){
    return {
      post:{
        id:0,
        title:'',
        body:'',
      }
    }
  },
  methods:{
    createPost(){
      this.post.id= Date.now();
      this.$emit('create',this.post);
      this.post={
        title:"",
        body:"",
      }
    },

  },

}
</script>

<style scoped>
form{
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
}

</style>