<template>
  <v-container>
    <v-flex
      class="col-9 ms-auto me-auto"
      style="padding: 50px; background-color: white; border-radius: 20px"
    >
      <div style="display: flex; justify-content: space-between">
        <p style="font-size: 1.2rem; font-weight: bold">손품 공지사항</p>
        <!-- #HE# 관리자일때만 버튼 보이게 하고싶은데 안됨 ㅠㅠㅠ -->
        <!-- <div v-if="userInfo.role == 'ADMIN'"> -->
        <div>
          <v-btn dark color="#3876f2" @click="onAdd"> 글쓰기 </v-btn>
        </div>
      </div>

      <v-list two-line v-for="(listItem, index) in calData" :key="index">
        <v-list-tile class="notice-content">
          <v-hover v-slot="{ hover }">
            <v-list-tile-content
              @click="onView(index)"
              :style="{ opacity: hover ? '0.6' : '' }"
              style="width: 80%"
            >
              <v-list-tile-title class="text--primary">
                {{ listItem.subject }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-hover>
          <v-list-tile-action>
            <v-icon ripple @click="onEdit(index)"> edit </v-icon>
            <v-icon ripple @click="onRemove(index)"> delete </v-icon>
          </v-list-tile-action>
        </v-list-tile>

        <v-divider></v-divider>
      </v-list>
      <div style="display: flex; justify-content: center">
        <v-text-field
          placeholder="검색어"
          class="shrink"
          clearable
          hide-details
          v-model="search"
        >
        </v-text-field>
      </div>

      <br />
      <v-pagination
        color="#3876f2"
        circle
        v-model="curPageNum"
        :length="numOfPages"
      >
      </v-pagination>
    </v-flex>

    <v-dialog
      v-model="addDialog"
      persistent
      max-width="500px"
      @keydown.esc="closeDialog"
    >
      <base-modal>
        <div slot="title" class="headline">글쓰기</div>
        <v-container slot="content" grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field label="Subject" v-model="newData.subject" required>
              </v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                label="Content"
                v-model="newData.content"
                @keydown.enter="submit"
                required
              >
              </v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <v-btn
          slot="negative-button"
          color="blue darken-1 white--text"
          flat
          @click="closeDialog"
        >
          닫기
        </v-btn>
        <v-btn
          slot="positive-button"
          color="blue darken-1 white--text"
          flat
          @click="submit"
        >
          저장
        </v-btn>
      </base-modal>
    </v-dialog>

    <v-dialog
      v-model="viewDialog"
      persistent
      max-width="600px"
      @keydown.esc="closeDialog"
    >
      <base-modal>
        <div slot="title" class="headline">{{ selectedData.subject }}</div>
        <v-container slot="content" grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <h3 v-text="selectedData.content"></h3>
            </v-flex>
          </v-layout>
        </v-container>
        <v-btn
          slot="negative-button"
          color="blue darken-1"
          flat
          @click="closeDialog"
        >
          닫기
        </v-btn>
      </base-modal>
    </v-dialog>

    <v-dialog
      v-model="editDialog"
      persistent
      max-width="500px"
      @keydown.esc="closeDialog"
    >
      <base-modal>
        <div slot="title" class="headline">수정하기</div>
        <v-container slot="content" grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field
                label="Subject"
                v-model="selectedData.subject"
                required
              >
              </v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                label="Content"
                v-model="selectedData.content"
                required
                @keydown.enter="editData"
              >
              </v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <v-btn
          slot="negative-button"
          color="blue darken-1 white--text"
          flat
          @click="closeDialog"
        >
          닫기
        </v-btn>
        <v-btn
          slot="positive-button"
          color="blue darken-1 white--text"
          flat
          @click="editData"
        >
          저장
        </v-btn>
      </base-modal>
    </v-dialog>

    <v-dialog
      v-model="removeDialog"
      max-width="500px"
      @keydown.esc="removeDialog = false"
      @keydown.enter="removeData"
      persistent
    >
      <base-modal>
        <div slot="title" class="headline">삭제하시겠습니까?</div>
        <v-btn
          slot="negative-button"
          color="blue darken-1 white--text"
          flat
          @click="closeDialog"
        >
          취소
        </v-btn>
        <v-btn
          slot="positive-button"
          color="blue darken-1 white--text"
          flat
          @click="removeData"
        >
          삭제
        </v-btn>
      </base-modal>
    </v-dialog>
  </v-container>
</template>

<script>
import BaseModal from "@/components/boardNotice/BaseModal.vue";
import { mapActions, mapState } from "vuex";

const memberStore = "memberStore";
const boardStore = "boardStore";

export default {
  name: "BoardNotice",
  data() {
    return {
      addDialog: false,
      editDialog: false,
      viewDialog: false,
      removeDialog: false,
      search: "",
      listData: [],
      searchData: [],
      dataPerPage: 6,
      curPageNum: 1,
      curSelectIndex: 0,

      newData: {
        id: Number,
        subject: "",
        content: "",
      },
      selectedData: {
        id: Number,
        subject: "",
        content: "",
      },
    };
  },
  created() {
    //this.listData = testData;

    // 공지사항 목록 가져오기
    // if (this.getNoticeList(this.search)) {
    //   this.listData = this.notices;
    //   //console.log("##### listData ", this.listData);
    //   console.log("#### userInfo 확인 ", this.userInfo);
    // }
    if (this.getNoticeList()) {
      this.listData = this.notices;
    }
  },
  computed: {
    ...mapState(boardStore, ["notices"]),
    ...mapState(memberStore, ["userInfo"]),
    startOffset() {
      return (this.curPageNum - 1) * this.dataPerPage;
    },
    endOffset() {
      return this.startOffset + this.dataPerPage;
    },
    numOfPages() {
      return Math.ceil(this.searchData.length / this.dataPerPage);
    },
    calData() {
      this.change();

      return this.searchData.slice(this.startOffset, this.endOffset);
    },
  },
  methods: {
    ...mapActions(boardStore, ["getNoticeList"]),
    change() {
      this.searchData = this.listData
        .filter((data) => {
          return data.subject.toLowerCase().includes(this.search.toLowerCase());
        })
        .slice(0);
    },
    submit() {
      const submitData = {
        id: this.newData.id,
        subject: this.newData.subject,
        content: this.newData.content,
      };
      /*
        Ajax 통신 후
         */
      this.addData(submitData);
      this.closeDialog();
      this.clearForm();
    },
    editData() {
      const editData = {
        id: this.selectedData.id,
        subject: this.selectedData.subject,
        content: this.selectedData.content,
      };
      /*
        Ajax 통신 후
         */
      this.listData.splice(this.curSelectIndex, 1, editData);
      this.closeDialog();
    },
    addData(submitData) {
      this.listData.push(submitData);
      this.curPageNum = this.numOfPages;
    },
    removeData() {
      this.listData.splice(this.curSelectIndex, 1);
      if (this.calData.length === 0) {
        this.prevPage();
      }
      this.closeDialog();
    },
    onAdd() {
      this.addDialog = true;
    },
    onRemove(index) {
      this.curSelectIndex = this.calIndex(index);

      this.removeDialog = true;
    },
    onView(index) {
      this.curSelectIndex = this.calIndex(index);
      this.selectedData.id = this.listData[this.curSelectIndex].id;
      this.selectedData.subject = this.listData[this.curSelectIndex].subject;
      this.selectedData.content = this.listData[this.curSelectIndex].content;

      this.viewDialog = true;
    },
    onEdit(index) {
      this.curSelectIndex = this.calIndex(index);
      this.selectedData.id = this.listData[this.curSelectIndex].id;
      this.selectedData.subject = this.listData[this.curSelectIndex].subject;
      this.selectedData.content = this.listData[this.curSelectIndex].content;

      this.editDialog = true;
    },
    calIndex(index) {
      switch (this.curPageNum) {
        case 1:
          return index;

        default:
          return index + (this.curPageNum - 1) * this.dataPerPage;
      }
    },
    clearForm() {
      for (let key in this.newData) {
        this.newData[key] = "";
      }
    },
    prevPage() {
      this.curPageNum--;
    },
    closeDialog() {
      this.addDialog = false;
      this.editDialog = false;
      this.removeDialog = false;
      this.viewDialog = false;
    },
  },
  components: {
    ...mapState(memberStore, ["userInfo"]),
    BaseModal,
  },
};
</script>

<style>
.create-data-btn {
  position: fixed;
  bottom: 0;
  right: 0;
}
.notice-content {
  display: flex;
  justify-content: space-between;
  padding: 5px;
  border-radius: 15px;
}
</style>
