<template>
  <div v-loading="!show" element-loading-text="数据加载中..." :style="!show ? 'height: 500px' : 'height: 100%'" class="app-container">
    <div v-if="show">
      <el-card class="box-card">
        <div style="color: #666;font-size: 13px;">
          <span>
            通过运动，可以摸索出一整套普遍适用的实践方法，这种实践方法不仅适用于所有运动，同时也适用于更广泛的实践类别，包括了美术、音乐、甚至棋类乃至数学这一类脑力实践活动。
          </span>
          <br>
          <span>
            运动可以成为生活、工作之外的第三种精神寄托，或者称之为身份认同。当我们为生活琐事所扰时，还可以去球场上跟球友们挥洒汗水，我们的人际关系中也在家人、朋友、同事之外增加了一项队友。
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
                  <table border="1" style="width:92%;">
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
                  <table border="1" style="width:92%;margin-left:3%;">
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
                <div class="title">年龄、心率、强度参考</div>
                <span style="font-weight: bold;color: #666;font-size: 15px">年龄、心率、强度对照表</span>
                <table style="width:95%;">
                  <tr>
                    <td>年龄</td>
                    <td>8-12</td>
                    <td>13-17</td>
                    <td>18-29</td>
                    <td>30-39</td>
                    <td>40-49</td>
                    <td>50-59</td>
                    <td>60+</td>
                  </tr>
                  <tr>
                    <td>100%</td>
                    <td>195</td>
                    <td>190</td>
                    <td>190</td>
                    <td>185</td>
                    <td>175</td>
                    <td>165</td>
                    <td>155</td>
                  </tr>
                  <tr>
                    <td>90%</td>
                    <td>180</td>
                    <td>175</td>
                    <td>175</td>
                    <td>170</td>
                    <td>165</td>
                    <td>155</td>
                    <td>145</td>
                  </tr>
                  <tr>
                    <td>80%</td>
                    <td>170</td>
                    <td>165</td>
                    <td>165</td>
                    <td>160</td>
                    <td>150</td>
                    <td>145</td>
                    <td>135</td>
                  </tr>
                  <tr>
                    <td>70%</td>
                    <td>160</td>
                    <td>155</td>
                    <td>150</td>
                    <td>145</td>
                    <td>140</td>
                    <td>135</td>
                    <td>130</td>
                  </tr>
                  <tr>
                    <td>60%</td>
                    <td>145</td>
                    <td>140</td>
                    <td>135</td>
                    <td>135</td>
                    <td>130</td>
                    <td>125</td>
                    <td>120</td>
                  </tr>
                  <tr>
                    <td>50%</td>
                    <td>135</td>
                    <td>130</td>
                    <td>125</td>
                    <td>120</td>
                    <td>115</td>
                    <td>110</td>
                    <td>110</td>
                  </tr>
                  <tr>
                    <td>40%</td>
                    <td>125</td>
                    <td>120</td>
                    <td>115</td>
                    <td>110</td>
                    <td>105</td>
                    <td>100</td>
                    <td>100</td>
                  </tr>
                </table>
              </div>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" style="margin-bottom: 10px">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <div class="title">各强度心率区间参考</div>
                <span style="font-weight: bold;color: #666;font-size: 15px">以最大心率193为参考</span>
                <table style="width:95%;">
                  <tr>
                    <td>区间名称</td>
                    <td>心率范围</td>
                    <td>强度特点</td>
                  </tr>
                  <tr>
                    <td>心率一区</td>
                    <td>136 ~ 157</td>
                    <td>热身与恢复</td>
                  </tr>
                  <tr>
                    <td>心率二区</td>
                    <td>157 ~ 171</td>
                    <td>燃脂与耐力</td>
                  </tr>
                  <tr>
                    <td>心率三区</td>
                    <td>171 ~ 176</td>
                    <td>有氧运动</td>
                  </tr>
                  <tr>
                    <td>心率四区</td>
                    <td>176 ~ 186</td>
                    <td>乳酸阀值</td>
                  </tr>
                  <tr>
                    <td>心率五区</td>
                    <td>186 ~ 193</td>
                    <td>无氧运动</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                </table>
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
export default {
  name: 'ServerMonitor',
  components: {
  },
  data() {
    return {
      show: true
    }
  },
  created() {
    this.init()
  },
  destroyed() {
    clearInterval(this.monitor)
  },
  methods: {
    init() {
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
