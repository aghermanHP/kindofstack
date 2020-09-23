<template>
  <div>
    <ToolBar message="Users List" />
    <v-row>
      <v-col v-for="item in usersList" :key="item.id" md="2">
        <UserComponent
          :name="item.display_name"
          :link-image="item.profile_image"
          :reputation="item.reputation"
          :country="item.location"
          :asked="item.creation_date"
        />
      </v-col>

      <v-overlay :value="loading">
        <v-progress-circular indeterminate size="74" />
      </v-overlay>
    </v-row>
  </div>
</template>

<script>
import UserComponent from '@/components/list/UserDetails'
import ToolBar from '@/components/ToolBar'

export default {
  name: 'Users',
  components: {
    ToolBar,
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
      this.$apiRequestsBaseUrl.get('users')
        .then((response) => {
          this.loading = false
          this.usersList = response.data
        })
    }
  }
}
</script>
