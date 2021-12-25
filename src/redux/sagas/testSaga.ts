import { call, put, takeLatest } from "@redux-saga/core/effects";
import { getSaga } from "@Redux/slices/counterSlice";

// handler
function* handelTest(action) {
  const value = action
  console.log('sss')
}

// watcher
export function* watchHandelTest() {
  yield takeLatest(getSaga, handelTest)
}