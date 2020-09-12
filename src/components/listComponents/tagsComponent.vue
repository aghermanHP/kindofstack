<template>
  <div>
    <v-row>
      <v-col
        v-for="tag in tags"
        :key="tag"
        md="auto"
        class="mx-2"
        >
          <div v-if=" typeof tag === 'string'">
            <v-chip>
              {{ tag }}
            </v-chip>
          </div>
          <div v-else>
            <v-chip>
              {{ tag.name }}  {{ tag.count}}
            </v-chip>
          </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'tagList',
  props: {
    tags: Array,
    count: Number
  }
}
</script>
