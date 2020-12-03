<template>
  <div>
    <!-- Navigation  -->
    <div class="nav-bar">
      <h2 class="name">Algo Rhythm</h2>
      <NuxtLink class="route" to="/about">About</NuxtLink>
      <NuxtLink class="route" to="/collection">Collection</NuxtLink>
    </div>
    <div>
      <h1 class="header-search">Find your beat.</h1>

      <!-- Form input for sound search -->
      <form action="#" @submit.prevent="onSubmit">
        <div class="input-container">
          <input class="searchTerm"
          placeholder="Enter search term..."
          v-model="searchTerm" />
          <button class="submit">Submit</button>
        </div>
        <!-- audio player -->
        <div v-if="currentUri">
          <audio :src="currentUri" controls></audio>
        </div>
        <!-- Add sound button to save in to collections.vue page -->
        <a href="/collection">
          <button v-if="currentUri" @click="addSound(soundData.data)">Add sound</button>
        </a>
        <!-- Search results -->
        <div class="result-container">
          <!-- attr for list of sounds with the key of sound id. On click,
          load sound id to audio player. Display sound name -->
          <a class="result-item"
          v-for="(result, i) in this.resultList"
          :key="i"
          @click.prevent="loadSound(result.id)">
          {{ result.name }}
        </a>
      </div>
    </form>
  </div>
</div>
</template>

<script>
import Vue from 'vue';
const axios = require('axios'); // create variable for axios. require = import
const apiKey = 'P8qswr1eFfh1Zv1we6eg3ZwbaDXlxLlo0CqAWSfK'; // create apikey variable

export default {
  name: 'search',
  data() {
    return {
      searchTerm: '', // Search input for sound
      resultList: [], // An array of sounds
      currentUri: '', // Current sound to play on audio
      soundData: {}
    }
  },
  methods: {
    loadSound(id) {
      axios.get(`https://freesound.org/apiv2/sounds/${ id }/?token=${ apiKey }`)
        .then(( responseData ) => {
          console.log(responseData.data);
          this.currentUri = responseData.data.download;
          this.soundData = responseData.data;
          console.log(JSON.stringify(responseData.data));
        })
      },
      onSubmit() {
        axios.get(`https://freesound.org/apiv2/search/text/?query=${ this.searchTerm }&token=${ apiKey }`)
          .then(( responseData ) => {
            console.log('just the array to list over', responseData.data.results );
            console.log('full response from api:', responseData);
            this.resultList = responseData.data.results
          })
        },
        addSound() {
        // get existing sounds
        const sounds = JSON.parse(localStorage.getItem('collection')) || [];
        // add new sound
        sounds.push(this.soundData);
        // save to localStorage
        localStorage.setItem('collection', JSON.stringify(sounds));
        }
      }
    }
      </script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');

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

.heading {
  margin: 0 auto;
}

h1 {
  padding: 1em;
  font-size: 400%;
}

.result-container {
  display: grid;
  justify-content: center;
  grid-template-rows: 5fr 5fr 5fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}

.result-item {
  margin: 1rem;
  background: black;
  color: ghostwhite;
  padding: 2.5rem;
  border: 1px solid ghostwhite;
  max-width: 250px;
  max-height: 150px;
}

.header-search {
  color: white;
  font-size: 96px;
  font-weight: 900;
  text-align: center;
}

form {
  margin: 0 auto;
  max-width: 960px;
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
