<template>
  <v-flex>
    <p>{{ humanReadebleDate }}</p>

    <v-row>
      <v-col md="5">
        <v-img :src="owner.profile_image" :lazy-src="owner.profile_image" aspect-ratio="1" class="grey lighten-2" />
      </v-col>

      <v-col md="7">
        <p>{{ owner.country }}</p>
        <b>{{ owner.display_name }}</b>
        <p>{{ owner.reputation }}</p>
      </v-col>
    </v-row>
  </v-flex>
</template>

<script>
import dayjs from '@/plugins/day'

export default {
  name: 'LeftBody',
  props: {
    owner: {
      required: true,
      type: Object
    },
    asked: {
      default: null,
      type: Number
    }
  },
  computed: {
    humanReadebleDate: function () {
      return dayjs.unix(this.asked).format('D/MMM/YYYY')
    }
  }
}
</script>
