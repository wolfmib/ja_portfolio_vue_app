<template>
  <v-container fluid>
    <!-- Top Section: Display Question -->
    <v-card class="quiz-container">
      <v-card-title class="headline">問題</v-card-title>
      <v-card-text>
        <!-- <p><strong>Category:</strong> {{ currentQuestion.Category }}</p> -->
        <p><strong>類別:</strong> {{ currentQuestion.Subcategory }}</p>
        <p><strong>描述:</strong> {{ currentQuestion.Description }}</p>
      </v-card-text>
    </v-card>

    <!-- Bottom Section: Multiple Choice Options -->
    <v-row justify="center">
      <v-col cols="12" md="6">
        <p><strong>請選擇以下四個編號 其中一個:</strong></p>
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
    {"MedicalCode": "34001C", "Category": "X光", "Subcategory": "NA", "Description": "根尖片", "Price": "80"},
    {"MedicalCode": "34002C", "Category": "X光", "Subcategory": "NA", "Description": "咬翼片", "Price": "100"},
    {"MedicalCode": "01271C", "Category": "X光", "Subcategory": "NA", "Description": "環口全景X光片診察", "Price": "600"},
    {"MedicalCode": "01272C", "Category": "X光", "Subcategory": "NA", "Description": "年度X光片診察", "Price": "600"},
    {"MedicalCode": "01273C", "Category": "X光", "Subcategory": "NA", "Description": "高齒齦年度X光片診察", "Price": "600"},
    {"MedicalCode": "89001C", "Category": "OD", "Subcategory": "銀粉", "Description": "單面", "Price": "450"},
    {"MedicalCode": "89002C", "Category": "OD", "Subcategory": "銀粉", "Description": "雙面", "Price": "600"},
    {"MedicalCode": "89003C", "Category": "OD", "Subcategory": "銀粉", "Description": "三面", "Price": "750"},
    {"MedicalCode": "89004C", "Category": "OD", "Subcategory": "前牙複合樹脂", "Description": "單面", "Price": "500"},
    {"MedicalCode": "89005C", "Category": "OD", "Subcategory": "前牙複合樹脂", "Description": "雙面", "Price": "650"},
    {"MedicalCode": "89012C", "Category": "OD", "Subcategory": "前牙複合樹脂", "Description": "三面", "Price": "1050"},
    {"MedicalCode": "89014C", "Category": "OD", "Subcategory": "前牙複合樹脂", "Description": "雙鄰接", "Price": "1200"},
    {"MedicalCode": "89008C", "Category": "OD", "Subcategory": "後牙複合樹脂", "Description": "單面", "Price": "600"},
    {"MedicalCode": "89009C", "Category": "OD", "Subcategory": "後牙複合樹脂", "Description": "雙面", "Price": "800"},
    {"MedicalCode": "89010C", "Category": "OD", "Subcategory": "後牙複合樹脂", "Description": "三面", "Price": "1000"},
    {"MedicalCode": "89015C", "Category": "OD", "Subcategory": "後牙複合樹脂", "Description": "雙鄰接", "Price": "1450"},
    {"MedicalCode": "89204C", "Category": "OD", "Subcategory": "前牙高風險疾病複合體", "Description": "單面", "Price": "1050"},
    {"MedicalCode": "89205C", "Category": "OD", "Subcategory": "前牙高風險疾病複合體", "Description": "雙面", "Price": "1400"},
    {"MedicalCode": "89210C", "Category": "OD", "Subcategory": "前牙高風險疾病複合體", "Description": "三面", "Price": "1600"},
    {"MedicalCode": "89214C", "Category": "OD", "Subcategory": "前牙高風險疾病複合體", "Description": "雙鄰接", "Price": "1000"},
    {"MedicalCode": "89208C", "Category": "OD", "Subcategory": "後牙高風險疾病複合體", "Description": "單面", "Price": "1200"},
    {"MedicalCode": "89209C", "Category": "OD", "Subcategory": "後牙高風險疾病複合體", "Description": "雙面", "Price": "1450"},
    {"MedicalCode": "89212C", "Category": "OD", "Subcategory": "後牙高風險疾病複合體", "Description": "三面", "Price": "1850"},
    {"MedicalCode": "89215C", "Category": "OD", "Subcategory": "後牙高風險疾病複合體", "Description": "雙鄰接", "Price": "NA"},
    {"MedicalCode": "89011C", "Category": "", "Subcategory": "", "Description": "GI玻璃離子體充填", "Price": "400"},
    {"MedicalCode": "89006C", "Category": "", "Subcategory": "", "Description": "覆蓋", "Price": "140"},
    {"MedicalCode": "89007C", "Category": "", "Subcategory": "", "Description": "釘強化術(每支)", "Price": "500"},
    {"MedicalCode": "89013C", "Category": "", "Subcategory": "", "Description": "複合體充填(恆牙牙根)", "Price": "1200"},
    {"MedicalCode": "90004C","Category": "Endo","Subcategory": "","Description": "緊急處理","Price": 150},
    {"MedicalCode": "90007C","Category": "Endo","Subcategory": "","Description": "去除鑄造牙冠","Price": 800},
  {"MedicalCode": "90008C","Category": "Endo","Subcategory": "","Description": "去除釘柱","Price": 1235},
  {"MedicalCode": "90015C","Category": "Endo","Subcategory": "","Description": "根管開擴及清創","Price": 600},
  {"MedicalCode": "90012C","Category": "Endo","Subcategory": "","Description": "橡皮障防濕裝置","Price": 150},
  {"MedicalCode": "01002C","Category": "Endo","Subcategory": "","Description": "連續治療(同療)","Price": 0},
  {"MedicalCode": "90001C","Category": "Endo","Subcategory": "RCF","Description": "1根","Price": 1210},
  {"MedicalCode": "90002C","Category": "Endo","Subcategory": "RCF","Description": "2根","Price": 2410},
  {"MedicalCode": "90003C","Category": "Endo","Subcategory": "RCF","Description": "3根","Price": 3610},
  {"MedicalCode": "90019C","Category": "Endo","Subcategory": "RCF","Description": "4根","Price": 4810},
  {"MedicalCode": "90020C","Category": "Endo","Subcategory": "RCF","Description": "5根","Price": 6010},
  {"MedicalCode": "90095C","Category": "Endo","Subcategory": "完美封填 + 橡皮障","Description": "2根","Price": 1600},
  {"MedicalCode": "90096C","Category": "Endo","Subcategory": "完美封填 + 橡皮障","Description": "3根","Price": 2400},
  {"MedicalCode": "90097C","Category": "Endo","Subcategory": "完美封填 + 橡皮障","Description": "4根","Price": 3200},
  {"MedicalCode": "90091C","Category": "Endo","Subcategory": "困難特別處理","Description": "大白齒 (C - Shaped)","Price": 1000},
  {"MedicalCode": "90092C","Category": "Endo","Subcategory": "困難特別處理","Description": "有顯外根管","Price": 1000},
  {"MedicalCode": "90093C","Category": "Endo","Subcategory": "困難特別處理","Description": "彎曲・鈣化・斷針","Price": 1000},
  {"MedicalCode": "90094C","Category": "Endo","Subcategory": "困難特別處理","Description": "re endo","Price": 1500},
  {"MedicalCode": "90005C","Category": "Endo","Subcategory": "乳牙","Description": "斷髓處理","Price": 800},
  {"MedicalCode": "90016C","Category": "Endo","Subcategory": "乳牙","Description": "根管治療","Price": 1010},
  {"MedicalCode": "90018C","Category": "Endo","Subcategory": "乳牙","Description": "多根根管治療","Price": 1690},
  {"MedicalCode": "90010C","Category": "Endo","Subcategory": "","Description": "根尖逆充填術","Price": 900},
  {"MedicalCode": "90013C","Category": "Endo","Subcategory": "","Description": "根尖形成術-前牙","Price": 500},
  {"MedicalCode": "90014C","Category": "Endo","Subcategory": "","Description": "根尖形成術-後牙","Price": 1000},
  {"MedicalCode": "90017C","Category": "Endo","Subcategory": "","Description": "恆牙斷髓處理","Price": 600},
  {"MedicalCode": "90088C","Category": "Endo","Subcategory": "","Description": "Endo轉出醫療院所轉診費","Price": 200},
  {"MedicalCode": "P7303C","Category": "Endo","Subcategory": "","Description": "超音波根管沖洗","Price": 100},
  {"MedicalCode": "91001C","Category": "Perio","Subcategory": "","Description": "牙周病緊急處理","Price": 150
  },
  {"MedicalCode": "91002C","Category": "Perio","Subcategory": "","Description": "牙周敷料","Price": 120
  },
  {"MedicalCode": "91003C","Category": "Perio","Subcategory": "洗牙","Description": "局部","Price": 165
  },
  {"MedicalCode": "91004C","Category": "Perio","Subcategory": "洗牙","Description": "全口 (12歲以上可申報)","Price": 660
  },
  {"MedicalCode": "91005C","Category": "Perio","Subcategory": "洗牙","Description": "口乾症牙結石清除-全口","Price": 720
  },
  {"MedicalCode": "91017C","Category": "Perio","Subcategory": "洗牙","Description": "懷孕婦女牙結石清除-全口","Price": 920
  },
  {"MedicalCode": "91018C","Category": "Perio","Subcategory": "洗牙","Description": "牙周病支持性治療","Price": 1120
  },
  {"MedicalCode": "91089C","Category": "Perio","Subcategory": "洗牙","Description": "糖尿病患結牙結石清除-全口","Price": 820
  },
  {"MedicalCode": "91090C","Category": "Perio","Subcategory": "洗牙","Description": "高風險疾病患者牙結石清除-全口","Price": 820
  },
  {"MedicalCode": "91103C","Category": "Perio","Subcategory": "洗牙","Description": "特殊狀況牙結石清除-局部","Price": 165
  },
  {"MedicalCode": "91104C","Category": "Perio","Subcategory": "洗牙","Description": "特殊狀況牙結石清除-全口","Price": 660
  },
  {"MedicalCode": "91006C","Category": "Perio","Subcategory": "齒顎下刮除術","Description": "全口","Price": 3200
  },
  {"MedicalCode": "91007C","Category": "Perio","Subcategory": "齒顎下刮除術","Description": "1/2顆","Price": 800
  },
  {"MedicalCode": "91008C","Category": "Perio","Subcategory": "齒顎下刮除術","Description": "局部 (三齒以內)","Price": 400
  },
  {"MedicalCode": "91011C","Category": "Perio","Subcategory": "牙齦切除術","Description": "局部 (三齒以內)","Price": 910
  },
  {"MedicalCode": "91012C","Category": "Perio","Subcategory": "牙齦切除術","Description": "1/3顆","Price": 1510
  },
  {"MedicalCode": "91013C","Category": "Perio","Subcategory": "牙齦切除術","Description": "Endo or OD 時","Price": 330
  },
  {"MedicalCode": "91014C","Category": "Perio","Subcategory": "","Description": "牙周暨齒齦控制基本處置","Price": 100
  },
  {"MedicalCode": "91019C","Category": "Perio","Subcategory": "","Description": "懷孕婦女牙周緊急處置","Price": 500
  },
  {"MedicalCode": "91020C","Category": "Perio","Subcategory": "","Description": "牙齦斑去除照護","Price": 200
  },
  {
    "MedicalCode": "91021C",
    "Category": "Perio",
    "Subcategory": "牙周統合治療",
    "Description": "第一階段 P1",
    "Price": 1800
  },
  {
    "MedicalCode": "91022C",
    "Category": "Perio",
    "Subcategory": "牙周統合治療",
    "Description": "第二階段 P2",
    "Price": 5000
  },
  {
    "MedicalCode": "91023C",
    "Category": "Perio",
    "Subcategory": "牙周統合治療",
    "Description": "第三階段 P3",
    "Price": 3200
  },
  {
    "MedicalCode": "91088C",
    "Category": "Perio",
    "Subcategory": "",
    "Description": "Perio轉出醫療院所轉診費",
    "Price": 200
  },
  {
    "MedicalCode": "92001C",
    "Category": "O.S.",
    "Subcategory": "",
    "Description": "非特定局部治療",
    "Price": 50
  },
  {
    "MedicalCode": "92002C",
    "Category": "O.S.",
    "Subcategory": "",
    "Description": "齒間暫時固定術(splinting)",
    "Price": 100
  },
  {
    "MedicalCode": "92005C",
    "Category": "O.S.",
    "Subcategory": "拔牙",
    "Description": "拆線",
    "Price": 50
  },
  {
    "MedicalCode": "92012C",
    "Category": "O.S.",
    "Subcategory": "拔牙",
    "Description": "拔牙後特別處理",
    "Price": 160
  },
  {
    "MedicalCode": "92013C",
    "Category": "O.S.",
    "Subcategory": "拔牙",
    "Description": "簡單拔牙",
    "Price": 510
  },
  {
    "MedicalCode": "92014C",
    "Category": "O.S.",
    "Subcategory": "拔牙",
    "Description": "複雜拔牙",
    "Price": 900
  },
  {
    "MedicalCode": "92015C",
    "Category": "O.S.",
    "Subcategory": "拔牙",
    "Description": "單純齒切除術",
    "Price": 2730
  },
  {
    "MedicalCode": "92016C",
    "Category": "O.S.",
    "Subcategory": "拔牙",
    "Description": "複雜齒切除術",
    "Price": 4300
  },
  {
    "MedicalCode": "92063C",
    "Category": "O.S.",
    "Subcategory": "拔牙",
    "Description": "手術拔除深部阻生齒",
    "Price": 8970
  },
  {
    "MedicalCode": "92055C",
    "Category": "O.S.",
    "Subcategory": "拔牙",
    "Description": "乳牙拔除",
    "Price": 260
  },
  {
    "MedicalCode": "92092C",
    "Category": "O.S.",
    "Subcategory": "拔牙",
    "Description": "乳牙複雜性拔牙",
    "Price": 560
  },
  {
    "MedicalCode": "92017C",
    "Category": "O.S.",
    "Subcategory": "",
    "Description": "囊腫摘除術",
    "Price": 3000
  },
  {
    "MedicalCode": "92027C",
    "Category": "O.S.",
    "Subcategory": "",
    "Description": "頰蓋切除術",
    "Price": 510
  },
  {
    "MedicalCode": "92030C",
    "Category": "O.S.",
    "Subcategory": "",
    "Description": "前齒根尖切除術",
    "Price": 1800
  },
  {
    "MedicalCode": "92031C",
    "Category": "O.S.",
    "Subcategory": "",
    "Description": "小臼齒根尖切除術",
    "Price": 2800
  },
  {
    "MedicalCode": "92032C",
    "Category": "O.S.",
    "Subcategory": "",
    "Description": "大臼齒根尖切除術",
    "Price": 4000
  },
  {
    "MedicalCode": "92041C",
    "Category": "O.S.",
    "Subcategory": "",
    "Description": "齒槽骨成型術",
    "Price": 570
  },
  {
    "MedicalCode": "92042C",
    "Category": "O.S.",
    "Subcategory": "",
    "Description": "齒槽骨成型術(1/2顆以上)",
    "Price": 1070
  },
  {
    "MedicalCode": "92066C",
    "Category": "O.S.",
    "Subcategory": "",
    "Description": "特定局部治療",
    "Price": 50
  },
  {
    "MedicalCode": "92071C",
    "Category": "O.S.",
    "Subcategory": "",
    "Description": "簡單口內切開排膿",
    "Price": 210
  },
  {
    "MedicalCode": "92073C",
    "Category": "O.S.",
    "Subcategory": "",
    "Description": "口腔黏膜難症特別處置",
    "Price": 600
  },
  {
    "MedicalCode": "92088C",
    "Category": "O.S.",
    "Subcategory": "",
    "Description": "O.S.轉出醫療院所轉診費",
    "Price": 200
  },
  {
    "MedicalCode": "01001C",
    "Category": "特殊",
    "Subcategory": "特殊",
    "Description": "口腔檢查",
    "Price": 362
  },
  {
    "MedicalCode": "96001C",
    "Category": "特殊",
    "Subcategory": "特殊",
    "Description": "麻醉",
    "Price": 90
  },
  {
    "MedicalCode": "92094C",
    "Category": "特殊",
    "Subcategory": "特殊",
    "Description": "改",
    "Price": 800
  },
  {
    "MedicalCode": "95",
    "Category": "特殊",
    "Subcategory": "特殊",
    "Description": "口腔黏膜檢查",
    "Price": 130
  },
  {
    "MedicalCode": "81",
    "Category": "塗氟",
    "Subcategory": "塗氟",
    "Description": "兒童",
    "Price": 500
  },
  {
    "MedicalCode": "87",
    "Category": "塗氟",
    "Subcategory": "塗氟",
    "Description": "弱勢",
    "Price": 500
  },
  {
    "MedicalCode": "92072C",
    "Category": "塗氟",
    "Subcategory": "塗氟",
    "Description": "口乾症塗氟",
    "Price": 500
  },
  {
    "MedicalCode": "P7102C",
    "Category": "塗氟",
    "Subcategory": "塗氟",
    "Description": "青少年齲齒氟化物治療",
    "Price": 500
  },
  {
    "MedicalCode": "P7302C",
    "Category": "塗氟",
    "Subcategory": "塗氟",
    "Description": "齲齒經驗之高風險患者氟化物治療",
    "Price": 500
  }
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
        alert("正確! 🦉✅");
      } else {
        alert(`不正確. 正確答案應該是: ${this.correctAnswer}`);
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
