<template>
  <div>
  <notifications transition-name="notification-list" transition-mode="out-in"></notifications>
  <label>Intents</label>
  <div class="row" v-for="(intent, index) in intents">
    <div class="col-sm-8">
        <div class="card">
          <div class="card-content">
            <router-link :to="{ path: 'intents' }" v-on:click.native="storeIntent(intent)">{{ intent.name }}</router-link>
          </div>
        </div>
    </div>
    <div class="col-sm-4">
      <button class="btn btn-danger btn-sm" style="margin-top:12px;" v-on:click="deleteIntent(intent, index);">Remove
      </button>
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
       intents: [{name: 'Slide'}],
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
      },
      deleteIntent(intent, index){
        IntentService.deleteIntent(intent).then((res, err) => {
          if(res.data.status == 'success'){
            this.intents.splice(index, 1);
            this.$notify({
              component: {
                template: `<span>Intent has been deleted succesfully.</span>`
              },
              horizontalAlign: 'right', // right | center | left
              verticalAlign: 'top', // top | bottom
              type: 'success'  // info | success | warning | danger
            })  
          }
        })
        
      }
    }

  }

</script>
<style>

</style>
