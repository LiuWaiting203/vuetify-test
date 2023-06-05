<template>
  <!-- 網站主體用 v-app -->
<v-app>
  <!-- 導覽列用 v-app-bar -->
  <v-app-bar>
    <!-- 導覽列標題用 v-app-bar-title -->
    <v-app-bar-title>校園社團介紹網</v-app-bar-title>
    <v-btn prepend-icon="mdi-home" to="/" :active="false">回首頁</v-btn>
  </v-app-bar>
  <!-- 網站內容用 v-main -->
  <v-main>
    <!-- 路由元件顯示 -->
    <router-view></router-view>
  </v-main>
  <!-- footer 用 v-footer，加上 app 可以固定在底部  -->
  <v-footer app>網頁更新維護：2023/6/5</v-footer>
</v-app>
</template>
