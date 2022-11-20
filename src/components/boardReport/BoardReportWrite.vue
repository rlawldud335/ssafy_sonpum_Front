<template>
  <v-container>
    <div>
      <div class="board-report-write__title">
        <v-text-field
          label="제목"
          placeholder="제목을 입력하세요"
          filled
          rounded
          dense
          background-color="white"
        ></v-text-field>
      </div>

      <div>
        <text-editor></text-editor>
      </div>

      <div class="write-btns">
        <v-btn @click="moveListPage()">목록</v-btn>
        <v-btn class="error">등록</v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
import TextEditor from "@/components/textEditor/TextEditor.vue";

export default {
  name: "BoardReportWrite",
  components: {
    TextEditor,
  },
  data() {
    return {};
  },
  methods: {
    moveListPage() {
      this.$router.push({ name: "BoardReportList" });
    },
  },
};
</script>

<style scoped>
.board-report-write {
  width: 100px;
  height: 100px;
  background-color: orange;
}

.write-btns {
  display: flex;
  justify-content: center;
  margin: 20px 0px;
}

.write-btns button {
  margin: 0px 10px;
}
</style>
