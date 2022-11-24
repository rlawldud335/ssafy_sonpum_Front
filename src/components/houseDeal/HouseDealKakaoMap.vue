<template>
  <div id="map"></div>
</template>

<script>
import { mapState } from "vuex";

const houseDealStore = "houseDealStore";

export default {
  name: "HouseDealKakaoMap",
  data() {
    return {
      markers: [],
      infowindow: null,
    };
  },
  computed: {
    ...mapState(houseDealStore, ["houses"]),
  },
  watch: {
    houses(value) {
      console.log("# 값 변경 감지!! ", value);

      // 기존 마커 삭제
      if (this.markers.length > 0) {
        this.markers.forEach((marker) => marker.setMap(null));
      }

      //console.log("# houses 확인 ", this.houses); // 경희궁자이(4단지)
      //console.log("# 1개 확인 ", this.houses["경희궁자이(4단지)"][0]);

      const positions = [];
      const forSetCenter = [];
      for (var key in this.houses) {
        let house = this.houses[key];
        positions.push({
          title: house[0].apartName,
          latlng: new kakao.maps.LatLng(house[0].lat, house[0].lng),
        });

        forSetCenter[0] = house[0].lat;
        forSetCenter[1] = house[0].lng;
      }
      console.log("# 만든 마커 객체배열 확인 ", positions);

      // 마커 이미지의 이미지 주소입니다
      var imageSrc =
        "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
      for (var i = 0; i < positions.length; i++) {
        // 마커 이미지의 이미지 크기 입니다
        var imageSize = new kakao.maps.Size(24, 35);
        // 마커 이미지를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
          map: this.map, // 마커를 표시할 지도
          position: positions[i].latlng, // 마커를 표시할 위치
          title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image: markerImage, // 마커 이미지
        });
        this.markers.push(marker);
      }
      marker.setMap(this.map);

      // * 해당 위치로 map 이동
      // 이동할 위도 경도 위치를 생성합니다
      console.log("# 지도 중심좌표 확인 ", forSetCenter);
      var moveLatLon = new kakao.maps.LatLng(forSetCenter[0], forSetCenter[1]);
      // 지도 중심을 이동 시킵니다
      this.map.setCenter(moveLatLon);
    },
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=915cffed372954b7b44804ed422b9cf0&libraries=services";
      document.head.appendChild(script);
    }
  },
  methods: {
    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(37.5013, 127.0397),
        level: 3,
        //level: 15,
      };
      //지도 객체를 등록합니다.
      //지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
      this.map = new kakao.maps.Map(container, options);

      // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
      var mapTypeControl = new kakao.maps.MapTypeControl();

      // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
      // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
      this.map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

      // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
      var zoomControl = new kakao.maps.ZoomControl();
      this.map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    },
    changeSize(size) {
      const container = document.getElementById("map");
      container.style.width = `${size}px`;
      container.style.height = `${size}px`;
      this.map.relayout();
    },
    displayMarker(markerPositions) {
      if (this.markers.length > 0) {
        this.markers.forEach((marker) => marker.setMap(null));
      }
      const positions = markerPositions.map(
        (position) => new kakao.maps.LatLng(...position)
      );
      if (positions.length > 0) {
        this.markers = positions.map(
          (position) =>
            new kakao.maps.Marker({
              map: this.map,
              position,
            })
        );
        const bounds = positions.reduce(
          (bounds, latlng) => bounds.extend(latlng),
          new kakao.maps.LatLngBounds()
        );
        this.map.setBounds(bounds);
      }
    },
    displayInfoWindow() {
      if (this.infowindow && this.infowindow.getMap()) {
        //이미 생성한 인포윈도우가 있기 때문에 지도 중심좌표를 인포윈도우 좌표로 이동시킨다.
        this.map.setCenter(this.infowindow.getPosition());
        return;
      }
      var iwContent = '<div style="padding:5px;">Hello World!</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwPosition = new kakao.maps.LatLng(33.450701, 126.570667), //인포윈도우 표시 위치입니다
        iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
      this.infowindow = new kakao.maps.InfoWindow({
        map: this.map, // 인포윈도우가 표시될 지도
        position: iwPosition,
        content: iwContent,
        removable: iwRemoveable,
      });
      this.map.setCenter(iwPosition);
    },
  },
};
</script>

<style scoped>
#map {
  width: 100%;
  height: 100%;
}
.button-group {
  margin: 10px 0px;
}
button {
  margin: 0 3px;
}
</style>
