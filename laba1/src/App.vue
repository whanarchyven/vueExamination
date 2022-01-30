<template>
  <navbar v-model:menu-items="menuItems"></navbar>
  <div class="app">
    <router-view style="margin-top: 100px"></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/UI/Navbar";
export default {
  components: {Navbar},
  data(){
    return{
      menuItems:[
        {id:1, name:"Main",route:"/"},
        {id:2, name:"About",route:"/about"},
        {id:3, name:"News",route:"/posts"}
      ]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
*{
  font-family: Raleway;
  margin: 0;
  padding: 0;

}

#app{
  padding: 20px;
}
</style>