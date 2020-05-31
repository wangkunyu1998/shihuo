import React,{useState,useCallback,useMemo} from 'react'
import CBchild from './CBchild'

export default ()=>{
  let [count,setCount] = useState(0)
  let handleClick= useMemo(()=>{
      return ()=>{
        setCount( count=> count+1)
      }
    },[])
  return(
    <div>
      {count}
      <CBchild count={handleClick}></CBchild>
      <button onClick={handleClick}>+</button>
    </div>
  )
}