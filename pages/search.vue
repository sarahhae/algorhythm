// Line 8: attr for list of sounds with the key of sound id. On click, load sound id to audio player. Display sound name
// Line 14: :ref="`player-${result.name}`" controls ? // vue-audio // vue-audio-visual

<template>
  <div>
    <form action="#" @submit.prevent="onSubmit">
      <div class="input-container">
        <input class="searchTerm" placeholder="Enter search term..." v-model="searchTerm" />
        <button class="submit">Submit</button>
      </div>

      <div>
        <audio :src="currentUri" controls></audio>
      </div>

    <div class="result-container">
      <a class="result-item" v-for="(result, i) in this.resultList" :key="i" @click.prevent="loadSound(result.id)">{{ result.name }}</a>
    </div>
    </form>
  </div>
</template>

<script>
const axios = require('axios'); // create variable for axios. require = import
const apiKey = 'P8qswr1eFfh1Zv1we6eg3ZwbaDXlxLlo0CqAWSfK'; // create apikey variable. No need for ENV file

export default {
  name: 'search',
  data() {
    return {
      searchTerm: '', // Search input for sound
      resultList: [], // An array of sounds
      currentUri: '' // Current sound to play on audio
    }
  },
  methods: {
    loadSound(id) {
      axios.get(`https://freesound.org/apiv2/sounds/${ id }/?token=${ apiKey }`).then(( responseData ) => {
        console.log(responseData.data);
        this.currentUri = responseData.data.download
      })
    },
    onSubmit() {
      axios.get(`https://freesound.org/apiv2/search/text/?query=${ this.searchTerm }&token=${ apiKey }`).then(( responseData ) => {
        console.log('just the array to list over', responseData.data.results );
        console.log('full response from api:', responseData);
        this.resultList = responseData.data.results
      });
    }
  }
}
</script>

<style>

  body {
    /* background: rgb(199,69,252);
    background: linear-gradient(180deg, rgba(199,69,252,0.40800070028011204) 0%, rgba(0,0,0,1) 34%); */
    background: rgb(112,112,112);
    background: linear-gradient(180deg, rgba(112,112,112,1) 0%, rgba(0,0,0,1) 19%);
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

  .result-item {
    margin: 1rem;
    background: black;
    color: ghostwhite;
    border-radius: 20px;
    padding: 2.5rem;
    max-width: 450px;
  }

  .result-container {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 450px;
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
    /* max-width: 200px;
    display: flex;
    margin: 0 auto;
    margin-top: 3rem;
    margin-bottom: 3rem;
    padding: 0.77rem;
    padding-left: 2rem;
    padding-right: 2rem;
    background: grey;
    outline-color: grey;
    border: grey;
    text-align: center;
    color: lightgrey;
    border-radius: 5px; */
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
  }

  .submit {
    /* max-width: 200px;
    padding: 0.5em;
    padding-left: 2rem;
    padding-right: 2rem;
    border-radius: 5px;
    margin: 0 auto; */
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
  }

  audio {
    margin: 0 auto;
    margin-top: 3rem;
    margin-bottom: 2rem;
    display: grid;
    outline: none;
  }

</style>
