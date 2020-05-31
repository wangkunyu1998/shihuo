import React, { Component } from 'react';
import { Icon, Grid } from 'antd-mobile';
import { ListViewBorder}  from '../index/indexStyled'
import {Loading} from './discountStyled'
import {get} from 'utils/http'
export class ListView extends Component {
  state={
    list:[],
    r:'999',
    page:1,
    page_size: 30,
    publish_date: '',
    icon:['loading']
  }
  UNSAFE_componentWillReceiveProps(props){
    if(props.list.length>0){
      this.setState({
        list:props.list
      })
    }
  }
 async componentDidMount(){
  let result =await get({
    url:'http://localhost:3000/api/youhui/list?',
    params:{
      r: this.state.r,
      page:this.state.page,
      page_size:this.state.page_size,
      publish_date:this.state.publish_date,
    }
  })
 this.setState({
   list:result.data
 })
  }
  render() {
    const data = this.state.icon.map(item => ({
      icon: (<Icon type={item} />),
      text: 'LOADING',
    }));
    return (
      <div className="list-view">
      <ul>
        {
          this.state.list.map((value, index) => {
            return (
              <ListViewBorder key={value.id ? value.id : value.title + index}
                width="0 0 1px 0"
                color="#e6e6e6"
              >
                <div className="img">
                  <img src={value.img} alt="" />
                </div>
                <div className="details_box">
                  <h2>{value.title}</h2>
                  <div className="desc">
                    <p className="subtitle">{value.subtitle}</p>
                    {
                      value.intro ? (
                        <p className="signle">
                          <img src="http://sh1.hoopchina.com.cn/images/trademobile/quote_left.png" alt="" />
                          {value.intro}
                          <img src="http://sh1.hoopchina.com.cn/images/trademobile/quote_right.png" alt="" />
                        </p>
                      ) : ('')
                    }


                  </div>
                  <div className="from">
                    {
                      value.column_name ? (
                        <span className="column_name" >{value.column_name}</span>
                      ) : ('')
                    }

                    <span className="merchant">{value.business}</span>
                    <span className="price">{value.price ? "￥" + value.price : ''}</span>
                  </div>
                </div>
              </ListViewBorder>
              
            )
          })
        }
        {
          this.props.isLoad &&(
            <Loading>
              <Grid data={data} columnNum={1} hasLine={false} activeStyle={false} />
            </Loading>
          )
        }
      </ul>
    </div>
    );
  }
}

export default ListView;
