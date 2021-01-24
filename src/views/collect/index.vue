<template>
  <div class="app-container">
    <!--工具栏-->
    <div class="head-container">
      <eHeader :dict="dict" :permission="permission" />
      <crudOperation :permission="permission">
        <!-- 新增 -->
        <el-button
          slot="left"
          v-permission="['admin','collect:add']"
          class="filter-item"
          size="mini"
          type="primary"
          icon="el-icon-upload"
          @click="dialog = true"
        >上传
        </el-button>
      </crudOperation>
    </div>
    <!--表单组件-->
    <el-dialog :visible.sync="dialog" append-to-body :close-on-click-modal="false" :title="'文件上传'" width="500px" @close="doSubmit">
      <el-form ref="form" :model="form" size="small" label-width="80px">
        <!--   上传文件   -->
        <el-form-item v-if="dialog" label="上传">
          <el-upload
            ref="upload"
            :limit="1"
            :before-upload="beforeUpload"
            :auto-upload="false"
            :headers="headers"
            :on-success="handleSuccess"
            :on-error="handleError"
            accept=".gpx,.jpeg,.png"
            :action="actionUrl"
          >
            <div class="eladmin-upload"><i class="el-icon-upload" /> 添加文件</div>
            <div slot="tip" class="el-upload__tip">可上传gpx格式文件，且不超过100M</div>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="text" @click="doCancel">取消</el-button>
        <el-button type="primary" @click="upload">确认</el-button>
      </div>
    </el-dialog>
    <!--表格渲染-->
    <el-table ref="table" v-loading="crud.loading" :data="crud.data" style="width: 100%;" @selection-change="crud.selectionChangeHandler">
      <el-table-column type="selection" width="55" />
      <el-table-column label="类型">
        <template slot-scope="scope">
          <span v-if="scope.row.type == '01' ">跑步</span>
          <span v-else-if="scope.row.type == '02' ">骑行</span>
          <span v-else-if="scope.row.type == '03' ">健走</span>
          <span v-else-if="scope.row.type == '04' ">越野跑</span>
          <span v-else-if="scope.row.type == '05' ">户外运动</span>
        </template>
      </el-table-column>
      <el-table-column prop="runningTime" label="运动日期" />
      <el-table-column prop="kilometre" label="公里" />
      <el-table-column prop="pace" label="平均配速" />
      <el-table-column prop="heartRate" label="平均心率" />
      <el-table-column prop="consumeTime" label="耗时" />
      <el-table-column prop="climb" label="爬升" />

      <!--   编辑与删除   -->
      <el-table-column
        v-if="checkPer(['admin','collect:edit','collect:del'])"
        label="操作"
        width="130px"
        align="center"
        fixed="right"
      >
        <template slot-scope="scope">
          <udOperation
            :data="scope.row"
            :permission="permission"
          />
        </template>
      </el-table-column>
    </el-table>
    <!--分页组件-->
    <pagination />
    <!--表单渲染-->
    <eForm :job-status="dict.job_status" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import crudRunRecoed from '@/api/collect/collect'
import eHeader from './module/header'
import eForm from './module/form'
import CRUD, { presenter, header } from '@crud/crud'
import { getToken } from '@/utils/auth'
import crudOperation from '@crud/CRUD.operation'
import pagination from '@crud/Pagination'
import udOperation from '@crud/UD.operation'
export default {
  name: 'RunRecord',
  components: { eHeader, eForm, crudOperation, pagination, udOperation },
  cruds() {
    return CRUD({
      title: '运动数据',
      url: '/collect/runRecord',
      sort: ['id,desc'],
      crudMethod: { ...crudRunRecoed }
    })
  },
  mixins: [presenter(), header()],
  // 数据字典
  dicts: ['job_status'],
  data() {
    return {
      dialog: false,
      actionUrl: '/collect/runRecord/upload',
      headers: {
        'Authorization': getToken()
      },
      permission: {
        add: ['admin', 'collect:add'],
        edit: ['admin', 'collect:edit'],
        del: ['admin', 'collect:del']
      }
    }
  },
  computed: {
    ...mapGetters([
      'collectUploadApi'
    ])
  },
  methods: {
    // 上传文件
    upload() {
      this.$refs.upload.submit()
    },
    beforeUpload(file) {
      let isLt2M = true
      isLt2M = file.size / 1024 / 1024 < 100
      if (!isLt2M) {
        this.loading = false
        this.$message.error('上传文件大小不能超过 100MB!')
      }
      return isLt2M
    },
    handleSuccess(response, file, fileList) {
      this.crud.notify('上传成功', CRUD.NOTIFICATION_TYPE.SUCCESS)
      this.$refs.upload.clearFiles()
      this.dialog = false
      this.crud.resetForm()
      this.crud.toQuery()
    },
    // 监听上传失败
    handleError(e, file, fileList) {
      const msg = JSON.parse(e.message)
      this.$notify({
        title: msg.message,
        type: 'error',
        duration: 2500
      })
      this.loading = false
    },
    // 刷新列表数据
    doSubmit() {
      this.fileList = []
      this.dialogVisible = false
      this.dialog = false
      this.crud.toQuery()
    },
    doCancel() {
      this.fileList = []
      this.dialogVisible = false
      this.dialog = false
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
 ::v-deep .el-input-number .el-input__inner {
    text-align: left;
  }
</style>
