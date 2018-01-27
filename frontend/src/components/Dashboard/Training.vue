<template>
  <div>
    <!--Stats cards-->

    <div class="row">
      <br>
      <div class="col-sm-8">
          <div class="card">
            <div class="card-content">
              Why cant I access my bank account?
            </div>
            <div class="card-footer">
              <hr>
               <drop-down>
                <button slot="title" class="btn btn-block dropdown-toggle" data-toggle="dropdown">
                  No Intent
                  <b class="caret"></b>
                </button>
                <li><a>Action</a></li>
                <li><a>Another action</a></li>
                <li><a>Something else here</a></li>
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
    }
  }

</script>
<style>

</style>
