<template>
<div class="cardContainer" >
  <Card v-for="developer in developers" :key="developer.id" :developer="developer"></Card>
</div>
</template>

<script>
import Card from "@/components/Card";
export default {
  name: "CardContainer",
  components: {Card},
  props:{
    developers:{
      type:Array,
      required:true,
    }
  }
}
</script>

<style scoped>
.cardContainer{
  display: flex;
}
</style>