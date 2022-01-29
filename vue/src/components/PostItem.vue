<template>
  <div class="post" style="display: flex; justify-content: space-between">
    <div style="flex:0 0 75%;display: inline-block">
      <h1 key="{{post.id}}">{{post.id}}. {{post.title}}</h1>
      <h2>{{post.body}}</h2>
    </div>
    <div style="flex:0 0 25%;display: inline-block">
      <my-button @click="deletePost" style="vertical-align: center"> Удалить пост</my-button>
    </div>
  </div>
</template>

<script>

export default {
  name: "PostItem",
  props:{
    post:{
      type:Object,
      required:true,
    }
  },
  methods:{
    deletePost(){
      this.$emit('remove',this.post);
      //console.log(this.post);
    }
  }
}
</script>

<style scoped>
.post{
  padding: 15px;
  border:2px solid black ;
  margin-top: 10px;
}
/*button{*/
/*  height: 75%;*/
/*  width: 100%;*/
/*  background: green;*/
/*  border: 1px solid black;*/
/*  margin: auto;*/
/*  color: white;*/
/*}*/
</style>