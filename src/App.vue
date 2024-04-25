<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink :to="{ name: 'event-list' }">Events</RouterLink> |
          <RouterLink :to="{ name: 'about' }">About</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style>
#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  accent-color: #429c73;
  --brand: #429c73;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
h2 {
  font-size: 20px;
}
button, a.button {
  background-color: #42b983;
  border-radius: 30px;
  padding: 10px;
  width: 10%;
  border: 0;
  color: white;
  font-weight: bolder;
  margin: 20px;
  cursor: pointer;
  text-decoration: none;
  font-size: smaller;
  display: inline-block;
  min-width: max-content;
}
button:hover, a.button:hover {
  background-color: #2c3e50;
}
</style>
