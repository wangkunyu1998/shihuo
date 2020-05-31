import React,{useState,useEffect,useCallback,Context,useReducer} from 'react'
import Content from './Content'
import  {reducer,defaultState} from './reducer'


export default ()=>{
   let [ count2 , setCount] = useState(0)
  let [count, dispatch] = useReducer(reducer,defaultState)
//   useEffect(()=>{
//    setTimeout(()=>{
//     console.log(count)
//    },500)
//    },[])
//   useEffect(()=>{
//    document.title= `王坤宇点击了${count}次`
//   },[count])
//  let handleClick = ()=>{
//   setCount(count=>{
//   return count+1
//   })
//   }
  
  return(
    <>
   {count.count}
  <Content></Content>
  </>
  )
}
