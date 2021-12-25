import { all, fork } from "redux-saga/effects";
import * as testSaga from "@Redux/sagas/testSaga";

export function* rootSaga() {
  yield all([...Object.values(testSaga)].map(fork));
}