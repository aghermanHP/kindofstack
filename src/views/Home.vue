<template>
  <div class="container--fluid">
    <v-row>
      <v-col md="auto" class="position-fixed">
        <SideMenu />
      </v-col>

      <v-col>
        <router-view />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SideMenu from '@/components/SideMenu'

export default {
  name: 'Home',
  components: {
    SideMenu
  }
}

</script>
