<template>
  <div class="toast-list" v-show="isShow">
    <ToastItem v-for="i in toastList" :key="i.stamp" :information="i"></ToastItem>
  </div>
</template>

<script>
import ToastItem from './ToastItem.vue'
export default {
  name: "GlobalToast",
  components: {
    ToastItem
  },
  data() {
    return {
      toastData: {
        success: {
          type: "success",
          icon: "fa-circle-check"
        },
        error: {
          type: "error",
          icon: "fa-circle-xmark"
        },
        warning: {
          type: "warning",
          icon: "fa-triangle-exclamation"
        },
        info: {
          type: "info",
          icon: "fa-circle-info"
        }
      },
      toastList: [],
      isShow: true,
    }
  },
  methods: {
    show(type, icon, title, msg, duration) {
      const stamp = Math.floor(Date.now()).toString()
      const toast = {
        type, icon, title, msg, duration, stamp
      }
      this.toastList.push(toast)
      console.log("使用的是通过插件形式的Toast");
      setTimeout(() => {
        this.toastList.shift()
      }, duration)
    },
    $success(title, msg, duration) {
      this.show(this.toastData.success.type, this.toastData.success.icon, title, msg, duration)
    },
    $error(title, msg, duration) {
      this.show(this.toastData.error.type, this.toastData.error.icon, title, msg, duration)
    },
    $warning(title, msg, duration) {
      this.show(this.toastData.warning.type, this.toastData.warning.icon, title, msg, duration)
    },
    $info(title, msg, duration) {
      this.show(this.toastData.info.type, this.toastData.info.icon, title, msg, duration)
    }
  },
  mounted(){
    
  }
}
</script>

<style scoped>
.toast-list {
  position: fixed;
  z-index: 999;
  top: 104px;
  right: 0;
  width: 320px;
  height: 200px;
}
</style>

