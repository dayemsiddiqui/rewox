<template>
  <div>
  <div class="row">
  <div class="col-sm-8">
      <label>Intents</label>
      <div class="card">
        <div class="card-content">
          I want to listen songs by Atif Aslam
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          I want to listen songs by Atif Aslam
        </div>
      </div>
      <button class="btn btn-primary" style="width: 100%;"> New Intent</button>
  </div>
  </div>
  <br>
  <br>
  
  <div class="row">
  <div class="col-sm-8">
      <label>Entities</label>
      <div class="card">
        <div class="card-content">
          @artist
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          @restaurant
        </div>
      </div>
      <button class="btn btn-primary" style="width: 100%;"> New Entity</button>
  </div>
  </div>

 


  </div>
</template>
<script>
  import CircleChartCard from 'src/components/UIComponents/Cards/CircleChartCard.vue'
  import StatsCard from 'src/components/UIComponents/Cards/StatsCard.vue'
  import ChartCard from 'src/components/UIComponents/Cards/ChartCard.vue'
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
       }

      }
    },

    mounted: function(){
      console.log("Dashboard Just Mounted")
      IntentService.fetchIntents()
    }
  }

</script>
<style>

</style>
