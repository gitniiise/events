<script setup>
import { ref, onMounted } from 'vue'
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'
import {RouterLink} from "vue-router";

const events = ref(null)

onMounted(() => {
  EventService.getEvents()
      .then((response) => {
        events.value = response.data
      })
      .catch((error) => {
        console.log(error)
      })
})
</script>

<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
  <RouterLink :to="{ name: 'event-create' }" class="button">Create new Event</RouterLink>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>