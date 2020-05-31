import React ,{useContext,useReducer}from 'react'
import Context from './conText'
import {reducer,defaultState} from './reducer'
let Content=(props)=>{
// let text = useContext(Context)
// const {Consumer} = Context
let [count, dispatch] = useReducer(reducer,defaultState)
console.log(count)
  return(
    <div>
        {/* <Consumer>
          {
            value =>{
              console.log(value)
              return(
                <div>{value.text}</div>
              )
               
            }
          }
        </Consumer> */}
        {/* {text.text} */}
        {count.count}
        <button onClick={()=>dispatch({type:'add'})}>+</button>
        <button onClick={()=>dispatch({type:'less'})}>-</button>
    </div>
    
   
  )
}
export default Content