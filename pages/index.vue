<template>
  <div class="container">
    <div class="heading">
      <h1 class="name">Algo Rhythm</h1>
      <h3 class="sub-heading">Find and discover beats for your next music</h3>
    </div>
    <div class="nav-bar">
      <NuxtLink class="route" to="/about">About</NuxtLink>
      <NuxtLink class="route" to="/search">Find Your Rhythm</NuxtLink>
    </div>
  </div>
</template>

<script>
import Vuesax from 'vuesax';

export default {
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.nav-bar {
  background: #7474ff;
  padding: 23px;
  min-height: 70px;
  width: 100%;
  text-align: right;
}

.route {
  text-decoration: none;
  font-size: 20px;
  font-weight: 400;
  color: white;
  padding: 23px 1em;
}

.name {
  font-family: 'Monoton', cursive;
  text-align: left;
  color: white;
  font-size: 40px;
  font-weight: 800;
  width: 300px;
}

h3.sub-heading {
  font-weight: 400;
  margin: 10px;
  padding-left: 30px;
}

.route {
  text-decoration: none;
  font-size: 110%;
  font-weight: bold;
  color: black;
  padding: 1em;
  margin-top: 1em;
}

.heading {
  margin: 0 auto;
}

h1 {
  padding: 1em;
  font-size: 400%;
  color: #5b3cc4;
}
</style>
