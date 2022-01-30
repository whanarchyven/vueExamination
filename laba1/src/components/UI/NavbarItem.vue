<template>
<router-link :to="this.menuItem.route">{{this.menuItem.name}}</router-link>
</template>

<script>
export default {
  name: "NavbarItem",
  props:{
    menuItem:{
      id:{
        type:Number,
        required:true,
      },
      name: {
        type: String,
        required: true,
      },
      route:{
        type:String,
        required:true,
      }
    }
  }
}
</script>

<style scoped>

</style>