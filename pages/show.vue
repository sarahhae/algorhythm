<template>
  <div>
    <div>
      <div>
        <i></i> Sound List #1
      </div>
      <input readonly :value="result.name" />
    </div>

    <div>
      <div>
        <i></i> Sound List #2
      </div>
      <input readonly :value="result.name" />
    </div>
<!-- Edit name of sound -->
    <!-- <div class="actions">
      <router-link :to="{ name: 'edit', params: { id: this.$route.params.id}}">
        Edit sound name
      </router-link>
    </div> -->
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    name: 'show',
    data() {
      return {
        soundList: [],
        sound: ''
      }
    },
    async mounted() {
      // this.sound = await.getSound(this.$route.params.id); Dont understand
    }
  }
</script>

<style>
</style>
