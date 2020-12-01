<template>
  <div class="container">
    <div>
    <div class="navigation">
      <NuxtLink class="route" to="/about">About</NuxtLink>
    </div>

    <div class="heading">
      <h1>Landing Page</h1>
      <h3>This page will have the Spotify authentication login page</h3>
    </div>
    </div>
  </div>
</template>

<script>
import Vuesax from 'vuesax';

export default {
}
</script>

/* <style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 55px;
  color: #35495e;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 25px 0;
} */

 .subtitle {
  font-weight: 300;
  font-size: 1.1rem;
  color: #526488;
  word-spacing: 2px;
  padding-bottom: 15px;
  max-width: 600px;
}

.subtitle a {
  font-weight: 500;
  color: inherit;
}

.links {
  padding-top: 15px;
  margin-bottom: 20px;
}

.content-logos {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 500px;
}

.plus {
  font-size: 2.5rem;
  margin: 15px;
  color: #35495e;
}

.h3 {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-weight: 400;
  margin: 10px;
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
