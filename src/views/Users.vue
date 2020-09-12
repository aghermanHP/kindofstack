<template>
  <div>
    <v-toolbar color="cyan" dark>
      <v-spacer/>
      <v-toolbar-title>Users List</v-toolbar-title>
      <v-spacer/>
    </v-toolbar>
    <v-row>
      <v-col md="2" v-for="item in usersList" :key="item">
        <UserComponent
          :name="item.display_name"
          :link_image="item.profile_image"
          :reputation="item.reputation"
          :country="item.location"
        />
      </v-col>
      <v-overlay :value="loading">
        <v-progress-circular indeterminate size="74"></v-progress-circular>
      </v-overlay>
    </v-row>
  </div>
</template>

<script>
import UserComponent from '@/components/listComponents/UserComponent'
export default {
  name: 'Users',
  components: {
    UserComponent
  },
  data: () => ({
    loading: true,
    usersList: []
  }),
  created () {
    this.getListOfUsers()
  },
  methods: {
    getListOfUsers () {
      this.$api_requests_base_url.get('users')
        .then((response) => {
          this.loading = false
          this.usersList = response.data
        })
    }
  }
}
</script>
