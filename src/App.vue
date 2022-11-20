<template>
  <v-app id="inspire" class="h-100">
    <v-app-bar app color="white" flat>
      <the-header-navbar></the-header-navbar>
    </v-app-bar>
    <v-main class="grey lighten-4 h-100">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import TheHeaderNavbar from "@/components/TheHeaderNavbar.vue";

export default {
  name: "App",
  data: () => ({}),
  components: {
    TheHeaderNavbar,
  },
};
</script>

<style>
html,
body,
h1,
input,
select {
  font-family: "Apple SD Gothic Neo", arial, sans-serif;
}
body,
h1 {
  font-size: 14px;
}
h1 {
  font-weight: normal;
  margin: 0;
  padding: 0;
}
h3 {
  font-weight: normal;
  margin: 0;
  padding: 0;
  font-size: 20px;
  line-height: 1.3;
}
body {
  margin: 0;
  background: #fff;
  color: #202124;
}
a {
  color: #1a0dab;
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
}
a:visited {
  color: #609;
}
a:hover {
  text-decoration: none;
}
cite,
cite a:link,
cite a:visited {
  color: #202124;
  font-style: normal;
}
button {
  margin: 0;
}
ol li {
  list-style: none;
}
ol,
ul,
li {
  margin: 0;
  padding: 0;
}
input {
  font-size: 14px;
}
em {
  font-weight: bold;
  font-style: normal;
}
.row {
  margin: 0;
  padding: 0;
}
.col {
  margin: 0;
  padding: 0;
}
div {
  margin: 0;
  padding: 0;
}
</style>
