<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Ticket v-for="event in events" :key="event.id" :event="event"></Ticket>
  </div>
</template>
