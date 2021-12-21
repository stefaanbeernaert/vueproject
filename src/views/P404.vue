<template>
  <h1>De {{ resource }} die u zoekt is niet langer aanwezig </h1>
  <router-link class="btn btn-success my-5" :to="{name:'home'}">Home</router-link>
</template>
<script>

export default {
  props:{
    resource:{
      type:String,
      required:true,
      default:'pagina'
    }
  }
}
</script>