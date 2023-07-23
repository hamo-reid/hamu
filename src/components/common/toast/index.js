import Toast from "./ToastList.vue";

const obj = {}

obj.install = function (Vue){

  //1.创建组件构造器
  const Construct = Vue.extend(Toast);

  //2.用new 的方式用组件构造器创建出来组件对象
  const toast = new Construct();

  //3.将组件对象手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))


  //4.toast.$el对应的就是div
  document.body.prepend(toast.$el)

  //5.在原型中加入Toast
  Vue.prototype.$toast = toast;

}

export default obj;