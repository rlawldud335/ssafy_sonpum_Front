<template>
  <v-container>
    <v-flex
      class="col-9 ms-auto me-auto"
      style="padding: 50px; background-color: white; border-radius: 20px"
    >
      <div style="display: flex; justify-content: space-between">
        <p style="font-size: 1.2rem; font-weight: bold">손품 공지사항</p>
        <v-btn dark color="#3876f2" @click="onAdd"> 글쓰기 </v-btn>
      </div>

      <v-list two-line v-for="(listItem, index) in calData" :key="index">
        <v-list-tile class="notice-content">
          <v-hover v-slot="{ hover }">
            <v-list-tile-content
              @click="onView(index)"
              :style="{ opacity: hover ? '0.6' : '' }"
              style="width: 80%"
            >
              <v-list-tile-title class="text--primary"> {{ listItem.subject }} </v-list-tile-title>
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
        <v-text-field placeholder="검색어" class="shrink" clearable hide-details v-model="search">
        </v-text-field>
      </div>

      <br />
      <v-pagination color="#3876f2" circle v-model="curPageNum" :length="numOfPages">
      </v-pagination>
    </v-flex>

    <v-dialog v-model="addDialog" persistent max-width="500px" @keydown.esc="closeDialog">
      <base-modal>
        <div slot="title" class="headline">글쓰기</div>
        <v-container slot="content" grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field label="Subject" v-model="newData.subject" required> </v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="Desc" v-model="newData.desc" @keydown.enter="submit" required>
              </v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <v-btn slot="negative-button" color="blue darken-1 white--text" flat @click="closeDialog">
          닫기
        </v-btn>
        <v-btn slot="positive-button" color="blue darken-1 white--text" flat @click="submit">
          저장
        </v-btn>
      </base-modal>
    </v-dialog>

    <v-dialog v-model="viewDialog" persistent max-width="600px" @keydown.esc="closeDialog">
      <base-modal>
        <div slot="title" class="headline">{{ selectedData.subject }}</div>
        <v-container slot="content" grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <h3 v-text="selectedData.desc"></h3>
            </v-flex>
          </v-layout>
        </v-container>
        <v-btn slot="negative-button" color="blue darken-1" flat @click="closeDialog"> 닫기 </v-btn>
      </base-modal>
    </v-dialog>

    <v-dialog v-model="editDialog" persistent max-width="500px" @keydown.esc="closeDialog">
      <base-modal>
        <div slot="title" class="headline">수정하기</div>
        <v-container slot="content" grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field label="Subject" v-model="selectedData.subject" required> </v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                label="Desc"
                v-model="selectedData.desc"
                required
                @keydown.enter="editData"
              >
              </v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <v-btn slot="negative-button" color="blue darken-1 white--text" flat @click="closeDialog">
          닫기
        </v-btn>
        <v-btn slot="positive-button" color="blue darken-1 white--text" flat @click="editData">
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
        <v-btn slot="negative-button" color="blue darken-1 white--text" flat @click="closeDialog">
          취소
        </v-btn>
        <v-btn slot="positive-button" color="blue darken-1 white--text" flat @click="removeData">
          삭제
        </v-btn>
      </base-modal>
    </v-dialog>
  </v-container>
</template>

<script>
const testData = [
  { id: 1, subject: "Malawi", desc: "Wels" },
  { id: 2, subject: "Cuba", desc: "Sale" },
  { id: 3, subject: "Somalia", desc: "Lahore" },
  { id: 4, subject: "Togo", desc: "Termeno sulla strada del vino/Tramin an der Weinstrasse" },
  { id: 5, subject: "Slovenia", desc: "Edam" },
  { id: 6, subject: "Tonga", desc: "Vinci" },
  { id: 7, subject: "Kenya", desc: "Te Awamutu" },
  { id: 8, subject: "Japan", desc: "Ferrazzano" },
  { id: 9, subject: "Finland", desc: "Nil-Saint-Vincent-Saint-Martin" },
  { id: 10, subject: "Dominica", desc: "Paglieta" },
  { id: 11, subject: "Solomon Islands", desc: "Vilvoorde" },
  { id: 12, subject: "Monaco", desc: "Tonk" },
  { id: 13, subject: "Cook Islands", desc: "Sint-Pieters-Kapelle" },
  { id: 14, subject: "Gibraltar", desc: "Develi" },
  { id: 15, subject: "Mauritania", desc: "Etobicoke" },
  { id: 16, subject: "Sierra Leone", desc: "Norman Wells" },
  { id: 17, subject: "Ghana", desc: "Charleroi" },
  { id: 18, subject: "Saint Martin", desc: "Düsseldorf" },
  { id: 19, subject: "Uganda", desc: "Dhuy" },
  { id: 20, subject: "Serbia", desc: "Rampur" },
  { id: 21, subject: "Bangladesh", desc: "Kempten" },
  { id: 22, subject: "Bosnia and Herzegovina", desc: "Okigwe" },
  { id: 23, subject: "Somalia", desc: "Valpelline" },
  { id: 24, subject: "Libya", desc: "Beverlo" },
  { id: 25, subject: "Israel", desc: "Coalhurst" },
  { id: 26, subject: "Greece", desc: "Castel Ritaldi" },
  { id: 27, subject: "United Kingdom (Great Britain)", desc: "Benestare" },
  { id: 28, subject: "Singapore", desc: "Tsiigehtchic" },
  { id: 29, subject: "Saint Pierre and Miquelon", desc: "Jhang" },
  { id: 30, subject: "South Georgia and The South Sandwich Islands", desc: "Mobile" },
  { id: 31, subject: "Yemen", desc: "Koningshooikt" },
  { id: 32, subject: "Albania", desc: "Stirling" },
  { id: 33, subject: "Laos", desc: "Beypazarı" },
  { id: 34, subject: "Bouvet Island", desc: "Florida" },
  { id: 35, subject: "Macao", desc: "Calmar" },
  { id: 36, subject: "Austria", desc: "Invergordon" },
  { id: 37, subject: "Palau", desc: "Balclutha" },
  { id: 38, subject: "Denmark", desc: "Bozeman" },
  { id: 39, subject: "Sierra Leone", desc: "Assiniboia" },
  { id: 40, subject: "Austria", desc: "Champigny-sur-Marne" },
  { id: 41, subject: "Finland", desc: "Calera de Tango" },
  { id: 42, subject: "Lesotho", desc: "Ancarano" },
];
import BaseModal from "@/components/boardNotice/BaseModal.vue";
export default {
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
        desc: "",
      },
      selectedData: {
        id: Number,
        subject: "",
        desc: "",
      },
    };
  },
  created() {
    // this.axios.get('http://localhost:8080/server/listTest.json')
    //   .then((response) => {
    //     this.listData = response.data;
    //     console.log(this.listData);
    //   });
    this.listData = testData;
  },
  computed: {
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
        desc: this.newData.desc,
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
        desc: this.selectedData.desc,
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
      this.selectedData.desc = this.listData[this.curSelectIndex].desc;

      this.viewDialog = true;
    },
    onEdit(index) {
      this.curSelectIndex = this.calIndex(index);
      this.selectedData.id = this.listData[this.curSelectIndex].id;
      this.selectedData.subject = this.listData[this.curSelectIndex].subject;
      this.selectedData.desc = this.listData[this.curSelectIndex].desc;

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
