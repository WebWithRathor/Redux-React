import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase } from './store/reducers/CountSlice'
import { change } from './store/reducers/inputSlice'

const App = () => {
  
  const {value} = useSelector(state=>state.CountSlice)
  const {Name} = useSelector(state=>state.inputSlice)
  const dispatch = useDispatch()
  const increaseCount =()=>{
    dispatch(increase(value+1))
  } 
  const changeName =(e)=>{
    dispatch(change(e.target.value))
  } 

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="h-[40vh] w-1/2 rounded bg-red-500 text-center flex flex-col items-center justify-center gap-2">
        <h1 className='text-2xl font-semibold text-white'>Count : {value}</h1>
        <input className='px-2 py-1 bg-transparent border border-white' onInput={changeName} type="text" />
        <h1 className='text-2xl font-semibold text-white'>{Name}</h1>
        <button onClick={increaseCount} className='px-4 py-2 bg-blue-500 rounded text-white font-semibold'>Increase Count</button>
      </div>
    </div>
  )
}

export default App