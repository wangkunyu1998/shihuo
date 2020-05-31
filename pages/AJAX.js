import {get} from 'utils/http'
export  const Ajax=async (pageSize,param_str,type,channel_type)=>{
 return await get({
    url: 'http://localhost:3000/api/homefis/getNews?',
    params: {
      pageSize: pageSize,
      param_str: param_str,
      type: type,
      channel_type:channel_type,
    }
  })
} 