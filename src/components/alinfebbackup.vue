<template>
  <v-container fluid>
    <!-- Top Section: Display Question -->
    <v-card class="quiz-container">
      <v-card-title class="headline">Medical Quiz</v-card-title>
      <v-card-text>
        <p><strong>Category:</strong> {{ currentQuestion.Category }}</p>
        <p><strong>Subcategory:</strong> {{ currentQuestion.Subcategory }}</p>
        <p><strong>Description:</strong> {{ currentQuestion.Description }}</p>
      </v-card-text>
    </v-card>

    <!-- Bottom Section: Multiple Choice Options -->
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-list class="option-list">
          <v-list-item v-for="(option, index) in options" :key="index" @click="checkAnswer(option)" class="option-item">
            <v-list-item-content class="text-center">
              <v-list-item-title>{{ option }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      questionsDatabase: [
        { MedicalCode: "MC001", Category: "中文", Subcategory: "Arrhythmia", Description: "Irregular heartbeat condition." },
        { MedicalCode: "MC002", Category: "Neurology", Subcategory: "Migraine", Description: "Severe headache with nausea and sensitivity to light." },
        { MedicalCode: "MC003", Category: "Orthopedics", Subcategory: "Fracture", Description: "A broken bone requiring immobilization." },
        { MedicalCode: "MC004", Category: "Dermatology", Subcategory: "Eczema", Description: "A skin condition causing itchy and inflamed patches." },
        { MedicalCode: "MC005", Category: "Pulmonology", Subcategory: "Asthma", Description: "A respiratory condition causing difficulty in breathing." }
      ],
      currentQuestion: {},
      correctAnswer: "",
      options: []
    };
  },
  created() {
    this.generateQuestion();
  },
  methods: {
    generateQuestion() {
      const randomIndex = Math.floor(Math.random() * this.questionsDatabase.length);
      this.currentQuestion = this.questionsDatabase[randomIndex];
      this.correctAnswer = this.currentQuestion.MedicalCode;
      
      let wrongAnswers = this.questionsDatabase
        .filter(q => q.MedicalCode !== this.correctAnswer)
        .map(q => q.MedicalCode);
      
      wrongAnswers = this.shuffleArray(wrongAnswers).slice(0, 3);
      this.options = this.shuffleArray([this.correctAnswer, ...wrongAnswers]);
    },
    checkAnswer(selected) {
      if (selected === this.correctAnswer) {
        alert("Correct! 🦉✅");
      } else {
        alert(`Wrong answer. The correct answer is: ${this.correctAnswer}`);
      }
      this.generateQuestion();
    },
    shuffleArray(array) {
      return array.sort(() => Math.random() - 0.5);
    }
  }
};
</script>

<style scoped>
.quiz-container {
  padding: 20px;
  text-align: center;
  margin-bottom: 20px;
}
.option-list {
  text-align: center;
}
.option-item {
  cursor: pointer;
  transition: background-color 0.3s;
  justify-content: center;
  display: flex;
}
.option-item:hover {
  background-color: #f0f0f0;
}
.text-center {
  text-align: center;
}
</style>
