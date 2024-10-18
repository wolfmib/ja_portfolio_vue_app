<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-form @submit.prevent="submitForm">
          <v-text-field v-model="form.name" label="Name" required class="input-style"></v-text-field>
          <v-text-field v-model="form.email" label="Email" required type="email" class="input-style"></v-text-field>
          <v-textarea v-model="form.message" label="Message" rows="3" required class="input-style"></v-textarea>
          <v-btn type="submit" color="white" class="mb-3 custom-btn" :class="{'hover-btn': hover}">Send</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>



<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    async submitForm() {
      try {
         console.log("Sending data:", JSON.stringify(this.form));


        const response = await fetch('https://7qkzcfawo1.execute-api.eu-west-3.amazonaws.com/dev/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.form)
        });

        console.log("Sending data:", JSON.stringify(this.form));
         console.log("Received response:", response);

        if (!response.ok) throw new Error('Failed to send message');

        const data = await response.json();
        console.warn("packing data >> ", data);
        //alert(data.message);
      } catch (error) {
        console.error('Error:', error);
        alert(error.message);
      }
    }
  }
};
</script>


<style scoped>
.input-style {
  background-color: white !important;
  color: grey !important;
}

.custom-btn {
  width: 100%;
  color: blue !important;
  border: 1px solid transparent;
}

.custom-btn:hover {
  background-color: blue !important;
  color: white !important;
  border-color: white !important;
}
</style>