<template>
<v-img
  :src="`${linkImage}`"
  :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
  aspect-ratio="1"
  class="grey lighten-2"
  >
</template>

<script>
export default {
  name: 'LeftBody',
  props: {
    linkImage: String
  }
}
</script>
