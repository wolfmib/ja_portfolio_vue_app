<template>
  <div class="contact-email">
    <v-icon left class="gold-icon">mdi-email</v-icon>
    <a :href="'mailto:' + email" class="email-link">{{ email }}</a>
  </div>
</template>

<script>
export default {
  name: 'SiteContactEmail',
  data() {
    return {
      email: 'javis.ai.faiss@gmail.com',
    };
  },
};
</script>

<style scoped>
.contact-email {
  display: flex;
  align-items: center;
  justify-content: center;  /* Center horizontally */
  font-size: 20px;
  color: #000;
  padding: 20px 0;  /* Adjust the padding for spacing if needed */
}

.gold-icon {
  color: #FFD700;  /* Set the email icon to a golden color */
  margin-right: 8px;  /* Spacing between icon and email */
}

.email-link {
  color: inherit;
  text-decoration: none;
  font-weight: bold;
}
</style>
