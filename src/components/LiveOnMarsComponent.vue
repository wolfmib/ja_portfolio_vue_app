<template>
  <div>
    <h1>Live on Mars</h1>
    <p>Welcome to the Live on Mars page!</p>
    <!-- Embed the 3D scene from the game server using internal routing -->
    <iframe
      :src="gameServerURL"
      frameborder="0"
      style="width: 100%; height: 800px;"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'LiveOnMarsComponent',
  data() {
    return {
      // Use relative path to let Nginx handle the routing
      gameServerURL: '/live_on_mars' 
    };
  },
  mounted() {
  console.log('LiveOnMarsComponent mounted');
  },
  beforeUnmount() {
  console.log('LiveOnMarsComponent beforeUnmount');
  }


};
</script>

<style scoped>
/* You can adjust the iframe style here */
iframe {
  width: 100%;
  height: 800px;
  border: none;
}
</style>
