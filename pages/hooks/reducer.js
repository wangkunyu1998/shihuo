const defaultState ={
  count:0
}
  const  reducer = (state,action)=>{
  switch(action.type){
    case 'add':
      return {count : state.count+1}
    case 'less':
      return {count : state.count-1}
  default:
    throw new Error('报错');
  }
}
export {
  reducer,
  defaultState
}