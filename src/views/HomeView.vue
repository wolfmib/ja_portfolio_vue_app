<template>
  <v-app id="home">
    <NavBar />
    <v-container fluid>
       <div class="head">
         <v-row>
           <v-col cols="5"> 
             <div style="position: relative" class="mt-16">
               <h1 class="text-grey">Bonjour,  </h1>
               <h1 class="text-white">I'M JOHNNY  </h1>
               <span class="text-grey"></span>Data Scientist & Data Engineer & AI Python Developer & Gaming Actuary & Data Analytics <br />

               <v-btn @click="scroll('contact')" tile dark class="text-yellow mt-8" variant="outlined">Contact me</v-btn>
             </div>
           </v-col>
           <v-col cols="2" >
           <div style="position: absolute; color:white; z-index: 9999; bottom: 0; margin-left: auto; margin-right: auto; left: 0; right: 0; text-align: center;">    

               <v-icon>fas fa-angle-double-down</v-icon>
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
          <div id="about" class="text-container">
<h1>Guten Tag!</h1>
<p>I am a Data Engineer with over 10 years of experience in <strong class="highlight">Python</strong>, <strong>Golang</strong>, and <strong>Bash scripting</strong>. I specialize in building complex data pipelines and scalable APIs on <strong class="highlight">AWS</strong> and GCP.</p>

<p>Currently focused on <strong>AI-driven solutions</strong>, I leverage <strong>Large Language Models (LLMs)</strong> and <strong>FAISS vector stores</strong> to develop advanced AI assistants and automate data workflows.</p>

<p>Skilled in scripting, database management, and scalable AI solutions, I am passionate about delivering impactful, data-driven technologies.</p>

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

      <!-- Game Server IFrame -->
      <v-row v-if="!isMobile">
        <v-col cols="12">
          <div class="game-container" style="display: flex; justify-content: center; align-items: center;">
            <iframe
              :src="iframeLink"
              frameborder="0"
              style="width: 70%; height: 600px; margin-left: 15%; margin-right: 15%;"
              allowfullscreen
              @error="iframeLoadError = true"
            ></iframe>
            <div v-if="iframeLoadError" style="color: goldenrod; text-align: center; margin-top: 20px;">
              Dear manager, please contact John in the contact section below to see the LLM-Demo.
            </div>
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
import { defineComponent } from 'vue';

// Components

import NavBar from '../components/NavBar.vue';
import SiteFooter from '../components/SiteFooter.vue'; // Import Footer component
import SiteSkill from '../components/SiteSkill.vue'; // Import Skill component
import SitePortfolio from '../components/SitePortfolio.vue'; // Import portfolio component
import SiteContactEmail from '../components/SiteContactEmail.vue'; // Import Contact component
import SectionHeader from '../components/./SectionHeader.vue'; // Adjust the path as necessary
import SiteCertificate from '../components/SiteCertificate.vue'
//import LiveOnMarsComponent from '../components/LiveOnMarsComponent.vue'; // Game Server

export default defineComponent({
  name: 'HomeView',

  data() {
    return {
      iframeLink: 'https://one.game.johnny-alin-data.com/',
      iframeLoadError: false,
      isMobile: false
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
  },

  mounted() {
    this.isMobile = this.checkIfMobile(); // Call the function to check if the user is on mobile
  },

  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },

    checkIfMobile() {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      return /android|ipad|playbook|silk|iphone|ipod/i.test(userAgent);
    }
  }
});



</script>




<style scoped>





.highlight {
    font-weight: bold;  /* Ensures the text is bold */
    color: #ff4500;    /* Change the color to something that stands out, e.g., a bright orange */
}




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
