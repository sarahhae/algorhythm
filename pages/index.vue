<template>
  <div class="container">
    <div class="heading">
      <div class="index-page-header">
      <img class="vinyl-white" src="../assets/vinyl.svg.png" alt="vinyl" height="100px">
      <h2 class="name">Algo Rhythm</h2>
      </div>
      <h3 class="sub-heading">Discover beats and sounds for your next music</h3>
    </div>
    <div class="index-nav-bar">
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
body {
  /* background: rgb(199,69,252);
  background: linear-gradient(180deg, rgba(199,69,252,0.40800070028011204) 0%, rgba(0,0,0,1) 34%); */
  background: rgb(112,112,112);
  background: linear-gradient(180deg, rgba(112,112,112,1) 0%, rgba(0,0,0,1) 19%);
  min-height: 100vh;
}

.vinyl-white {
  filter: invert(1);
}

.index-page-header {
  display: flex;
  margin-left: 115px;
  margin-bottom: 20px;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.index-nav-bar {
  background: #7474ff;
  padding: 23px;
  min-height: 70px;
  width: 100%;
  text-align: right;
  border-radius: 50px 0px 0 50px;
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
  font-weight: 200;
  margin: 10px;
  text-align: left;
  margin-left: 70px;
  width: 471px;
}

.route {
  text-decoration: none;
  font-size: 20px;
  font-weight: 400;
  color: white;
  padding: 23px 1em;
}

.heading {
  margin: 0 auto;
}

h1 {
  padding: 1em;
  font-size: 400%;
}
</style>
