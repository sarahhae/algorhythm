<template>
  <div>
    <!-- Navigation  -->
    <div class="nav-bar">
      <div class="vinyl">
        <img src="../assets/vinyl.svg.png" alt="vinyl" height="100px">
        <NuxtLink class="name" to="/">Algo Rhythm</NuxtLink>
      </div>
      <!-- NuxtLink = routes in nuxtjs -->
      <NuxtLink class="route" to="/about">About</NuxtLink>
      <NuxtLink class="route" to="/collection">Collection</NuxtLink>
    </div>
    <div>
      <h1 class="header-search">Find your beat.</h1>

      <!-- Form input for sound search -->
      <form action="#" @submit.prevent="onSubmit">
        <div class="input-container">
          <input class="searchTerm"
          placeholder="Search sound..."
          v-model="searchTerm" />
          <button class="submit">Submit</button>
        </div>
      </form>
      <div v-if="currentUri">
        <audio :src="currentUri" controls></audio>
      </div>
      <!-- display resultList, audio and button -->
      <!-- button: add sound to sound collection -->
      <div class="result-container">
        <a class="result-item"
        v-for="(result, i) in this.resultList"
        :key="i"
        @click.prevent="loadSound(result.id)">
        {{ result.name }}
        <div href="/collection">
          <button @click="addSound(soundData.data)">+</button>
        </div>
      </a>
    </div>
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
          // add sound to collections = @click-="addToCollection"
        }
      }
    }
    </script>

    <style>
    @import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');

    body {
      background: rgb(0,0,0);
      background: linear-gradient(0deg, rgba(0,0,0,1) 55%, rgba(238,238,238,1) 100%);
    }

    .nav-bar {
      background: #7474ff;
      padding: 23px;
      min-height: 70px;
      width: 100%;
      text-align: right;
    }

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
      text-decoration: none;
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
      background: #3f3f3f;
      color: ghostwhite;
      padding: 2.5rem;
      border-radius: 10px;
    }

    a.result-item:active {
      background: limegreen;
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
      margin: 2rem auto;
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
