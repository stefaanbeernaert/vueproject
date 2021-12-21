<template>

  <div v-if="event" class="card border-dark mb-3 d-block mx-auto" style="max-width:18rem">
    <div class="card-header">
      {{ event.title }}
    </div>
    <div class="card-body text-dark">
      <h5 class="card-title">{{event.date}} - {{event.time}}</h5>
      <p class="card-text">
        {{event.description}}
      </p>
      <p class="alert-danger">Locatie:{{event.location}}</p>
    </div>
  </div>

</template>

<script>




export default {

  props:["event"],


}
</script>
<style scoped></style>