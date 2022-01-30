<template>
  <input :value="modelValue" @input="updateInput" type="text">
</template>

<script>
export default {
  name: "MyInput",
  props:{
    modelValue:[String, Number]
  },
  methods:{
    updateInput(event){
      this.$emit('update:modelValue',event.target.value)
    }
  }
}
</script>

<style scoped>
input{
  width:96%;
  border: 2px solid black;
  padding: 10px 15px;
  margin-top: 10px;
}
</style>