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
      <h1>About Page</h1>
      <h3>Lorem ipsum dolor sit amet!</h3>
    </div>
    <div class="description">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
        dignissimos repudiandae ratione eum quibusdam esse! Eveniet, quo consectetur,
        impedit a dolorem nostrum numquam eligendi blanditiis mollitia vero iure,
        enim cum!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
        similique iste ullam tenetur perspiciatis, enim cum esse nulla quos in. Saepe
        amet autem atque possimus odit deserunt laborum alias voluptate.</p>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat dicta
        itaque eligendi velit provident magnam necessitatibus quo, dolorem eius
        odit modi nobis perspiciatis cum, iure corporis vitae reiciendis quae
        excepturi.Loream</p>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
        consectetur necessitatibus, fugit, adipisci aut harum libero suscipit
        voluptate eum ipsum deserunt atque, asperiores, reiciendis accusamus
        doloremque labore nemo quia assumenda.</p>
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
  }
</style>
