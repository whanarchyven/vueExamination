<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyButton"
}
</script>

<style scoped>
button{
  align-self: flex-end;
  margin-top: 15px;
  padding: 10px 15px;
  background:transparent;
  border: 1px solid green;
  cursor: pointer;
  font-family: Raleway;
  font-weight: bold;
}
button:hover{
  background: green;
  color: white;
}
</style>