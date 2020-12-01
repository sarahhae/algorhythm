import Vue from "vue";
import Home from "./index.vue";
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";

Vue.use(Vuesax);
Vue.config.productionTip = false;

new Vue({
  render: h => h(Home)
}).$mount("#Home");
