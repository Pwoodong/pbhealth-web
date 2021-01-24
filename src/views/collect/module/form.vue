<template>
  <el-dialog
    append-to-body
    :close-on-click-modal="false"
    :before-close="crud.cancelCU"
    :visible="crud.status.cu > 0"
    :title="crud.status.title"
    width="500px"
  >
    <el-form
      ref="form"
      :model="form"
      :rules="rules"
      size="small"
      label-width="80px"
    >
      <el-form-item
        label="类型"
        prop="type"
      >
        <el-select
          v-model="form.type"
          style="width: 178px"
          placeholder="请选择"
        >
          <el-option
            v-for="item in dict.sport_type"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item
        label="里程"
        prop="kilometre"
      >
        <el-input
          v-model="form.kilometre"
          oninput="value=value.replace(/[^0-9.]/g,'')"
          style="width: 178px;"
        />
        <span>公里</span>
      </el-form-item>
      <el-form-item
        label="配速"
        prop="pace"
      >
        <el-select
          v-model="form.paceMinutes"
          style="width: 78px"
          placeholder="请选择"
        >
          <el-option
            v-for="item in dict.sport_time_value"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <span>分</span>
        <el-select
          v-model="form.paceSeconds"
          style="width: 78px"
          placeholder="请选择"
        >
          <el-option
            v-for="item in dict.sport_time_value"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <span>秒/公里</span>
      </el-form-item>
      <el-form-item
        label="心率"
        prop="heartRate"
      >
        <el-select
          v-model="form.heartRate"
          style="width: 178px"
          placeholder="请选择"
        >
          <el-option
            v-for="item in dict.heartrate_value"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <span>次/分</span>
      </el-form-item>
      <el-form-item
        label="耗时"
        prop="consumeTime"
      >
        <el-input
          v-model="form.consumeTimeHours"
          oninput="value=value.replace(/[^0-9.]/g,'')"
          style="width: 78px;"
        />
        <span>时</span>
        <el-select
          v-model="form.consumeTimeMinutes"
          style="width: 78px"
          placeholder="请选择"
        >
          <el-option
            v-for="item in dict.sport_time_value"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <span>分</span>
        <el-select
          v-model="form.consumeTimeSeconds"
          style="width: 78px"
          placeholder="请选择"
        >
          <el-option
            v-for="item in dict.sport_time_value"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <span>秒</span>
      </el-form-item>
      <el-form-item
        label="卡路里"
        prop="calorie"
      >
        <el-input
          v-model="form.calorie"
          oninput="value=value.replace(/[^0-9.]/g,'')"
          style="width: 178px;"
        />
        <span>千卡</span>
      </el-form-item>
      <el-form-item
        label="爬升"
        prop="climb"
      >
        <el-input
          v-model="form.climb"
          oninput="value=value.replace(/[^0-9.]/g,'')"
          style="width: 178px;"
        />
        <span>米</span>
      </el-form-item>
      <el-form-item
        label="运动时间"
        prop="runningTime"
      >
        <el-date-picker
          v-model="form.runningTime"
          type="datetime"
          placeholder="选择运动时间"
          format="yyyy-MM-dd HH:mm:ss"
          value-format="yyyy-MM-dd HH:mm:ss"
          default-time="00:00:00"
          style="width:178px;"
        />
      </el-form-item>
    </el-form>
    <div
      slot="footer"
      class="dialog-footer"
    >
      <el-button
        type="text"
        @click="crud.cancelCU"
      >
        取消
      </el-button>
      <el-button
        :loading="crud.status.cu === 2"
        type="primary"
        @click="crud.submitCU"
      >
        确认
      </el-button>
    </div>
  </el-dialog>
</template>

<script>
import { form } from '@crud/crud'

const defaultForm = {
  id: null,
  name: '',
  jobSort: 999,
  enabled: true
}
export default {
  mixins: [form(defaultForm)],
  // 数据字典
  dicts: ['sport_type', 'heartrate_value', 'sport_time_value'],
  props: {
    jobStatus: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      rules: {
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' }
        ],
        jobSort: [
          { required: true, message: '请输入序号', trigger: 'blur', type: 'number' }
        ]
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
 ::v-deep .el-input-number .el-input__inner {
    text-align: left;
  }
</style>
