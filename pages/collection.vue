<template>
  <div>
    <!-- Navigation  -->
    <div class="nav-bar">
      <h2 class="name">Algo Rhythm</h2>
      <NuxtLink class="route" to="/about">About</NuxtLink>
      <NuxtLink class="route" to="/search">Search</NuxtLink>
    </div>
    <!-- Display list of sounds added to collections -->
    <!-- Add remove sound from list button -->
    <div>
      <h1>Sound Collection</h1>
      <table class="soundList">
        <thead>
          <tr>
            <th>Title</th>
            <th>Sound</th>
            <th>BPM</th>
            <th></th>
          </tr>
        </thead>
        <!-- <button @click="removeSound(result.name)">Remove</button> -->

        <tbody class="table-container">
          <tr v-for="(sound, i) in sounds" :key="i">
            <!-- List of sound name -->
            <td>{{ sound.name }}</td>
            <td>
              <div v-if="sound.download">
                <audio :src="sound.download" controls></audio>
              </div>
            </td>
            <!-- List of sound bpm (if available)-->
            <td width="75" class="center aligned">
              120bpm
            </td>
            <td><button>Remove</button></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import Vue from 'vue';

const axios = require('axios'); // create variable for axios. require = import
const apiKey = 'P8qswr1eFfh1Zv1we6eg3ZwbaDXlxLlo0CqAWSfK'; // create apikey variable

export default {
  data() {
    return {
      sounds: []
    }
  },
  mounted() {
    const sounds = JSON.parse(localStorage.getItem('collection')) || [];
    this.sounds = sounds
  },
  methods: {
    loadSound(sound) {
      axios.get(`https://freesound.org/apiv2/sounds/${ sounds.id }/?token=${ apiKey }`)
        .then(( responseData ) => {
          console.log(responseData.data);
          this.sounds = responseData.data;
          console.log(JSON.stringify(responseData.data));
        })
      },
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

.name {
  font-family: 'Monoton', cursive;
  text-align: left;
  color: white;
  font-size: 40px;
  font-weight: 800;
  width: 300px;
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

.soundList {
  margin: 0 auto;
  width: 700px;
  display: block;
}

td, th {
  color: white;
  padding: 1rem;
}

thead {
  background: #7474ff;
}

.header-search {
  color: white;
  font-size: 96px;
  font-weight: 900;
  text-align: center;
}

.input-container {
  display: flex;
  max-width: 350px;
  margin: 0 auto;
  margin-top: 2rem;
}

audio {
  margin: 0 auto;
  margin-top: 3rem;
  margin-bottom: 2rem;
  display: grid;
  outline: none;
}

</style>
