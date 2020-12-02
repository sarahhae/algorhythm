<Template>
  <div>
    <!-- Navigation  -->
    <div class="nav-bar">
      <h2 class="name">Algo Rhythm</h2>
      <NuxtLink class="route-s" to="/about">About</NuxtLink>
      <NuxtLink class="route-s" to="/search">Search</NuxtLink>
    </div>

    <h2>Collection of Sounds</h2>
    <div v-for="(name, s) in collection">
      <p>
        <span class="collection">{{ result.name }}</span>
        <button @click="removeSound(n)">Remove</button>
      </p>
    </div>
    
    <p>
      <button @click="addSound">+</button>
    </p>
  </div>
</Template>

<script>
import Vue from 'vue';

const axios = require('axios'); // create variable for axios. require = import
const apiKey = 'P8qswr1eFfh1Zv1we6eg3ZwbaDXlxLlo0CqAWSfK'; // create apikey variable

export default {
  // const collection = new Vue({
  el: '#collection',
  data: {
    sounds: [],
    newSound: null
  },
  mounted() {
    if (localStorage.getItem('sound')) {
      try {
        this.sounds = JSON.parse(localStorage.getItem('sound'));
      } catch(e) {
        localStorage.removeItem('sound');
      }
    }
  },
  methods: {
    addSound() {
      if (!this.newSound) {
        return;
      }
      this.sounds.push(this.newSound);
      this.newSound = '';
      this.saveSounds();
    },
    removeSound(x) {
      this.sounds.splice(x, 1);
      this.saveSounds();
    },
    saveSounds() {
      const parsed = JSON.stringify(this.sounds);
      localStorage.setItem('sounds', parsed);
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');

body {
  /* background: rgb(199,69,252);
  background: linear-gradient(180deg, rgba(199,69,252,0.40800070028011204) 0%, rgba(0,0,0,1) 34%); */
  background: rgb(112,112,112);
  background: linear-gradient(180deg, rgba(112,112,112,1) 0%, rgba(0,0,0,1) 19%);
  min-height: 100vh;
}

.nav-bar {
  background: #7474ff;
  padding: 23px;
  min-height: 70px;
  width: 100%;
  text-align: right;
}

.name {
  font-family: 'Monoton', cursive;
  text-align: left;
  color: white;
  font-size: 40px;
  font-weight: 800;
  width: 300px;
}

.route-s {
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

.result-item {
  margin: 1rem;
  background: black;
  color: ghostwhite;
  border-radius: 20px;
  padding: 2.5rem;
  max-width: 450px;
  border: 1px solid ghostwhite;
}

.result-container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 450px;
}

.header-search {
  color: white;
  font-size: 96px;
  font-weight: 900;
  text-align: center;
}

form {
  margin: 0 auto;
  max-width: 450px;
}

.input-container {
  display: flex;
  max-width: 350px;
  margin: 0 auto;
  margin-top: 2rem;
}

.searchTerm {
  height: 40px;
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;
  border: 3px solid transparent;
  -webkit-transition: border .2s ease-in-out;
  transition: border .2s ease-in-out;
  width: calc(100% - 40px);
  padding: 7px;
  border-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  color: white;
  background: #bdbdbd;
  outline-color: #bdbdbd;
  border: 1px solid lightgrey;
  border-right: none;
  font-size: large;
  font-weight: 500;
}

.submit {
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  border-radius: 5px;
  height: 40px;
  width: 95px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background-color: #7474ff;
  outline-color: #7474ff;
  border: #7474ff;
  -webkit-transition: background-color .3s ease-in-out;
  transition: background-color .3s ease-in-out;
  color: white;
  font-size: medium;
  font-weight: 400;
}

audio {
  margin: 0 auto;
  margin-top: 3rem;
  margin-bottom: 2rem;
  display: grid;
  outline: none;
}

</style>
