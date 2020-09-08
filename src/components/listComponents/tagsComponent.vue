<template>
  <v-sheet
    class="mx-auto"
    max-width="700"
  >
    <v-slide-group multiple show-arrows>
      <v-slide-item
        v-for="tag in tags"
        :key="tag"
        v-slot:default="{ active, toggle }"
      >
        <v-chip
          class="mx-2"
          :input-value="active"
          active-class="purple white--text"
          @click="toggle"
        >
          {{ tag }}
        </v-chip>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  name: 'tagList',
  props: {
    tags: Array
  }
}
</script>
