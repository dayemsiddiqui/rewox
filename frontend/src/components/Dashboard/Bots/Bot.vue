<template>
  <div>
    <!--Bot cards-->
    <div class="row">
      <div class="col-lg-12" v-show="loading"><loading></loading></div>
      <div class="col-lg-6 col-md-6 col-sm-6" v-for="bot in bots" v-show="!loading">
        <bot-card>
          <div slot="content">
            <div class="col-lg-7 col-sm-7 text-left">
              <div class="row">
                <div class="bot-avatar pull-left">
                  <img :src="`static/img/bot-avatars/${bot.image}`">
                </div>
                <div class="row">
                  <div class="pull-left">
                    <div class="col-sm-12">
                      <div v-on:mouseenter="bot.hover= !bot.hover" v-on:mouseleave="bot.hover= !bot.hover">
                        <div v-show="bot.name.edit==false">
                          <p>Name: <b>{{bot.name.data}}</b>
                          <span v-on:click="bot.name.edit=true" v-show="bot.hover"><i class="ti-pencil"></i></span></p>
                        </div>
                        <div  v-show = "bot.name.edit==true">
                          <label>Name: </label>
                          <!-- <span style="font-size: 16px">Name: </span> -->
                          <input
                              v-model = "bot.name.data"
                              v-on:blur="bot.name.edit=false; $emit('update')"
                              @keyup.enter = "bot.name.edit=false; $emit('update')"
                          >
                        </div>
                      </div>

                      <p>Strategy: <b>{{bot.strategy}}</b></p>
                      <p>Exchange: <b>{{bot.exchange}}</b></p>
                      <p>Status: <b>{{bot.status}}</b></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-5 col-sm-5 text-right">
              <div class="row">
                <div class="col-sm-12">
                  <button class="btn btn-icon btn-info"><i class="ti-search"></i></button>
                  <router-link :to="{name: 'Bot Detail', params: {'id': bot.id}}" class="btn btn-icon btn-instagram"><i class="ti-pencil"></i></router-link>
                  <button class="btn btn-icon"><i class="ti-control-pause"></i></button>
                  <button class="btn btn-icon btn-google"><i class="ti-close"></i></button>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <br>
                  <p>Last 24 Hours: <b v-bind:class="bot.profits.last24hours<0?'red':'green'">{{bot.profits.last24hours}}%</b><br>
                  Last 7 Days: <b v-bind:class="bot.profits.last7days<0?'red':'green'">{{bot.profits.last7days}}%</b></p>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="text-right" slot="footer">
            <em>uptime: {{bot.uptime}}</em>
          </div> -->
        </bot-card>
      </div>
      <div class="col-lg-6">
        <div
          class="btn big-add-button"
          v-on:click="addBot"
          v-show="!loading"
          >
          <i class="ti-plus"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import BotCard from 'components/UIComponents/Cards/BotCard.vue'
  import BotsService from 'src/services/BotsService'
  import Loading from 'src/components/GeneralViews/Layout/LoadingMainPanel.vue'

  export default {
    components: {
      BotCard,
      Loading
    },
    /**
     * Chart data used to render Exchange, charts. Should be replaced with server data
     */
    data () {
      return {
        loading: true,
        bots: []
      }
    },
    mounted () {
      this.getBots()
    },

    methods: {
      async getBots () {
        const response = await BotsService.fetchBots()
        this.loading = false
        this.bots = response.data
      },
      addBot () {
        let tempBot = {
          id: Math.random(),
          hover: false,
          name: {
            data: 'Some new Bot',
            edit: false
          },
          image: 'bitcrime.png',
          status: 'Running',
          strategy: 'DEMA',
          exchange: 'GDAX',
          uptime: '1507050618', // convert this into appropriate time interval client side,
          profits: {
            last24hours: '-10', // calculate this dynamically,
            last7days: '13' // calculate this dynamically as well
          }
        }
        this.bots.push(tempBot)
      }
    }
  }

</script>
<style>

</style>
