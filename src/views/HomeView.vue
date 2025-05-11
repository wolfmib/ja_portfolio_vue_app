
<!--HomeView.vue-->
<template>
  <v-app id="home">
    <NavBar />
    <v-container fluid>
       <div class="head">
         <v-row>
           <v-col cols="5"> 

<!-- 
  <h1 class="text-grey">Bonjour,</h1>
  <h1 class="text-white">I'M JOHNNY</h1>
  <span class="text-grey"></span>Data Scientist & Data Engineer & AI Python Developer & Gaming Actuary & Data Analytics<br />
-->

             <div v-if="contextSectionHello.left_block"  style="position: relative" class="mt-16">
               <h1 class="text-grey">{{ contextSectionHello.left_block.line1 }}</h1>
               <h1 class="text-white">{{ contextSectionHello.left_block.line2 }}</h1>
               <span class="text-grey"></span>{{ contextSectionHello.left_block.line3 }} <br />

               <v-btn @click="scroll('contact')" tile dark class="text-yellow mt-8" variant="outlined">{{ contextSectionHello.left_block.contact_button }}</v-btn>
             </div>
           </v-col>
           <v-col cols="2" >
           <div style="position: absolute; color:white; z-index: 9999; bottom: 0; margin-left: auto; margin-right: auto; left: 0; right: 0; text-align: center;">    

              <i class="fas fa-angle-double-down" style="color: white; position: absolute; z-index: 9999; bottom: 0; left: 0; right: 0; text-align: center;"></i>

          </div>
           </v-col>

          <v-col cols="5"> 
            <div style="position: relative; color:white; z-index: 9999;" class="mt-16">
              <v-img src="gan1.jpg" alt="ig-photo1" contain max-height="300"></v-img>
            </div>
          </v-col>
         </v-row>
       </div>


      <v-row>
        <!-- Image container on the left -->
        <v-col cols="12" md="6">
          <div class="image-container">
             <div class="egg" >
                      <v-img src="gan2_v1.png" alt="ig-photo2"  contain max-height="350"></v-img>
             </div>
          </div>
        </v-col>
        <!-- Text container on the right -->
        <v-col cols="12" md="6">
          <div v-if="contextSectionHello.right_block" id="about" class="text-container">
              <h1>{{ contextSectionHello.right_block.greeting }}</h1>

              <p v-for="(para, index) in contextSectionHello.right_block.paragraphs"
                :key="index"
                v-html="formattedParagraph(para)">
              </p>
      
 <!-- Social media icons or contact buttons can be added here -->
</div>
        </v-col>
      </v-row>
      <!-- Certificate --> 
      <v-row>
            <v-col cols="12" >
              <SectionHeader header-text="Certificate"/>
              <div id="certificates">
                       <SiteCertificate />
              </div>
            </v-col>
      </v-row>


      <!-- ShowCase-apr-18-2025 tempalte --> 
      <v-row>
            <v-col cols="12" >
              <SectionHeader header-text="Data-ShowCase:  AWS, Data, AI Automation, ETL, Analytics "/>
             
              <div id="ShowCaseCICD" style="margin-left: 8%; margin-right: 7%;">
                       <ShowCaseCICD />
              </div>
            </v-col>
      </v-row>




      <!-- Game Server IFrame -->
      <v-row v-if="!isMobile && !iframeLoadError">
        <v-col cols="12">
          <div class="game-container" style="display: flex; justify-content: center; align-items: center;">
            <iframe
              :src="iframeLink"
              frameborder="0"
              style="width: 70%; height: 600px; margin-left: 15%; margin-right: 15%;"
              allowfullscreen
              @load="onIframeLoad"
              @error="onIframeError"
              ref="gameIframe"
            ></iframe>
          </div>
        </v-col>
      </v-row>







      <!-- Skills --> 
      <v-row>
            <v-col cols="12" >
              <SectionHeader header-text="Skills"/>
              <div id="skills">
                       <SiteSkill />
              </div>
            </v-col>
      </v-row>
      <!-- Portfolio -->
      <v-row>
            <v-col cols="12" >
              <SectionHeader header-text="Portfolio"/>
              <div id="portfolio">
                       <SitePortfolio />
              </div>
            </v-col>
      </v-row>



      <!-- SiteContactEmail -->
      <v-row>
            <v-col cols="12" class="px-md-0 px-4">
          <SectionHeader header-text="Contact"/>
              <div id="contact">
                       <SiteContactEmail />
              </div>
            </v-col>
      </v-row>  


    <SiteFooter /> 
    </v-container>

  </v-app>
</template>

<script>
// google-server
import axios from 'axios' // e.g. googld drive api

// reactive , ref later
import { defineComponent } from 'vue';

// Components

import NavBar from '../components/NavBar.vue';
import SiteFooter from '../components/SiteFooter.vue'; // Import Footer component
import SiteSkill from '../components/SiteSkill.vue'; // Import Skill component
import SitePortfolio from '../components/SitePortfolio.vue'; // Import portfolio component
import SiteContactEmail from '../components/SiteContactEmail.vue'; // Import Contact component
import SectionHeader from '../components/./SectionHeader.vue'; // Adjust the path as necessary
import SiteCertificate from '../components/SiteCertificate.vue'
import ShowCaseCICD from '../components/ShowCaseCICD.vue'






//import TestTab from '../components/TestTab.vue'
//import LiveOnMarsComponent from '../components/LiveOnMarsComponent.vue'; // Game Server
export default defineComponent({
  name: 'HomeView',

  data() {
    return {
      iframeLink: 'https://one.game.johnny-alin-data.com/',
      iframeLoadError: false,
      isMobile: false,
      iframeLoadTimeout: null,
      contextSectionHello: {}  // this will hold the dynamic Bonjour section data
    };
  },

  components: {
    NavBar,
    SiteFooter, // Register Footer component
    SiteSkill,
    SitePortfolio,
    SiteContactEmail,
    SectionHeader,
    SiteCertificate,
    ShowCaseCICD,
    //TestTab,
  },

  mounted() {

    try {
      console.log("✅ MOUNTED called");
      this.isMobile = this.checkIfMobile(); // Call the function to check if the user is on mobile
      console.log("🚀 Starting  timeout()");
      this.setupIframeTimeout(); // Set up a timeout to check iframe load status
      console.log("🚀 ending  timeout()");
    } catch (e) {
      console.warn("💥 Error in mounted pre-axios:", e);
    }



    // ✅ Fetch Bonjour section from backend via /api/ proxy
    console.log("🚀 Starting Bonjour fetch");
    axios.get('/api/get_section_bonjour_data')
    .then((res) => {
      if (res.data && res.data.hero_intro) {
        this.contextSectionHello = res.data.hero_intro;
        console.log('✅ Bonjour section loaded:', this.contextSectionHello);
      } else {
        console.warn('⚠️ Unexpected data structure:', res.data);
      }
    })
    .catch((err) => {
      console.error('❌ API fetch failed:', err);
    });


  },

  methods: {

    formattedParagraph(para) {
    return `${para.text}<br><br>`;
    },

    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },

    checkIfMobile() {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      return /android|ipad|playbook|silk|iphone|ipod/i.test(userAgent);
    },

    setupIframeTimeout() {
      this.iframeLoadTimeout = setTimeout(() => {
        if (!this.iframeLoadError) {
          // If iframe is still trying to load after the timeout, trigger the error
          this.iframeLoadError = true;
        }
      }, 15000); // Set a longer timeout, e.g., 15 seconds
    },

    onIframeLoad() {
      // Clear the error flag and timeout if the iframe loads successfully
      this.iframeLoadError = false;
      if (this.iframeLoadTimeout) {
        clearTimeout(this.iframeLoadTimeout);
      }
    },

    onIframeError() {
      // Set the error flag if iframe encounters an error
      this.iframeLoadError = true;
      if (this.iframeLoadTimeout) {
        clearTimeout(this.iframeLoadTimeout);
      }
    },
  }
});




</script>




<!-- GLOBAL styles (affects v-html and global context) -->
 <!-- issue: changt he highlight to global so that v-html can loadit correctly  -->
<style >

.highlight {
    font-weight: bold;  /* Ensures the text is bold */
    color: #ff4500;    /* Change the color to something that stands out, e.g., a bright orange */
}

</style>


<!-- SCOPED styles (only for this component’s markup) -->
<style scoped>

.text-container {
  padding: 20px;  /* Default padding */
}

@media (max-width: 600px) { /* Adjust for small screens */
  .text-container {
    padding: 10px; /* Reduced padding on smaller screens */
  }
}

@media (min-width: 960px) { /* Adjust for medium to large screens */
  .text-container {
    padding: 30px; /* Increased padding on larger screens */
  }
}



.v-container{
  padding: 16px 0;
}



.head, .test-section {
  flex: 1 0 auto; /* Flex-grow, flex-shrink, flex-basis */
}
.SiteFooter {
  flex-shrink: 0; /* Prevents the footer from shrinking */
}


.test-section {
  height: 600px; /* Set a minimum height to allow for scrolling */
  border: 1px solid #ccc;
  margin: 20px 0;
  padding: 20px;
  background-color: #f9f9f9;
}



.head{
  position: relative;
  text-align: center;
  padding: 12px;
  margin-bottom: 6px;
  height: 400px;
  width: 100%;
  color: white;
}
.head:before{
  content: " ";
  position: absolute;
  top:0;
  left:0;
  height: 100%;
  width: 50%;
  background: black;
  transform: skew(0deg,5deg);

}

.head:after{
  content: " ";
  position: absolute;
  top:0;
  right:0;
  height: 100%;
  width: 50%;
  background: black;
  transform: skew(0deg,-5deg);
}







.egg {
  display: block;
  margin-left: auto; /* Center-align the egg div if no other content is beside it */
  margin-right: auto; /* Ensures it stays centered */
  margin-top: 50px;
  width: 355px; /* Fixed width might need adjustment on smaller screens */
  height: 300px;
  background-color: #FBDF7F;
  border-radius: 50% 50% 50% 50% / 65% 65% 35% 35%;
}





/* Media queries within the same component */


/* 
later:  head use 400 px to prevent runing out the view


@media (max-height: 500px) {
  .head {
    height: 50vh;
  }
}

@media (min-height: 800px) {
  .head {
    height: 35vh;
  }
}



@media (min-width: 1024px) and (min-height: 768px) {
  //Styles for devices that at least 1024x768 resolution 
}
*/

</style>
