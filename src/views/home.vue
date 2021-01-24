<template>
  <div v-loading="!show" element-loading-text="数据加载中..." :style="!show ? 'height: 500px' : 'height: 100%'" class="app-container">
    <div v-if="show">
      <el-card class="box-card">
        <div style="color: #666;font-size: 13px;">
          <svg-icon icon-class="system" style="margin-right: 5px" />
          <span>
            系统：{{ data.sys.os }}
          </span>
          <span>
            IP：{{ data.sys.ip }}
          </span>
          <span>
            项目已不间断运行：{{ data.sys.day }}
          </span>
          <i class="el-icon-refresh" style="margin-left: 40px" @click="init" />
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="font-weight: bold;color: #666;font-size: 15px">最大摄氧量正常值范围参考</span>
        </div>
        <div>
          <el-col :xs="48" :sm="48" :md="12" :lg="12" :xl="12" style="margin-bottom: 10px">
            <div class="title">男性最大摄氧量的正常范围(单位:ml/kg/min)</div>
            <div class="class-table">
              <div class="table-wrapper">
                <div class="tabel-container">
                  <table border="1">
                    <thead>
                      <tr>
                        <td>年龄</td>
                        <td>20-25</td>
                        <td>25-30</td>
                        <td>30-35</td>
                        <td>35-40</td>
                        <td>40-45</td>
                        <td>45-50</td>
                        <td>50-55</td>
                        <td>55-60</td>
                        <td>60-65</td>
                        <td>65-70</td>
                        <td>70+</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>上限值</td>
                        <td>76.3</td>
                        <td>72.4</td>
                        <td>68.6</td>
                        <td>64.8</td>
                        <td>61.0</td>
                        <td>57.2</td>
                        <td>53.3</td>
                        <td>49.5</td>
                        <td>45.7</td>
                        <td>41.9</td>
                        <td>38.0</td>
                      </tr>
                      <tr>
                        <td>平均值</td>
                        <td>57.9</td>
                        <td>55.0</td>
                        <td>52.1</td>
                        <td>49.2</td>
                        <td>46.3</td>
                        <td>43.4</td>
                        <td>40.5</td>
                        <td>37.6</td>
                        <td>34.7</td>
                        <td>31.8</td>
                        <td>28.9</td>
                      </tr>
                      <tr>
                        <td>下限值</td>
                        <td>39.4</td>
                        <td>37.4</td>
                        <td>35.4</td>
                        <td>33.5</td>
                        <td>31.5</td>
                        <td>29.5</td>
                        <td>27.5</td>
                        <td>25.6</td>
                        <td>23.6</td>
                        <td>21.6</td>
                        <td>19.6</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :xs="48" :sm="48" :md="12" :lg="12" :xl="12" style="margin-bottom: 10px">
            <div class="title">女性最大摄氧量的正常范围(单位:ml/kg/min)</div>
            <div class="class-table">
              <div class="table-wrapper">
                <div class="tabel-container">
                  <table border="1">
                    <thead>
                      <tr>
                        <td>年龄</td>
                        <td>20-25</td>
                        <td>25-30</td>
                        <td>30-35</td>
                        <td>35-40</td>
                        <td>40-45</td>
                        <td>45-50</td>
                        <td>50-55</td>
                        <td>55-60</td>
                        <td>60-65</td>
                        <td>65-70</td>
                        <td>70+</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>上限值</td>
                        <td>63.2</td>
                        <td>60.1</td>
                        <td>57.0</td>
                        <td>53.8</td>
                        <td>50.7</td>
                        <td>47.6</td>
                        <td>44.5</td>
                        <td>41.3</td>
                        <td>38.2</td>
                        <td>35.1</td>
                        <td>32.0</td>
                      </tr>
                      <tr>
                        <td>平均值</td>
                        <td>46.3</td>
                        <td>44.0</td>
                        <td>41.7</td>
                        <td>39.4</td>
                        <td>37.1</td>
                        <td>34.9</td>
                        <td>32.6</td>
                        <td>30.3</td>
                        <td>28.0</td>
                        <td>25.7</td>
                        <td>23.4</td>
                      </tr>
                      <tr>
                        <td>下限值</td>
                        <td>35.4</td>
                        <td>34.4</td>
                        <td>31.4</td>
                        <td>29.5</td>
                        <td>27.5</td>
                        <td>25.5</td>
                        <td>23.5</td>
                        <td>21.6</td>
                        <td>19.6</td>
                        <td>17.6</td>
                        <td>16.6</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </el-col>
        </div>
      </el-card>

      <div>
        <el-row :gutter="6">
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" style="margin-bottom: 10px">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span style="font-weight: bold;color: #666;font-size: 15px">CPU使用率监控</span>
              </div>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" style="margin-bottom: 10px">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span style="font-weight: bold;color: #666;font-size: 15px">内存使用率监控</span>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import 'echarts/lib/chart/line'
import 'echarts/lib/component/polar'
import { initData } from '@/api/data'
export default {
  name: 'ServerMonitor',
  components: {
  },
  data() {
    return {
      show: false,
      monitor: null,
      url: 'api/monitor',
      data: {},
      cpuInfo: {
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: []
        },
        yAxis: {
          type: 'value',
          min: 0,
          max: 100,
          interval: 20
        },
        series: [{
          data: [],
          type: 'line',
          areaStyle: {
            normal: {
              color: 'rgb(32, 160, 255)' // 改变区域颜色
            }
          },
          itemStyle: {
            normal: {
              color: '#6fbae1',
              lineStyle: {
                color: '#6fbae1' // 改变折线颜色
              }
            }
          }
        }]
      },
      memoryInfo: {
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: []
        },
        yAxis: {
          type: 'value',
          min: 0,
          max: 100,
          interval: 20
        },
        series: [{
          data: [],
          type: 'line',
          areaStyle: {
            normal: {
              color: 'rgb(32, 160, 255)' // 改变区域颜色
            }
          },
          itemStyle: {
            normal: {
              color: '#6fbae1',
              lineStyle: {
                color: '#6fbae1' // 改变折线颜色
              }
            }
          }
        }]
      }
    }
  },
  created() {
    this.init()
    this.monitor = window.setInterval(() => {
      setTimeout(() => {
        this.init()
      }, 2)
    }, 3500)
  },
  destroyed() {
    clearInterval(this.monitor)
  },
  methods: {
    init() {
      initData(this.url, {}).then(data => {
        this.data = data
        this.show = true
        if (this.cpuInfo.xAxis.data.length >= 8) {
          this.cpuInfo.xAxis.data.shift()
          this.memoryInfo.xAxis.data.shift()
          this.cpuInfo.series[0].data.shift()
          this.memoryInfo.series[0].data.shift()
        }
        this.cpuInfo.xAxis.data.push(data.time)
        this.memoryInfo.xAxis.data.push(data.time)
        this.cpuInfo.series[0].data.push(parseFloat(data.cpu.used))
        this.memoryInfo.series[0].data.push(parseFloat(data.memory.usageRate))
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
 ::v-deep .box-card {
    margin-bottom: 5px;
    span {
      margin-right: 28px;
    }
    .el-icon-refresh {
      margin-right: 10px;
      float: right;
      cursor:pointer;
    }
  }
  .cpu, .memory, .swap, .disk  {
    width: 20%;
    float: left;
    padding-bottom: 20px;
    margin-right: 5%;
  }
 .title {
   text-align: center;
   font-size: 15px;
   font-weight: 500;
   color: #999;
   margin-bottom: 16px;
 }
 .footer {
    text-align: center;
    font-size: 15px;
    font-weight: 500;
    color: #999;
    margin-top: -5px;
    margin-bottom: 10px;
  }
  .content {
    text-align: center;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  table{
    border-top: 1px solid #000000;
    border-left: 1px solid #000000;
    border-collapse: collapse; /*设置单元格的边框合并为1*/
  }
  td{
    border-bottom: 1px solid #000000;
    border-right: 1px solid #000000;
  }
</style>
