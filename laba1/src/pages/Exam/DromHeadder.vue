<template>
  <div class="headder">
    <div class="headder-logo">
      <img src="@/assets/images/bromlogo.png">
    </div>
    <div class="sub_name">
      <h2>Brom- найди транспорт своей мечты!</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "DromHeadder"
}
</script>

<style scoped>
.headder{
  background: hsl(353, 100%, 43%);
  display: block;
  position: fixed;
  top: 0;
  height: 75px;
  width: 100%;
}
.headder-logo{
  display: inline-block;
  width: 30%;
}
.headder-logo>img{
  width: 250px;
}
.sub_name{
  display: inline-block;
  width: 60%;
  color: white;
  vertical-align: super;
}
.sub_name>h2{
  display: inline-block;
  vertical-align: bottom;
}
</style>