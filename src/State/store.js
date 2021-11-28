import { createStore } from "redux";
import fetchData from "../fetchData.module";

// Store to contain data about user.
async function storeData() {
  let userData = await fetchData();
  let store = await new createStore((state, action) => state, userData);
  return store.getState();
}
storeData();

export default storeData;



