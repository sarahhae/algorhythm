<template>
  <div>
    <!-- Navigation  -->
    <div class="nav-bar">
      <div class="vinyl">
      <img src="../assets/vinyl.svg.png" alt="vinyl" height="100px">
      <NuxtLink class="name" to="/">Algo Rhythm</NuxtLink>
      </div>
      <NuxtLink class="route" to="/about">About</NuxtLink>
      <NuxtLink class="route" to="/search">Search</NuxtLink>
    </div>
    <!-- Display list of sounds added to collections -->
    <div>
      <h1>Sound Collection</h1>
      <table class="soundList">
        <thead>
          <tr>
            <th>Title</th>
            <th>Audio</th>
            <th>BPM</th>
            <th></th>
          </tr>
        </thead>

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

.vinyl {
  display: flex;
}

img {
  margin: 0.8rem;
}

.name {
  font-family: 'Monoton', cursive;
  text-align: left;
  color: white;
  font-size: 37px;
  font-weight: 800;
  width: 300px;
  margin-left: 0.3em;
  margin-top: 7px;
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
  margin-bottom: 50px;
}

td, th {
  color: white;
  padding: 1rem;
}

td {
  background: #3f3f3f;
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

audio {
  margin: 0 auto;
  margin-top: 3rem;
  margin-bottom: 2rem;
  display: grid;
  outline: none;
}

</style>
