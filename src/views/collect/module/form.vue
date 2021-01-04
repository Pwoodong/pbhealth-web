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
          style="width: 370px;"
        />
      </el-form-item>
      <el-form-item
        label="平均配速"
        prop="pace"
      >
        <el-input
          v-model="form.pace"
          style="width: 370px;"
        />
      </el-form-item>
      <el-form-item
        label="平均心率"
        prop="heartRate"
      >
        <el-input
          v-model="form.heartRate"
          style="width: 370px;"
        />
      </el-form-item>
      <el-form-item
        label="耗时"
        prop="consumeTime"
      >
        <el-input
          v-model="form.consumeTime"
          style="width: 370px;"
        />
      </el-form-item>
      <el-form-item
        label="卡路里"
        prop="calorie"
      >
        <el-input
          v-model="form.calorie"
          style="width: 370px;"
        />
      </el-form-item>
      <el-form-item
        label="爬升"
        prop="climb"
      >
        <el-input
          v-model="form.climb"
          style="width: 370px;"
        />
      </el-form-item>
      <el-form-item
        label="跑步时间"
        prop="runningTime"
      >
        <el-input
          v-model="form.runningTime"
          style="width: 370px;"
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
  dicts: ['sport_type'],
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
