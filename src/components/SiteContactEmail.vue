<template>
  <div class="contact-email">
    <!-- First email -->
    <div class="email-row">
      <v-icon left class="gold-icon">mdi-email</v-icon>
      <a :href="'mailto:' + email" class="email-link">{{ email }}</a>
    </div>

    <!-- Second email -->
    <div class="email-row">
      <v-icon left class="gray-icon">mdi-email</v-icon>
      <a :href="'mailto:' + email2" class="email-link">{{ email2 }}</a>
      <span class="email-note">(not implement automation yet)</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SiteContactEmail',
  data() {
    return {
      email: 'wolfmib@gmail.com',
      email2: 'javis.ai.faiss@gmail.com', 
    };
  },
};
</script>

<style scoped>
.contact-email {
  display: flex;
  flex-direction: column;     /* Stack rows vertically */
  align-items: center;
  justify-content: center;  /* Center horizontally */
  font-size: 20px;
  color: #000;
  padding: 20px 0;  /* Adjust the padding for spacing if needed */
  gap: 8px;                   /* Optional: space between rows */
}

.email-row {
  display: flex;
  align-items: center;
  gap: 8px;                   /* Space between icon, email, and note */
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
