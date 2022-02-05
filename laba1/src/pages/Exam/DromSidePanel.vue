<template>
<div class="side-panel" style="">
  <div class="side-panel-content">
    <div class="navigation">
      <router-link :to="'/'" style="display: block;font-size: 24px;color: white;background: red;border: 2px solid black;padding: 7px;">Главная</router-link>
      <router-link :to="'/store'" style="display: block;font-size: 24px;color: white;background: red;border: 2px solid black;padding: 7px;">Объявления</router-link>
      <router-link :to="'/about'" style="display: block;font-size: 24px;color: white;background: red;border: 2px solid black;padding: 7px;">О нас</router-link>
    </div>
    <div class="vidgets">
      <h3>Количество объявлений в базе brom.ru</h3>
      <h3>Квартиры: {{this.$store.state.vidgets.apartments}}</h3>
      <h3>Машины: {{this.$store.state.vidgets.cars}}</h3>
    </div>
  </div>

</div>
</template>

<script>

import {mapActions} from "vuex";

export default {
  name: "DromSidePanel",
  components: {},

  methods:{
    ...mapActions(['fetchVidgets']),
  },
  beforeMount() {
    this.fetchVidgets();
  }
}

</script>

<style scoped>
.side-panel{
  display: inline-block;
  width: 30%;
  border-right: 2px solid hsl(353, 100%, 43%);
  vertical-align: top;
  height: 100vh;
}
.side-panel-content{
  position: fixed;
  top:75px;
  border: 2px solid hsl(353, 100%, 43%);
  padding: 10px;
}

</style>