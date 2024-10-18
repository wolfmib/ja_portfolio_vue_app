
<template>
  <v-container>
    <v-row>
      <!-- First Row of Skills -->
      <v-col cols="12" md="4" v-for="(skill, index) in firstRowSkills" :key="'skill1-' + index">
        <div class="skill-block">
          <v-icon :class="skill.icon">{{ skill.faIcon }}</v-icon>
          <h3>{{ skill.title }}</h3>
          <hr class="skill-separator">
          <p>{{ skill.details }}</p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <!-- Second Row of Skills -->
      <v-col cols="12" md="4" v-for="(skill, index) in secondRowSkills" :key="'skill2-' + index">
        <div class="skill-block">
          <v-icon :class="skill.icon">{{ skill.faIcon }}</v-icon>
          <h3>{{ skill.title }}</h3>
          <hr class="skill-separator">
          <p>{{ skill.details }}</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      firstRowSkills: [
        { title: "Languages", details: "Python, SQL, Golang, Bash, Javascript, C ", faIcon: 'fas fa-code', icon: 'icon-languages' },
        { title: "Databases", details: "MongoDB, PostgreSQL, MySQL", faIcon: 'fas fa-database', icon: 'icon-databases' },
        { title: "Data Frameworks", details: "Selenium, Vue,  Scikit-Learn, TensorFlow", faIcon: 'fas fa-cogs', icon: 'icon-data-frameworks' }
      ],
      secondRowSkills: [
        { title: "Operating Systems & Tools", details: "AWS, Jira, Agile,  GCP, Git,", faIcon: 'fas fa-tools', icon: 'icon-tools' },
        { title: "Web Technologies", details: "Vue, Node, API, Flask, HTML ", faIcon: 'fas fa-globe', icon: 'icon-web-tech' },
        { title: "Design", details: "FPGA Software Design / Platform Feature Design/ Web Design", faIcon: 'fas fa-paint-brush', icon: 'icon-design' }
      ]
    };
  }
};
</script>





<style scoped>
.skill-block {
  text-align: center;
  margin-top: 20px;
}

.skill-block h3 {
  margin-top: 10px;
}

.skill-separator {
  width: 60%; /* Change based on your design needs */
  margin: 10px auto; /* Centers the separator and adds space above and below */
}

.icon-languages, .icon-databases, .icon-data-frameworks, .icon-tools, .icon-web-tech, .icon-design {
  color: #FFA500; /* Example color */
}
</style>

