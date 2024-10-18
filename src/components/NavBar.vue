<template>
  <v-app-bar app color="black" dark flat class="px-12">
    <v-btn>
      <v-icon color="orange" left class="mr-2">fas fa-dove</v-icon>
      <span class="icon-style">JOHNNY</span>
       <span> - </span>
      <span class="icon-style">Alin</span>
    </v-btn>
    <v-spacer></v-spacer>
    <div v-if="isMobile" class="mobile-menu">
      <!-- Scrollable container -->
      <div class="scroll-menu">
        <v-btn text @click="scroll('home')" class="menu-item text-orange">Home</v-btn>
        <v-btn text @click="scroll('about')" class="menu-item">About</v-btn>
        <v-btn text @click="scroll('skills')" class="menu-item">Skills</v-btn>
        <v-btn text @click="scroll('portfolio')" class="menu-item">Portfolio</v-btn>
        <v-btn text @click="scroll('contact')" class="menu-item">Contact</v-btn>
          <!-- Dummy element to extend the scrollable area -->
        <div class="dummy-element"></div>
      </div>
    </div>
    <template v-else>
      <!-- Desktop specific menu items -->
      <v-btn text @click="scroll('home')" class="text-orange">Home</v-btn>
        <v-btn text @click="scroll('about')" class="menu-item">About</v-btn>
        <v-btn text @click="scroll('skills')" class="menu-item">Skills</v-btn>
        <v-btn text @click="scroll('portfolio')" class="menu-item">Portfolio</v-btn>
        <v-btn text @click="scroll('contact')" class="menu-item">Contact</v-btn>
    </template>
  </v-app-bar>
</template>




<script >
import { ref, onMounted, onUnmounted } from 'vue';




export default {
  setup() {
    const isMobile = ref(window.innerWidth < 600);

    function handleResize() {
      isMobile.value = window.innerWidth < 600;
    }

    onMounted(() => {
      window.addEventListener('resize', handleResize);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', handleResize);
    });

    return { isMobile };
  },
  methods:{
      scroll(refName){
        const element = document.getElementById(refName);
        element.scrollIntoView({behavior: "smooth"});
      }
    }
}

 

</script>

<style scoped>
.icon-style {
    font-weight: bold;
    /*color: yellow;*/
    font-size: 18px;
    color: white; /* Starting color */
    animation: shimmer 2s 3 forwards; /* Run for 3 seconds, 2 times, and stop at end state */
}
@keyframes shimmer {
    0%, 100% {
        color: yellow; /* Start and end with yellow */
        text-shadow: 0 0 20px yellow, 0 0 30px yellow, 0 0 40px yellow, 0 0 50px yellow, 0 0 60px yellow, 0 0 70px yellow, 0 0 80px yellow;
    }
    50% {
        color: white; /* Transition to white at the midpoint */
        text-shadow: 0 0 10px white, 0 0 20px white, 0 0 30px yellow, 0 0 40px yellow, 0 0 50px yellow, 0 0 60px yellow, 0 0 70px yellow;
    }
}



.text-orange {
  color: orange; /* Ensures text is orange */
}

.mobile-menu .scroll-menu {
  display: flex;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
   padding-right: 20px; /* Add padding to the end of the scroll area */
}

.menu-item {
  flex: 0 0 auto;
  margin-right: 6px; /* Space between items */
}

.mobile-menu {
  width: 100%; /* Ensure it takes full width */
}

.scroll-menu {
  width: 100%; /* This ensures the scroll container spans the full width of its parent */
}


/* Hide scrollbar for aesthetic purposes */
.scroll-menu::-webkit-scrollbar {
  display: none;
}

.dummy-element {
  width: 200px;  /* Adjust width as needed to provide sufficient scrolling space */
  flex: 0 0 auto;  /* Ensures it doesn't grow or shrink */
}

</style>