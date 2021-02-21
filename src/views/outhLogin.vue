<template>
  <div style="background-color: #CCCCCC;" />
</template>

<script>
export default {
  data() {
    return {
      res: this.$route.query.token
    }
  },
  mounted() {
    console.log('liston...')
    console.log(this.res)
    const loading = this.$loading({
      lock: true,
      text: '登陆中',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    })
    this.saveInfo()
    loading.close()
  },
  methods: {
    saveInfo() {
      console.log(this.res)
      window.opener.postMessage(this.res, '*')
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
</style>
