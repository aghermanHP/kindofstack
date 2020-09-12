<template>
  <div>
    <template>
      <v-card>
        <v-navigation-drawer permanent expand-on-hover>
          <v-list nav dense>
            <v-list-item link to="/">
              <v-list-item-icon>
                <v-icon>mdi-earth</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Kind of Stack</v-list-item-title>
            </v-list-item>
            <v-list-item link to="/tags">
              <v-list-item-icon>
                <v-icon>mdi-tag-multiple</v-icon>
              </v-list-item-icon>
              <v-list-item-title>tags</v-list-item-title>
            </v-list-item>
            <v-list-item link to="/users">
              <v-list-item-icon>
                <v-icon>mdi-account-multiple</v-icon>
              </v-list-item-icon>
              <v-list-item-title>users</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>
    </template>
  </div>
</template>

<script>
export default {
  //
}
</script>
