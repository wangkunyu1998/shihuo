import React, { Component } from 'react';
import {JPwrap} from './findStyled'
export class JPlist extends Component {
  state={
    list:this.props.list
  }
  static getDerivedStateFromProps(props,state){
      if(props.list.length>0){
        
        return{
          list:props.list
        }
      }
    return null
  }
  render() {
    return (
      <JPwrap>
        <ul className="jingxList">
          {
            this.state.list.map((value,index)=>{
              return(
                <li key={value.data.author_id+index}>
              <div className="user">
                <img src={value.data.avatar} alt=""/>
              </div>
              <div className="author">
              <p className="name">{value.data.author_name}</p>
                  <p className="time">{value.data.date}</p>
              <p className="tit">{value.data.title}</p>
                  <p className="imgs">
                    <img src={value.data.img} alt=""/>
                  </p>
                  <p className="tags">
              <span className="like">{value.data.praise}</span>
                    <span className="say">{value.data.reply_count}</span>
                  </p>
              </div>
            </li>
              )
            })
          }
            
        </ul>
      </JPwrap>
    );
  }
}

export default JPlist;
