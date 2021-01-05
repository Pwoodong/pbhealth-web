<template>
  <div class="dashboard-container">
    <div class="dashboard-editor-container">
      <github-corner class="github-corner" />

      <panel-group @handleSetLineChartData="handleSetLineChartData" />

      <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
        <line-chart :chart-data="lineChartData" />
      </el-row>
      <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
        <bar-chart :chart-data="barChartData" />
      </el-row>
      <!-- <el-row :gutter="32">
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <radar-chart />
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <pie-chart />
          </div>
        </el-col>
        <el-col :xs="72" :sm="72" :lg="8">
          <div class="chart-wrapper">
            <bar-chart />
          </div>
        </el-col>
      </el-row> -->
    </div>
  </div>
</template>

<script>
import GithubCorner from '@/components/GithubCorner'
import PanelGroup from './dashboard/PanelGroup'
import LineChart from './dashboard/LineChart'
// import RadarChart from '@/components/Echarts/RadarChart'
// import PieChart from '@/components/Echarts/PieChart'
import BarChart from './dashboard/BarChart'
import { getReportData } from '@/api/dashboard/dashboard'

const lineChartData = {
  weekList: {
    xAxis: [28, 30, 31, 1, 2, 3, 6],
    yAxisKilometre: [100, 120, 161, 134, 105, 160, 165],
    yAxisConsumeTime: [120, 82, 91, 154, 162, 140, 145]
  }
}

const barChartData = {
  monthList: {
    xAxis: [28, 30, 31, 1, 2, 3, 6],
    yAxisKilometre: [100, 120, 161, 134, 105, 160, 165],
    yAxisConsumeTime: [120, 82, 91, 154, 162, 140, 145],
    yAxisCalorie: [120, 82, 91, 154, 162, 140, 145]
  }
}

export default {
  name: 'Dashboard',
  components: {
    GithubCorner,
    PanelGroup,
    LineChart,
    // RadarChart,
    // PieChart,
    BarChart
  },
  data() {
    return {
      lineChartData: lineChartData.weekList,
      barChartData: barChartData.monthList
    }
  },
  mounted() {
    this.getResultData()
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    },
    getResultData() {
      getReportData().then(data => {
        console.log(data)
        this.lineChartData = data.weekList
        this.barChartData = data.monthList
        console.log(data.weekList)
        console.log(data.monthList)
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .dashboard-editor-container {
    padding: 32px;
    background-color: rgb(240, 242, 245);
    position: relative;

    .github-corner {
      position: absolute;
      top: 0;
      border: 0;
      right: 0;
    }

    .chart-wrapper {
      background: #fff;
      padding: 16px 16px 0;
      margin-bottom: 32px;
    }
  }

  @media (max-width:1024px) {
    .chart-wrapper {
      padding: 8px;
    }
  }
</style>
