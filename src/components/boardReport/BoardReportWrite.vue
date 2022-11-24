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
          :v-model="report.subject"
        ></v-text-field>
      </div>

      <div>
        <tiptap-vuetify v-model="report.content" :extensions="extensions" />
      </div>

      <div style="width: 20%">
        <v-file-input
          :rules="rules"
          accept="image/png, image/jpeg, image/bmp"
          placeholder="Pick an Images"
          prepend-icon="mdi-camera"
          label="Images"
        ></v-file-input>
      </div>

      <div class="write-btns">
        <v-btn @click="moveListPage()">목록</v-btn>
        <v-btn class="error">등록</v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Code,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
  History,
} from "tiptap-vuetify";

export default {
  name: "BoardReportWrite",
  components: {
    TiptapVuetify,
  },
  data() {
    return {
      report: {
        userId: null,
        subject: null,
        content: `<br>`,
        files: null,
      },
      extensions: [
        History,
        Blockquote,
        Link,
        Underline,
        Strike,
        Italic,
        ListItem,
        BulletList,
        OrderedList,
        [
          Heading,
          {
            options: {
              levels: [1, 2, 3],
            },
          },
        ],
        Bold,
        Code,
        HorizontalRule,
        Paragraph,
        HardBreak,
      ],
    };
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
