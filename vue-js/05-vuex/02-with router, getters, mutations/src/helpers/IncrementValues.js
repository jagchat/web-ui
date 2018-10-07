//demonstrates on how to use store in a non-component module
import {
  store
} from "./../store";


export default {
  process() {
    let a = store.state.a;
    store.commit('updateA', a + 1);
    let b = store.state.b;
    store.commit('updateB', b + 1);
  }
}
