import Vue from 'vue';
import axios from 'axios';
import EventBus from './EventBus';

Vue.use(EventBus);
export default (V) => {
  Object.defineProperties(V.prototype, {
    $http: {
      get() {
        return axios;
      },
      post() {
        return axios;
      },
    },
  });
};
