<template>
  <div>
    <ToolBar :message="'Question:  ' + question.title" />

    <v-row class="pl-5">
      <v-col md="10">
        <!-- eslint-disable-next-line no-v-html -->
        <p v-html="question.body" />
      </v-col>

      <v-col md="md2">
        <UserDetails
          :owner="question.owner"
        />
      </v-col>

      <v-col md="auto">
        <UserTags :tags="question.tags" />
      </v-col>
    </v-row>
    <v-expansion-panels inset="true">
      <v-expansion-panel v-for="(item) in answers" :key="item.id" @change="getListOfComments(item.id)">
        <v-expansion-panel-header>
          Answered: {{ getHumanReadebelDate(item.creation_date) }}
        </v-expansion-panel-header>

        <v-expansion-panel-content>
          <!-- eslint-disable-next-line no-v-html -->
          <p class="pb-3" v-html="item.body" />

          <div v-for="comment in comments" :key="comment.id">
            <v-row>
              <v-col md="10">
                <!-- eslint-disable-next-line no-v-html-->
                <p v-html="comment.body" />
              </v-col>

              <v-col>
                <b>{{ comment.owner.display_name }}</b>
                <p>{{ comment.creation_date | moment('MMMM Do YYYY') }}</p>
              </v-col>
            </v-row>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import UserTags from '@/components/list/UserTags'
import UserDetails from '@/components/list/UserDetails'
import ToolBar from '@/components/ToolBar'
import dayjs from '@/plugins/day'

export default {
  name: 'Question',
  components: {
    UserTags,
    UserDetails,
    ToolBar
  },
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  data: () => ({
    question: null,
    answers: null,
    comments: null,
    loading: true
  }),
  created () {
    this.getQuestionById()
    this.getListOfAnswers()
  },
  methods: {
    getQuestionById () {
      this.$apiRequestsBaseUrl.get('questions?id=' + this.id)
        .then((response) => {
          this.loading = false
          this.question = response.data[0]
          this.isAnswered = response.data[0].is_answered
        })
    },
    getHumanReadebelDate (date) {
      return dayjs.unix(date).format('D/MMM/YYYY')
    },
    getListOfAnswers () {
      this.$apiRequestsBaseUrl.get('answers?question_id=' + this.$route.params.id)
        .then((response) => {
          this.answers = response.data
        })
    },
    getListOfComments (answerId) {
      this.$apiRequestsBaseUrl.get('comments?answer_id=' + answerId)
        .then((response) => {
          this.comments = response.data
        })
    }
  }
}
</script>
