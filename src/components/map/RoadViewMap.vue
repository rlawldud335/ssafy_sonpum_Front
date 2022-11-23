<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";

const houseProductStore = "houseProductStore";

export default {
  name: "KakaoMap",
  data() {
    return {};
  },
  computed: {
    ...mapState(houseProductStore, ["product"]),
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=915cffed372954b7b44804ed422b9cf0";
      document.head.appendChild(script);
    }
  },
  methods: {
    initMap() {
      const roadviewContainer = document.getElementById("map");
      var roadview = new kakao.maps.Roadview(roadviewContainer); //로드뷰 객체
      var roadviewClient = new kakao.maps.RoadviewClient(); //좌표로부터 로드뷰 파노ID를 가져올 로드뷰 helper객체

      console.log(
        "# 로드뷰 lat, lng 확인: ",
        this.product.lat,
        this.product.lng
      );
      //var position = new kakao.maps.LatLng(33.450701, 126.570667);
      var position = new kakao.maps.LatLng(this.product.lat, this.product.lng);
      //37.5746540320628 126.968575235313. 37.5746, 126.9685
      //var position = new kakao.maps.LatLng(37.5739, 126.9679);

      // roadviewClient.getNearestPanoId(position, 50, function (panoId) {
      //   roadview.setPanoId(panoId, position); //panoId와 중심좌표를 통해 로드뷰 실행
      // });
      roadviewClient.getNearestPanoId(position, 70, function (panoId) {
        roadview.setPanoId(panoId, position); //panoId와 중심좌표를 통해 로드뷰 실행
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map {
  width: 400px;
  height: 400px;
}

.button-group {
  margin: 10px 0px;
}

button {
  margin: 0 3px;
}
</style>
