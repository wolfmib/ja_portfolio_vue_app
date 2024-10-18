<template>
  <v-container>
    <v-row>
      <!-- AWS Certified Data Engineer – Associate -->
      <v-col cols="12" md="6">
        <div class="certificate-block">
          <img :src="certificates[0].image" alt="AWS Certified Data Engineer – Associate" class="certificate-image">
          <h3>{{ certificates[0].title }}</h3>
          <p>{{ certificates[0].description }}</p>
          <a :href="certificates[0].link" target="_blank" class="certificate-link">View Certificate</a>
        </div>
      </v-col>
      <!-- AWS Certified Cloud Practitioner -->
      <v-col cols="12" md="6">
        <div class="certificate-block">
          <img :src="certificates[1].image" alt="AWS Certified Cloud Practitioner" class="certificate-image">
          <h3>{{ certificates[1].title }}</h3>
          <p>{{ certificates[1].description }}</p>
          <a :href="certificates[1].link" target="_blank" class="certificate-link">View Certificate</a>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      certificates: [
        {
          title: "AWS Certified Data Engineer – Associate",
          description: "This certificate verifies proficiency in data engineering on AWS.",
          link: "https://www.credly.com/badges/6778cea1-3f23-4b02-afaa-8586da0f3b3c/public_url",
          image: require('@/assets/certificate_one.jpg')
        },
        {
          title: "AWS Certified Cloud Practitioner",
          description: "This certificate verifies foundational knowledge of AWS cloud services.",
          link: "https://www.credly.com/badges/9539268b-5bd3-41dc-b87d-4e8de0a255ec",
          image: require('@/assets/certificate_two.jpg')
        }
      ]
    };
  }
};
</script>

<style scoped>
.certificate-block {
  text-align: center;
  margin-top: 20px;
}

.certificate-block h3 {
  margin-top: 10px;
}

.certificate-image {
  max-width: 100%;
  height: auto;
  border: 1px solid #ccc;
  margin-bottom: 10px;
}

.certificate-link {
  color: #FFA500; /* Example color */
  text-decoration: none;
  font-weight: bold;
}

.certificate-link:hover {
  text-decoration: underline;
}
</style>
