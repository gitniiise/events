import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '@/views/EventListView.vue'
import EventDetailsView from "@/views/EventDetailsView.vue";
import EventCreateView from "@/views/EventCreateView.vue";
import AboutView from "@/views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView
    },
    {
      path: '/event/:id',
      name: 'event-details',
      props: true,
      component: EventDetailsView
    },
    {
      path: '/event-create',
      name: 'event-create',
      component: EventCreateView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router
