<template>
<div class="navbar">
  <div class="logo">
    <router-link to="/" style="height: 100%"><img src="@/mospolytech_logo_white.png"></router-link>
  </div>
  <div class="navbar__items">
    <div class="navbar__item" v-for="item in menuItems" :key="item.id" >
      <navbar-item :menu-item="item"></navbar-item>
    </div>
  </div>


</div>
</template>

<script>
import NavbarItem from "@/components/UI/NavbarItem";
export default {
  name: "Navbar",
  components: {NavbarItem},
  props:{
    menuItems:{
      type:Array,
    }
  }
}
</script>

<style >
.navbar{
  width: 100%;
  height: 50px;
  background: green;
  padding: 0 !important;
  display: block;
  position: fixed;
  top: 0;
}
.logo{
  height: 100%;
  display: inline-block;
}
.logo>a>img{
  height: 100%;
}
.navbar__items{
  display: inline-flex;
  vertical-align: top;
  height: 100%;
}
.navbar__item {
  padding: 5px;
  vertical-align: middle;
  font-size: 22px;
  margin-left: 42px;
  margin-top: auto;
  margin-bottom: auto;
}
.navbar__item>a{
  color: white;
}
</style>