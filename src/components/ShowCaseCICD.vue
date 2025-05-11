<template>
    <v-container fluid>
        <!-- Top section: Render the currently selected video -->
        <div class="video-container">
        
            <!--  <div style="padding:56.25% 0 0 0;position:relative;"> -->
            <div v-if="selectedVideo" style="padding:56.25% 0 0 0;position:relative;">
  
            <iframe :src="selectedVideoEmbedUrl" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" :title="selectedVideo.title"></iframe>
            </div>
        </div>



        <!-- ✅ FIXED Button Row -->
        <div class="link-row">
          <v-btn
            v-if="selectedVideo.github"
            icon
            :href="selectedVideo.github"
            target="_blank"
            title="GitHub Project"
          >
            <v-icon icon="fa-brands fa-github" />
          </v-btn>

          <v-btn
            v-if="selectedVideo.linkedin"
            icon
            :href="selectedVideo.linkedin"
            target="_blank"
            title="LinkedIn Article"
          >
            <v-icon icon="fa-brands fa-linkedin" />
          </v-btn>

          <v-btn
            v-if="selectedVideo.url"
            icon
            :href="selectedVideo.url"
            target="_blank"
            title="Watch on YouTube"
          >
            <v-icon icon="fa-brands fa-youtube" />
          </v-btn>
        </div>


  
  <!-- Bottom section: List of videos with clickable items -->
  
  <v-tabs
  v-model="selectedTab"
  background-color="transparent"
  class="custom-tabs"
  grow
  slider-color="black"
  >
    <v-tab value="demos">Demos</v-tab>
    <v-tab value="more">More</v-tab>
    <v-tab value="downloads">Downloads</v-tab>
 </v-tabs>


    <transition name="slide-fade" mode="out-in">
    <div :key="selectedTab">
        <div v-if="selectedTab === 'demos'" style="padding: 24px">


             <!-- Your demo list block -->
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
        
        </div>

        <!-- MoreTab block-->
        <div v-else-if="selectedTab === 'more'" style="padding: 24px">
          <div class="tab-text" v-html="formattedMoreContent"></div>
        </div>

        <!-- Donaloads block-->
        <div v-else-if="selectedTab === 'downloads'" style="padding: 24px">
                  <!-- {{ downloadsTabContent }} << bad display, no usded apr-2025-->
          <div class="tab-text" v-html="formattedDownloadsTabContent"></div>
        </div> 

    </div> <!-- end of select all-three-Tab block-->
    </transition>


 </v-container>
</template>
  


<script setup>
// New Style of API for Vue3

import { ref, computed ,onMounted} from 'vue'
import axios from 'axios' // e.g. googld drive api

// 1. Reactive State
const selectedTab = ref('demos')
const selectedVideoIndex = ref(0)
const videos = ref([])
const moreTabContent = ref('')
const downloadsTabContent = ref('')


onMounted(async () => {

  // log-01 : landing, someong comes
  try {
    // Log a landing event to your EC2 Flask server
    await axios.post('/api/upload_log', {
      tag: 'landing',
      data: {
        event: 'page_visit',
        source: 'ShowCaseCICD.vue',
        timestamp: new Date().toISOString(),
        user_agent: navigator.userAgent,
        action: 'entered_showcase'
      }
    })
    console.log('✅ Visitor log uploaded!')
  } catch (err) {
    console.error('❌ Failed to log visit', err)
  }


  // read video
  try {
    const res = await axios.get('/api/get_showcase_data')
    videos.value = res.data.tab1
    moreTabContent.value = res.data.tab2
    downloadsTabContent.value = res.data.tab3
  } catch (err) {
    console.error('❌ API fetch failed', err)
  } 
})
  /* << data hard-code >>   No Longer to use haha LOL apr-18-2025
                                                            const videos = ref([
                                                            {
                                                                title: 'Deploy EC2 + PostgreSQL + Flask API',
                                                                url: 'https://www.youtube.com/embed/_CSsxp-cTyY',
                                                                github: 'https://github.com/wolfmib/ja_DataSymphony/tree/main/Deploying%20EC2%20with%20PostgreSQL%20-%20show%20case',
                                                                linkedin: 'https://www.linkedin.com/pulse/aws-ec2-postgresql-flask-api-full-demo-setup-wei-che-hung-sbg0f',
                                                                len: '02:00'
                                                            },
                                                            {
                                                                title: 'Deploy EC2 + PostgreSQL + Flask API',
                                                                url: 'https://www.youtube.com/embed/_CSsxp-cTyY',
                                                                github: 'https://github.com/wolfmib/ja_DataSymphony/tree/main/Deploying%20EC2%20with%20PostgreSQL%20-%20show%20case',
                                                                linkedin: 'https://www.linkedin.com/pulse/aws-ec2-postgresql-flask-api-full-demo-setup-wei-che-hung-sbg0f',
                                                                len: '03:43'
                                                            }
                                                            ])

                                                            // ✅ Tab 2 Tab3 Content
                                                            const moreTabContent = ref('👋 Hello More Content!')
                                                            const downloadsTabContent = ref('📥 Hello Download Section!')
*/


// 2. Computed property 
const selectedVideo = computed(() => videos.value[selectedVideoIndex.value] || {})


// 3. Method for selection
function selectVideo(index) {
  selectedVideoIndex.value = index
}

// Handlt tab chang line issue 
const formattedMoreContent = computed(() => {
  return moreTabContent.value.replace(/\r?\n/g, '<br>')
})

const formattedDownloadsTabContent = computed(() =>{
  return downloadsTabContent.value.replace(/\r?\n/g, '<br>')
})


// 4. Issue-apr-26, fixed youtube/embed/video-id 
const selectedVideoEmbedUrl = computed(() => {
  const url = selectedVideo.value.url || ''

  // youtu.be/abc123
  if (url.includes('youtu.be/')) {
    const id = url.split('youtu.be/')[1]
    return `https://www.youtube.com/embed/${id}`
  }

  // watch?v=abc123
  if (url.includes('watch?v=')) {
    const id = url.split('watch?v=')[1].split('&')[0]
    return `https://www.youtube.com/embed/${id}`
  }

  // already embed or invalid
  return url
})


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



.link-row {
  margin-top: 12px;
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-bottom: 12px;
}

.link-row .v-btn {
  background: none !important;
  box-shadow: none !important;
  border-radius: 0 !important;
  padding: 0;
  min-width: auto;
}

.link-row .v-btn:hover .v-icon {
  color: #FFA500 !important; /* Diablo-style orange */
  text-shadow: 0 0 5px #FFA500;
}

.link-row .v-icon {
  font-size: 28px;
  color: black;
  transition: all 0.3s ease;
}


  
  .v-list-item-title {
    font-weight: bold;
  }



  /* Make it like the udemy likce UI no Blue fill- color*/
  .custom-tabs {
  background-color: white;
  border-bottom: 1px solid #e0e0e0;
}

.custom-tabs .v-tab {
  color: #333;
  font-weight: 600;
  text-transform: uppercase;
  padding: 12px 16px;
  transition: background-color 0.2s;
}

.custom-tabs .v-tab:hover {
  background-color: #f5f5f5; /* Light gray on hover */
}

.custom-tabs .v-tab--selected {
  border-bottom: 2px solid black !important; /* Underline for selected tab */
  background-color: white !important;
  color: black;
}



/* make the acito slower */
.slide-fade-enter-active {
  transition: all 0.8s ease;
}
.slide-fade-leave-active {
  transition: all 0.4s ease;
  opacity: 0;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-20px); /* top-down effect */
}
.slide-fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}

/* tab-2 change line context */
.tab-text {
  font-size: 16px;
  line-height: 1.6;
  white-space: normal;
}



  </style>
  