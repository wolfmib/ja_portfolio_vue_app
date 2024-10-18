<template>
  <v-container>
    <v-row>
      <!-- Loop through portfolio items -->
      <v-col cols="12" md="4" v-for="(project, index) in projects" :key="index">
        <v-card class="ma-5" elevation="5">
          <v-card-title>{{ project.title }}</v-card-title>
          <v-card-subtitle>
            <v-chip v-for="skill in project.skills" :key="skill"  small>{{ skill }}</v-chip>
          </v-card-subtitle>
          <v-card-text>{{ project.description }}</v-card-text>
          <v-card-actions>
            <v-btn color="primary" text @click="showDetails(index)" target="_blank">Read More</v-btn>
            <v-btn color="secondary" text :href="project.websiteUrl" target="_blank">Visit Website</v-btn>
          </v-card-actions>

          <!-- Dialog for showing more details -->
          <v-dialog v-model="project.dialog" persistent max-width="600px">
            <v-card>
              <v-card-title class="headline">{{ project.title }}</v-card-title>
              <v-card-text>{{ project.longDescription }}</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="project.dialog = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          
        </v-card>
      </v-col>


      <!-- Loop through portfolio items -->
      <!-- Loop through portfolio items -->
      <!-- Loop through portfolio items -->
      <v-col cols="12" md="4" v-for="(project, index) in sideProjects" :key="index">
        <v-card class="ma-5" elevation="5">
          <v-card-title>{{ project.title }}</v-card-title>
          <v-card-subtitle>
            <v-chip v-for="skill in project.skills" :key="skill"  small>{{ skill }}</v-chip>
          </v-card-subtitle>
          <v-card-text>{{ project.description }}</v-card-text>
          <v-card-actions>
            <v-btn color="primary" text @click="showDetailsSide(index)" target="_blank">Read More</v-btn>
            <v-btn color="secondary" text :href="project.websiteUrl" target="_blank">Visit Website</v-btn>
          </v-card-actions>

          <!-- Dialog for showing more details -->
          <v-dialog v-model="project.dialog" persistent max-width="600px">
            <v-card>
              <v-card-title class="headline">{{ project.title }}</v-card-title>
              <v-card-text>{{ project.longDescription }}</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="project.dialog = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          
        </v-card>
      </v-col>






    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: 'Vue3 & Vuetify Portfolio Web Application',
          skills: ['Vue3', 'Vuetify', 'AWS EC2', 'CloudWatch', 'AWS-CLI', 'S3', 'SES'],
          description: 'A comprehensive portfolio web application deployed on AWS using Vue3 and Vuetify, featuring CloudWatch monitoring, AWS-CLI automation, and failover to S3 static hosting. Includes a "Contact Me" component that triggers SES for email messaging.',
          longDescription: 'This portfolio website is designed to demonstrate advanced web development and AWS hosting capabilities, including dynamic content management and high availability configurations.',
          detailUrl: '#',
          websiteUrl: 'https://lucid.app/lucidchart/7ea9404f-1c4b-40a8-9f3d-78353a8f868e/view',
          dialog: false
        },
        {
          title: 'Riskcontrol Monitor Platform',
          skills: ['Python', 'Bash', 'ETL', 'Google Sheets', 'Big Data', 'JavaScript'],
          description: 'A local Riskcontrol platform automating ETL processes, using Python and Bash scripts, with data visualization in Google Sheets and Excel for BI reporting. Features automated daily jobs and local data lake integration.',
          longDescription: 'This project focuses on building and maintaining an automated system for monitoring and analyzing gaming behavior, with extensive data handling and reporting functionalities.',
          detailUrl: '#',
          websiteUrl: 'https://lucid.app/lucidchart/63762a1b-b7c4-4093-b085-629d448ff48c/view',
          dialog: false
        },
        {
          title: 'Design Slot Game PAR Sheet Verification & Golang Simulation',
          skills: ['Python', 'Golang', 'Monte Carlo Simulation', 'Excel', 'Docker'],
          description: 'Advanced gaming analysis platform that verifies slot game RTP theories and conducts Monte Carlo simulations to ensure game fairness and prevent profit loss. Utilizes Docker for deployment and scalability.',
          longDescription: 'Designed to enhance the reliability of slot games, this project leverages statistical simulations and custom software development to optimize gaming outcomes and maintain compliance.',
          detailUrl: '#',
          websiteUrl: 'https://lucid.app/lucidchart/d99032b2-05b2-416f-913f-de26bd2b3695/view',
          dialog: false
        }
      ],
      sideProjects: [
        {
          title: 'AWS Workflow Design Architecture',
          skills: ['AWS StepFunctions', 'Kinesis', 'Apache Spark', 'Machine Learning', 'Data Pipeline'],
          description: 'Developing an AWS-based workflow design architecture to facilitate ETL processes, stream data analysis, and machine learning model training and deployment. This project aims to optimize data workflows using AWS services like StepFunctions, Kinesis, and Spark.',
          longDescription: 'Developing an AWS-based workflow design architecture to facilitate ETL processes, stream data analysis, and machine learning model training and deployment, utilizing AWS services like StepFunctions, Kinesis, and Spark. This project sets the groundwork for optimizing data workflows, with plans to extend these capabilities to other platforms such as GCP and Azure in the near future.',
          detailUrl: '#',
          websiteUrl: 'https://lucid.app/documents/view/355904a7-1b8e-4a17-bf22-74ad137531f4',
          dialog: false
        },
        {
          title: 'Advanced Data Science and Analysis',
          skills: ['Python', 'Data Cleaning', 'Big Data', 'Statistical Analysis', 'Selenium', 'Web Scraping'],
          description: 'Specialize in data science projects focused on analyzing gaming datasets and detecting fraud via advanced statistical methods. Additionally, develop crawers such as Selenium for data mining',
          longDescription: 'Engaging in comprehensive data science projects focusing on the analysis of gaming datasets and fraud behavior using advanced statistical methods and data cleaning techniques. Also involves developing automation scripts using Selenium for data collection and processing.',
          detailUrl: '#',
          websiteUrl: 'https://www.linkedin.com/pulse/essential-algorithms-unveiled-python-powered-solutions-johnny-hung-zrrbf?utm_source=share&utm_medium=member_ios&utm_campaign=share_via',
          dialog: false
        },
        {
          title: 'AWS Services and Data Engineering Education',
          skills: ['AWS', 'Data Engineering', 'Python', 'ETL', 'Statistical Modeling', 'Teaching'],
          description: 'Dedicated to sharing knowledge about AWS services and data engineering, focusing on ETL processes and statistical models. This initiative is part of my commitment to educating others in IT and data science, leveraging over 5 years of teaching experience.',
          longDescription: 'This project involves creating educational content and tutorials that help others understand the fundamentals of AWS services, ETL jobs, and statistical modeling theories. By simplifying complex concepts and demonstrating practical scenarios, I aim to strengthen my own understanding while helping others navigate the field of data engineering. This effort also supports my ongoing role as a Python and IT technology educator.',
          detailUrl: '#',
          websiteUrl: 'https://www.linkedin.com/posts/johnny-hung-data-analytic-gaming-actuary_dataengineering-aws-pythonabrremoteabrmonitor-activity-7194845394474848257-UY5K?utm_source=share&utm_medium=member_desktop',
          dialog: false
        }
      ]
      }; 
  },
  methods: {
    showDetails(index) {
      this.projects[index].dialog = true;
    },

    showDetailsSide(index) {
      this.sideProjects[index].dialog = true;
    }

  }
};
</script>


<style scoped>
.ma-5 {
  margin: 20px;
}

.v-card {
  overflow: hidden; /* Ensures no content overflows */
}

.v-chip {
  margin-right: 5px; /* Adds spacing between chips */
}

.v-card-actions {
  justify-content: space-between; /* Spreads buttons out across the card bottom */
}






.custom-chip {
  background-color: #2196F3;
  color: white;
  padding: 4px 8px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.custom-chip:hover {
  background-color: #0D47A1; /* Darker blue on hover */
}


</style>




