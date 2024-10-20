<template>
  <v-app id="home">
    <NavBarShowCaseAwsGlue />
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
              
               <v-img :src="require('@/assets/john.jpg')" alt="ig-photo2" contain max-height="300"></v-img>
            
            </div>
          </v-col>
         </v-row>
       </div>


      <v-row>
        <!-- Image container on the left -->
        <v-col cols="12" md="6">
          <div class="image-container">
            <div class="egg">
            <!-- Correct image loading with require() -->
            <v-img :src="require('@/assets/certificate_one.jpg')" alt="ig-photo2" contain max-height="300"></v-img>
            </div>
          </div>
        </v-col>
        <!-- Text container on the right -->
        <v-col cols="12" md="6" mb="6" mt="6">
<div id="about" class="text-container">
  <h1>AWS-Glue-Showcase</h1>
  <p>This series focuses on using <strong class="highlight">AWS</strong> to build scalable and efficient data workflows. We start by generating data and storing it in the <strong>S3 Raw Layer</strong>, and then proceed with <strong>AWS Glue</strong> to perform ETL (Extract, Transform, Load) operations, moving the data to the <strong>S3 Analytic Layer</strong>.</p>

  <p>You'll learn how to automate the creation of a <strong>Data Catalog</strong> using AWS Glue's <strong>auto-crawler</strong>, and explore how to use <strong>AWS Athena</strong> to perform SQL-based data analysis. This allows for fast and efficient data exploration and pre-checking before further processing.</p>

  <p>Finally, we'll integrate the analyzed data into <strong>Amazon QuickSight</strong> to create interactive and insightful <strong>Dashboards</strong> for visualizing the results, empowering data-driven decision-making.</p>

  <!-- Social media icons or contact buttons can be added here -->
</div>

        </v-col>
      </v-row>






      
      <!-- Add margin-top to the second row -->
      <v-row class="mt-6"> 
            <v-col cols="12" >
              <SectionHeader header-text="Lectures: AWS Glue Series"/>
              <div id="lectures-one">
                    <div class="video-container">
                        <!-- Add the AWS Glue showcase content or component here -->
                        <ShowCaseAwsGlue />
                </div>
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

import NavBarShowCaseAwsGlue from '../components/NavBarShowCaseAwsGlue.vue';
import ShowCaseAwsGlue from '../components/ShowCaseAwsGlue.vue'  // Import your component

import SiteFooter from '../components/SiteFooter.vue'; // Import Footer component
import SiteContactEmail from '../components/SiteContactEmail.vue'; // Import Contact component
import SectionHeader from '../components/./SectionHeader.vue'; // Adjust the path as necessary



//import LiveOnMarsComponent from '../components/LiveOnMarsComponent.vue'; // Game Server
export default defineComponent({
  name: 'HomeView',

  data() {
    return {
      iframeLink: 'https://one.game.johnny-alin-data.com/',
      iframeLoadError: false,
      isMobile: false,
      iframeLoadTimeout: null,
    };
  },

//
  components: {
    NavBarShowCaseAwsGlue,
    ShowCaseAwsGlue,
    SiteFooter, // Register Footer component
    SiteContactEmail,
    SectionHeader,
    
  },

  mounted() {
    this.isMobile = this.checkIfMobile(); // Call the function to check if the user is on mobile
    this.setupIframeTimeout(); // Set up a timeout to check iframe load status
  },

  methods: {
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
