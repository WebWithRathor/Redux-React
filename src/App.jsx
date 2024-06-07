import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase,decrease,asyncIncrease } from './store/actions/counteActions'
import { InputName } from './store/actions/inputAction'

const App = () => {
  
  const {value} = useSelector(state=>state.CountSlice)
  const {Name} = useSelector(state=>state.inputSlice)
  const dispatch = useDispatch()
  const increaseCount =()=>{
    dispatch(increase(value+1))
  } 
  const decreaseCount =()=>{
    dispatch(decrease(value-1))
  } 
  const asyncincreaseCount =()=>{
    dispatch(asyncIncrease(value+1))
  } 
  const changeName =(e)=>{
    dispatch(InputName(e.target.value))
  } 

  return (
    <div className="flex h-screen bg-gradient-to-br from-red-300 to-blue-200 w-full items-center justify-center">
      <div className="h-[40vh] w-fit px-10 rounded bg-gray-700 shadow-[0px_15px_30px_1px_rgba(0,0,0,.6)] text-center flex flex-col items-center justify-center gap-3">
        <h1 className='text-2xl font-semibold text-white'>Count : {value}</h1>
        <input className='px-2 font-medium py-1 bg-transparent border-2 border-white text-white outline-none focus:none rounded' onInput={changeName} type="text" />
        <h1 className='text-2xl font-semibold text-white'>Name : <span className='text-red-200'>{Name}</span></h1>
        <div className="flex gap-4 mt-5">
        <button onClick={increaseCount} className='px-4 py-2 bg-blue-500 rounded text-white font-semibold'>Increase Count</button>
        <button onClick={decreaseCount} className='px-4 py-2 bg-blue-500 rounded text-white font-semibold'>Decrease Count</button>
        <button onClick={asyncincreaseCount} className='px-4 py-2 bg-blue-500 rounded text-white font-semibold'>AsyncIncrease Count</button>
        </div>
      </div>
    </div>
  )
}

export default App