<template>
  <v-container fluid>
    <!-- Top section: Render the currently selected video -->
    <div class="video-container">
     
      <div style="padding:56.25% 0 0 0;position:relative;">
        <iframe :src="selectedVideo.url" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" :title="selectedVideo.title"></iframe>
      </div>
    </div>

    <!-- Bottom section: List of videos with clickable items -->
    <v-row>
      <v-col cols="12">

<v-tabs v-model="selectedTab" background-color="primary">
  <v-tab value="lectures">Lectures</v-tab>
  <v-tab value="more">More</v-tab>
</v-tabs>

<v-tabs-items v-model="selectedTab">
  <!-- Lectures Tab Content -->
  <v-tab-item value="lectures">
    <v-list two-line>
      <v-list-item v-for="(video, index) in videos" :key="index" @click="selectVideo(index)" class="video-list-item">
        <v-list-item-content>
          <v-list-item-title>{{ index + 1 }}. {{ video.title }}</v-list-item-title>
          <v-list-item-subtitle class="gray-text">Video - {{ video.len }} mins</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-icon>mdi-play-circle-outline</v-icon>

        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-tab-item>

  <!-- Downloads Tab Content -->
  <v-tab-item value="downloads">
   
  </v-tab-item>

  <!-- More Tab Content -->
  <v-tab-item value="more">
    
  </v-tab-item>
</v-tabs-items>


      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      selectedTab: 'lectures', // For tabs like Lectures, Downloads, etc.
      selectedVideoIndex: 0, // The index of the currently selected video
      videos: [
        {
          title: 'Part1-01 Using AWS Cloud 9 to EC2  (version 2.0)',
          url: 'https://player.vimeo.com/video/952672413?badge=0&autopause=0&player_id=0&app_id=58479',
          len: "03:43",
        },
        {
          title: 'Part1-02 AWS_DEMO_Generated_Data', // AppID is johnny: 58479
          url: 'https://player.vimeo.com/video/987972643?badge=0&autopause=0&player_id=0&app_id=58479',
          len: "01:50",
        }
      ]
    };
  },


  
  computed: {
    selectedVideo() {
      return this.videos[this.selectedVideoIndex];
    }
  },
  methods: {
    selectVideo(index) {
      this.selectedVideoIndex = index;
    }
  }
}
</script>

<style scoped>
.video-container {
  margin-bottom: 20px;
}

.video-list-item {
  cursor: pointer;
  transition: background-color 0.3s;
}

.video-list-item:hover {
  background-color: #f0f0f0;
}

.gray-text {
  color: gray;
}

iframe {
  width: 100%;
  height: 400px;
}

.v-list-item-title {
  font-weight: bold;
}
</style>
