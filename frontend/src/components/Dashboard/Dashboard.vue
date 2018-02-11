<template>
  <div>
  <div class="row">
  <div class="col-sm-8">
      <label>Intents</label>
      <div class="card" v-for="intent in intents">
        <div class="card-content">
          <router-link :to="{ path: 'intents' }" v-on:click.native="storeIntent(intent)">{{ intent.name }}</router-link>
        </div>
      </div>
      <router-link :to="{ name: 'intents', params: { readOnly: true } }"><button class="btn btn-primary" style="width: 100%;"> New Intent</button></router-link>
  </div>
  </div>
  <br>
  <br>
  
  <div class="row">
  <div class="col-sm-8">
      <label>Entities</label>
      <div class="card" v-for="entity in entities">
        <div class="card-content">
          <router-link :to="{ path: 'entities' }" v-on:click.native="storeEntity(entity)">{{ entity.entity_name }}</router-link>
        </div>
      </div>
      <router-link :to="{ path: 'entities'}"><button class="btn btn-primary" style="width: 100%;"> New Entity</button></router-link>
  </div>
  </div>

 


  </div>
</template>
<script>
  import CircleChartCard from 'src/components/UIComponents/Cards/CircleChartCard.vue'
  import StatsCard from 'src/components/UIComponents/Cards/StatsCard.vue'
  import ChartCard from 'src/components/UIComponents/Cards/ChartCard.vue'
  import IntentService from 'src/services/IntentService.js'
  import EntityService from 'src/services/EntityService.js'
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
       entities: [],
      }
    },

    mounted: function(){
      console.log("Dashboard Just Mounted")
      IntentService.fetchIntents().then((res, err) => {
           console.log("Response", res.data)
           console.log("Error", err)
           this.intents = res.data.payload
         })
      EntityService.fetchEntities().then((res, err) => {
        this.entities = res.data.payload
      })
      
    },

    methods: {
      storeIntent(intent){
        this.$store.commit('storeIntent', intent)
      },
      storeEntity(entity){
        this.$store.commit('storeEntity', entity)
      }
    }

  }

</script>
<style>

</style>
