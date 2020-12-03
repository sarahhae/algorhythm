<template>
  <div>
    <div>
      <div class="nav-bar">
        <div class="vinyl">
          <img src="../assets/vinyl.svg.png" alt="vinyl" height="100px">
          <NuxtLink class="name" to="/">Algo Rhythm</NuxtLink>
        </div>
        <NuxtLink class="route" to="/search">Search</NuxtLink>
        <NuxtLink class="route" to="/collection">Collection</NuxtLink>
      </div>

      <div class="heading">
        <h1>What is Alog-Rhythm?</h1>
        <h3>Search and download new boom-chica-wow-wows and skrrrrts.</h3>
      </div>
      <div class="description">
        <p>Algo-Rhythm is a personal music app to explore new beats and rhythm to
          download for mixing music. Find sounds from searching up techno, bass,
          country, rock, funk or even cows mooing and birds chirping! Adding them
          to your collections can let you keep track of all your favorite sounds
          to play/preview and download. </p>
        </div>
      </div>
    </div>
  </template>

  <style>
  body {
    background: rgb(112,112,112);
    background: linear-gradient(180deg, rgba(112,112,112,1) 0%, rgba(0,0,0,1) 19%);
    min-height: 100vh;
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
  }

  .heading {
    margin: 0 auto;
  }

  h1 {
    padding: 1em;
    font-size: 400%;
    color: ghostwhite;
  }

  h3 {
    color: white;
    padding: 4rem;
    padding-top: 0;
    font-weight: 900;
    font-size: 30px;
  }

  .description {
    padding: 4rem;
    font-size: 30px;
    font-weight: 900;
  }

  p {
    color: ghostwhite;
    font-weight: 800;
    font-size: 40px;
  }
  </style>
