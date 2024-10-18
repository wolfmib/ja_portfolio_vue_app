<template>
  <div class="section-header">
    <h1>{{ headerText }}</h1>
    <hr/>
  </div>
</template>

<script>
export default {
  props: {
    headerText: String
  }
}
</script>

<style scoped>
.section-header h1 {
  text-align: center;
  margin-bottom: 0.5rem; /* Adjust the margin to control spacing */
}

.section-header hr {
  width: 80%; /* Control the width of the horizontal line */
  margin: auto; /* Center the line horizontally */
  border: 0.5px solid black; /* Adjust the thickness and color of the line */
}

@media (max-width: 600px) {
  .section-header hr {
    width: 90%; /* Wider line on smaller screens */
  }
}
</style>
