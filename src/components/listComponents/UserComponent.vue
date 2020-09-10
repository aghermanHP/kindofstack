<template>
  <v-flex>
    <p>{{asked | moment("MMMM Do YYYY")}}</p>
    <v-row>
      <v-col md="3">
        <v-img
          :src="`${link_image}`"
          :lazy-src="`${link_image? link_image : default_image}`"
          aspect-ratio="1"
          class="grey lighten-2"
        />
      </v-col>
      <v-col md="7">
        <p>{{name}}</p>
        <p>{{reputation}}</p>
      </v-col>
    </v-row>
  </v-flex>
</template>

<script>
export default {
  name: 'LeftBody',
  props: {
    name: String,
    reputation: String,
    asked: String,
    link_image: String
  },
  data: () => ({
    default_image: 'https://p7.hiclipart.com/preview/340/956/944/computer-icons-user-profile-head-ico-download.jpg'
  })
}
</script>
