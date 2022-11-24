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
          v-model="report.subject"
        ></v-text-field>
      </div>

      <div>
        <tiptap-vuetify v-model="report.content" :extensions="extensions" />
      </div>

      <div style="width: 50%">
        <v-file-input
          :rules="rules"
          accept="image/png, image/jpeg, image/bmp"
          placeholder="Pick an Images"
          prepend-icon="mdi-camera"
          label="Images"
          v-model="report.files"
        ></v-file-input>
      </div>

      <div class="write-btns">
        <v-btn @click="moveListPage()">목록</v-btn>
        <v-btn class="error" @click="registerArticle">등록</v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
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

const memberStore = "memberStore";
const boardStore = "boardStore";

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
        content: ``,
        files: "",
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
  computed: {
    ...mapState(memberStore, ["userInfo"]),
  },
  methods: {
    ...mapActions(boardStore, ["registerReportArticle"]),
    moveListPage() {
      this.$router.push({ name: "BoardReportList" });
    },
    registerArticle() {
      console.log("# 작성 확인: ", this.report);
      this.report.userId = this.userInfo.userId;
      this.registerReportArticle(this.report);

      // 게시글 목록으로 이동
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
