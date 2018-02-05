<template>
  <div>
    <!--Stats cards-->
    <notifications transition-name="notification-list" transition-mode="out-in"></notifications>
    <div class="row">
      <br>
      <div class="col-sm-8">
          <div class="card"  v-for="question in questions">
            <div class="card-content">
              {{ question.statement }}
            </div>
            <div class="card-footer">
              <hr>
               <drop-down>
                <button slot="title" class="btn btn-block dropdown-toggle" data-toggle="dropdown">
                  Select Intent
                  <b class="caret"></b>
                </button>
                <li v-for="intent in intents" v-on:click="save(intent, question.statement)"><a>{{ intent.name }}</a></li>
              </drop-down>
            </div>
          </div>
      <button class="btn btn-primary" style="width: 100%"> Save </button>
      </div>
    </div>



 


  </div>
</template>
<script>
  import CircleChartCard from 'src/components/UIComponents/Cards/CircleChartCard.vue'
  import StatsCard from 'src/components/UIComponents/Cards/StatsCard.vue'
  import ChartCard from 'src/components/UIComponents/Cards/ChartCard.vue'
  import TrainingService from 'src/services/TrainingService.js'
  import IntentService from 'src/services/IntentService.js'
  // import Loading from 'src/components/Dashboard/Layout/LoadingMainPanel.vue'

  /*
  const WorldMap = () => ({
    component: import('./../Maps/WorldMap.vue'),
    loading: Loading,
    delay: 200
  })
  */
  
  export default {
    components: {
      StatsCard,
      ChartCard,
      CircleChartCard
      // WorldMap
    },
    /**
     * Chart data used to render stats, charts. Should be replaced with server data
     */
    data () {
      return {
        switches: {
         defaultOn: true,
         plainOn: true,
         withIconsOn: true,
       },
       intents: [],
       questions: [],
      }
    },

    mounted: function(){
      console.log("Dashboard Just Mounted")
      IntentService.fetchIntents().then((res, err) => {
           console.log("Response", res.data)
           console.log("Error", err)
           this.intents = res.data.payload
         })
      TrainingService.fetchStatements().then((res, err) => {
           console.log("Response", res.data)
           console.log("Error", err)
           this.questions = res.data.payload
         })
    },
    methods: {
      save: function(intent, question){
        console.log("Save was called")
        TrainingService.assignStatements({intent: intent, statement: question}).then((res, err) => {
        console.log("Error in assigning questions:", err)
        console.log("Response in assigning questions:", res.data)
        TrainingService.fetchStatements().then((res, err) => {
             console.log("Response", res.data)
             console.log("Error", err)
             this.questions = res.data.payload
        }) 
        this.$notify({
          component: {
            template: `<span>Question has been asssigned succesfully.</span>`
          },
          horizontalAlign: 'right', // right | center | left
          verticalAlign: 'top', // top | bottom
          type: 'success'  // info | success | warning | danger
        })
  
    })
      }
    }
  }

</script>
<style>

</style>
