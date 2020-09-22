<template>
  <div>
    <v-row>
      <v-col v-for="tag in tags" :key="tag.id" md="auto" class="mx-2">
        <div v-if=" typeof tag === 'string'">
          <v-chip>
            {{ tag }}
          </v-chip>
        </div>

        <div v-else>
          <v-chip>
            {{ tag.name }} {{ tag.count }}
          </v-chip>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'TagList',
  props: {
    tags: {
      default: null,
      type: Array
    },
    count: {
      default: null,
      type: Number
    }
  }
}
</script>
