import {put, call} from "redux-saga/effects"
import ApiGithub from '../api/ApiGithub'
import * as types from "../constants/Constants"

export default function* getData(){
  const data = yield call(ApiGithub.getUser)
  yield put({
    type: types.GET_DATA,
    data: data
  })
}
