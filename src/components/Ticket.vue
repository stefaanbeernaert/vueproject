<template>

  <div class="card border-dark mb-3 d-block mx-auto" style="max-width:18rem">
    <router-link :to="{name:'TicketDetails',params:{id: event.id}}">
      <div>
        <div class="card-header">
          {{ event.title }}
        </div>
        <div class="card-body text-dark">
          <h5 class="card-title">{{event.date}}-{{event.time}}</h5>
          <p class="card-text">{{event.description}}</p>
          <p class="alert-danger">{{event.location}}</p>
        </div>
      </div>
    </router-link>
  </div>

</template>

<script>
export default {
  name: "Ticket",
  props:{
    event:Object
  },
  /* data(){
     return{
       event:{
         category:'concert',
         title:'tomorrowland',
         description:'festival op de Schorre',
         location:'Boom',
         date:'August 08 21',
         time:'9:00'
       }
     }
   }*/
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>