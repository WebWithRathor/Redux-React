export {increase,decrease} from '../reducers/CountSlice'

import { asyncincrease } from '../reducers/CountSlice'

export const asyncIncrease  = (v) => async (dispatch , getstate) =>{
    setTimeout(()=>{
      dispatch(asyncincrease(v));
    },1000)
}