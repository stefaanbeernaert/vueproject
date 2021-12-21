<template>

    <div id="nav">
      <router-link class="ms-2" :to="{name:'TicketDetails', params:{id}}">&#128513; Details </router-link>
      <router-link class="ms-2" :to="{name:'TicketEdit', params:{id}}">&#128514; Edit </router-link>
      <router-link class="ms-2" :to="{name:'Register', params:{id}}">&#128516; Register </router-link>
      <router-view :event="event"></router-view>
    </div>


</template>

<script>
import TicketService from "../services/TicketService";



export default {
  name: "TicketDetails",
  props:["id"],
  data(){
    return{
      event:null,
    }
  },
  created() {
    TicketService.getEvent(this.id).then(response => {
      this.event = response.data;
    }).catch(error => {
      console.log(error);
      this.$router.push({
        name: '404Resource',
        params: { resource: 'event'}
      })
    })
  }
}
</script>