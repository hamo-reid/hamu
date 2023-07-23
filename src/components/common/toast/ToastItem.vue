<template>
  <div :class="'toast '+information.type">
      <div class="toast-header">
        <span class="toast-icon"><i :class="'fa-solid '+information.icon"></i></span>
        <div class="title">
          {{ information.title }}
        </div>
      </div>
      <p>{{ information.msg }}</p>
    </div>
</template>

<script>
export default {
  name: 'ToastItem', // Replace with your component name
  data() {
    return {
      // Your component data here
    }
  },
  props: {
    information: {
      type: Object
    }
  }
}
</script>

<style scoped>
.toast {
  position: relative;
  min-height: 80px;
  width: 320px;
  background: #F5F8FF;
  margin-bottom: 10px;
  animation: show-toast 0.3s ease forwards;
}

@keyframes show-toast {
  0% {
    transform: translateX(100%);
  }
  40% {
    transform: translateX(-5%);
  }
  80% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-10px);
  }

}

.toast:last-child {
  margin-bottom: 0;
}

.toast .toast-header {
  position: relative;
  display: flex;
  height: 30px;
  margin-bottom: 3px;
}

.toast .toast-header::after {
  position: absolute;
  bottom: -3px;
  content: '';
  height: 3px;
  width: 100%;
  animation: progress 5s linear forwards;
}

.toast.success .toast-header::after {
  background: var(--toast-success);
}
.toast.error .toast-header::after {
  background: var(--toast-error);
}
.toast.warning .toast-header::after {
  background: var(--toast-warning);
}
.toast.info .toast-header::after {
  background: var(--toast-info);
}

@keyframes progress {
  100% {
    width: 0%;
  }
}


.toast .toast-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  font-size: 24px;
}
.toast.success .toast-icon {
  color: var(--toast-success);
}
.toast.error .toast-icon {
  color: var(--toast-error);
}
.toast.warning .toast-icon {
  color: var(--toast-warning);
}
.toast.info .toast-icon {
  color: var(--toast-info);
}

.toast .title {
  flex: 1;
  left: 40px;
  height: 100%;
  padding-left: 6px;
  font-size: 16px;
  font-weight: 600;
  line-height: 30px;
  background: #374049;
  color: white;
}

.toast p {
  padding: 4px;
}
</style>
