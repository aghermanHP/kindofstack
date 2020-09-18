<template>
  <v-toolbar color="cyan" dark>
    <v-spacer />

    <v-toolbar-title>{{ message }}</v-toolbar-title>

    <v-spacer />
  </v-toolbar>
</template>

<script>
export default {
  name: 'ToolBar',
  props: {
    message: {
      default: null,
      type: String
    }
  }
}
</script>
