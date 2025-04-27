<template>
    <v-tabs v-model="tab" bg-color="primary">
      <v-tab value="demos">Demos</v-tab>
      <v-tab value="more">More</v-tab>
      <v-tab value="downloads">Downloads</v-tab>
    </v-tabs>
  
    <v-window v-model="tab">
      <v-window-item value="demos">
        <div style="padding: 24px;">📼 Hello from Demos!</div>
      </v-window-item>
      <v-window-item value="more">
        <div style="padding: 24px;">👋 Hello from More!</div>
      </v-window-item>
      <v-window-item value="downloads">
        <div style="padding: 24px;">📥 Hello from Downloads!</div>
      </v-window-item>
    </v-window>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const tab = ref('demos')
  </script>
  