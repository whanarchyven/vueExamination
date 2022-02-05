<template>
  <div v-if="posts.length>0">
    <h3>Список объявлений</h3>
    <transition-group name="post-list">
      <post-item
          v-for="post in posts"
          :post="post"
          :key="post.id"
          @remove ='deletePost'
      />
    </transition-group>

  </div>
  <h2 style="color: red" v-else>
    А тут нету ничо иди домой
  </h2>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  name: "PostList",
  components: {PostItem},
  props:{
    posts:{
      type:Array,
      required:true,
    }
  },
  methods:{
    deletePost(post){
      this.$emit('remove',post);
      //console.log(post);
    }
  }
}
</script>

<style scoped>
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.post-list-move {
  transition: transform 0.5s ease;
}
</style>