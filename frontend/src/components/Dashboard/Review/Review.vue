<template>
  <div>
    <!--Stats cards-->
  <!--   <div class="row">
      <div class='col-sm-10'>
        <input type="text" placeholder="Type you brand name or other keyword here" style="width: 100%; min-height: 75px; font-size: 25px; text-align: center;" />
      </div>
      <div class="col-sm-2">
        <button class="btn btn-primary btn-fill btn-lg" style="margin-top:10px;">Analyse</button>
      </div>
      <div class="col-lg-3 col-sm-6" v-for="stats in statsCards">
        <stats-card>
          <div class="icon-big text-center" :class="`icon-${stats.type}`" slot="header">
            <i :class="stats.icon"></i>
          </div>
          <div class="numbers" slot="content">
            <p>{{stats.title}}</p>
            {{stats.value}}
          </div>
          <div class="stats" slot="footer">
            <i :class="stats.footerIcon"></i> {{stats.footerText}}
          </div>
        </stats-card>
      </div>
    </div> -->

    <div class="row">
      <div class="col-sm-7">
        <div style="overflow-y: scroll; max-height: 80vh; padding: 15px;">
            <div class="card" style="background: #ff6b6b;">
              <div class="card-content">
                <strong>CNN International</strong>
                <p>More than 150 women confronted Dr. Nassar in the courtroom and spoke of their abuse. It was an extraordinary use of the courtroom — and a new way of thinking about justice.</p>
              </div>
              <div class="card-footer">
                <hr>
                  <div>
                      <button class="btn btn-warning btn-fill btn-sm">Ignore</button>
                      <p style="float: right;">Bad Review</p>  
                  </div>
                  
                
              </div>
            </div>
            <div class="card" style="background: #ffffff;">
              <div class="card-content">
                <strong>Sojharo</strong>
                <p>More than 150 women confronted Dr. Nassar in the courtroom and spoke of their abuse. It was an extraordinary use of the courtroom — and a new way of thinking about justice.</p>
              </div>
              <div class="card-footer">
                <hr>
                  <div>
                      <button class="btn btn-warning btn-fill btn-sm">Ignore</button>
                      <p style="float: right;">Neutral Review</p>  
                  </div>
              </div>
            </div>
            <div class="card" style="background: #1dd1a1;">
              <div class="card-content">
                <strong>Jawaid Ekram</strong>
                <p>More than 150 women confronted Dr. Nassar in the courtroom and spoke of their abuse. It was an extraordinary use of the courtroom — and a new way of thinking about justice.</p>
              </div>
              <div class="card-footer">
                <hr>
                  <div>
                      <button class="btn btn-warning btn-fill btn-sm">Ignore</button>
                      <p style="float: right;">Good Review</p>  
                  </div>
              </div>
            </div>
        </div>
      </div>
      <div class="col-sm-5">
        <div class="card">
              <div class="card-content" style="background: #ff6b6b;">
                <strong>CNN International</strong>
                <p >More than 150 women confronted Dr. Nassar in the courtroom and spoke of their abuse. It was an extraordinary use of the courtroom — and a new way of thinking about justice.</p>
              </div>
              <div class="card-footer">
                <hr>
                  <div>
                      <textarea class="form-control" placeholder="Write your response" rows="3" v-model="textarea"></textarea>
                      <br>
                      <button class="btn btn-primary" style="width: 100%;">Respond</button>
                  </div>
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
        statsCards: [
          {
            type: 'warning',
            icon: 'fa fa-btc',
            title: 'Current Coins',
            value: '105 BTC',
            footerText: 'Updated now',
            footerIcon: 'ti-reload'
          },
          {
            type: 'success',
            icon: 'ti-wallet',
            title: 'Revenue',
            value: '$1,345',
            footerText: 'Last day',
            footerIcon: 'ti-calendar'
          },
          {
            type: 'danger',
            icon: 'ti-pulse',
            title: 'Errors',
            value: '23',
            footerText: 'In the last hour',
            footerIcon: 'ti-timer'
          },
          {
            type: 'info',
            icon: '',
            title: 'No. Of Bots',
            value: '8',
            footerText: 'Updated now',
            footerIcon: 'ti-reload'
          }
        ],
        earningsChart: {
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June'],
            series: [
              [230, 340, 400, 300, 570, 500, 800]
            ]
          },
          options: {
            showPoint: false,
            lineSmooth: true,
            height: '210px',
            axisX: {
              showGrid: false,
              showLabel: true
            },
            axisY: {
              offset: 40,
              showGrid: false
            },
            low: 0,
            high: 'auto',
            classNames: {
              line: 'ct-line ct-green'
            }
          }
        }

      }
    }
  }

</script>
<style>

</style>
