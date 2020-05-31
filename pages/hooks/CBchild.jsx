import React, {useMemo } from 'react';

export default ()=>{
  let A = useMemo(()=>{
    return()=>{
      return <div>123</div>
    }
  })
  return(
    
  <A></A>
  )
}
