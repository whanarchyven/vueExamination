<template>
  <div class="comment">
    <img src="https://i.ibb.co/Cwrq6HY/img-140279.png">
    <h2>{{comment.user_name}}</h2>
    <h3>{{comment.comment}}</h3>
  </div>
</template>

<script>
export default {
  props:{
    comment:{
      type: Object,
      required:true,
    }
  },
  name: "CommentItem"
}
</script>

<style scoped>
.comment{
  width: 80%;
  border: 2px solid green;
  border-radius: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;

}
.comment>img{
  width: 25px;
  display: inline-block;
  margin-right: 10px;
  vertical-align: center !important;
}
.comment>h2{
  display: inline-block;
  vertical-align: center;
}
</style>