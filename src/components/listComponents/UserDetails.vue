<template>
  <v-flex>
    <p>{{ humanReadebleDate }}</p>

    <v-row>
      <v-col md="5">
        <v-img :src="linkImage" :lazy-src="linkImage" aspect-ratio="1" class="grey lighten-2" />
      </v-col>

      <v-col md="7">
        <p>{{ country }}</p>
        <b>{{ name }}</b>
        <p>{{ reputation }}</p>
      </v-col>
    </v-row>
  </v-flex>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'LeftBody',
  props: {
    country: {
      default: null,
      type: String
    },
    name: {
      default: null,
      type: String
    },
    reputation: {
      default: null,
      type: Number
    },
    asked: {
      default: null,
      type: Number
    },
    linkImage: {
      default: null,
      type: String
    }
  },
  computed: {
    humanReadebleDate: function () {
      const relativeTime = require('dayjs/plugin/relativeTime')
      dayjs.extend(relativeTime)
      return dayjs.unix(this.asked).format('D/MMM/YYYY')
    }
  }
}
</script>
