import React, { Component } from 'react';
// import classnames from 'classnames'
import { ListViewWrap, ListTopBorder, ListViewBorder } from './indexStyled'
import { Ajax } from '../AJAX'

export class ListView extends Component {
  constructor() {
    super();
    this.state = {
      menuActive: '推荐',
      subActive: "全部",
      isShow: false,
      menuList: [{ name: '推荐', id: 0 }, { name: '篮球', id: 1, type: 'basketball' }, { name: '跑步', id: 2, type: 'running' }, { name: '健身', id: 3, type: 'fitness' }, { name: '潮流', id: 4, type: 'freestyle' }],
      submenuList: [{ name: '全部', channel_type: '' }, { name: '单品推荐', channel_type: 11 }, { name: '原创精选', channel_type: 12 }, { name: '用户晒物', channel_type: 7 }],
      pageSize: 20,
      param_str: '',
      type: '',
      channel_type: '',
      list: [],

    }
  }
  async componentDidMount() {
    let result = await Ajax(this.state.pageSize, this.state.param_str, this.state.type, this.state.channel_type)

    this.setState({
      list: result.data
    })
  }
  menuActive = ({ name, type }) => async () => {
    await this.setState({
      menuActive: name,
      type,
    })
    let result = await Ajax(this.state.pageSize, this.state.param_str, this.state.type, this.state.channel_type)
    this.setState({
      list: result.data
    })

  }
  subActive = ({ name, channel_type }) => async () => {
    await this.setState({
      subActive: name,
      channel_type
    })
    let result = await Ajax(this.state.pageSize, this.state.param_str, this.state.type, this.state.channel_type)
    this.setState({
      list: result.data
    })
  }
  render() {

    return (

      <ListViewWrap>
        <ListTopBorder
          width="0 0 1px 0"
          color="#eee"
        >
          <div className="list-menu" >
            <ul>
              {
                this.state.menuList.map((value, index) => {
                  return (<li className={value.name === this.state.menuActive ? "menu-active" : ''} key={value.name + value.id} onClick={this.menuActive(value)}>{value.name} </li>)
                })
              }
            </ul>
          </div>
          <div className="list-submenu">
            <ul>
              {
                this.state.submenuList.map(value => {
                  return (<li className={value.name === this.state.subActive ? "submenu-active" : ""} key={value.name} onClick={this.subActive(value)} >{value.name}</li>)
                })
              }
            </ul>
          </div>
        </ListTopBorder>
        <div className="list-view">
          <ul>
            {
              this.state.list.map((value, index) => {
                return (
                  <ListViewBorder key={value.data.item_id ? value.data.item_id : value.data.title + index}
                    width="0 0 1px 0"
                    color="#e6e6e6"
                  >
                    <div className="img">
                      <img src={value.data.img} alt="" />
                    </div>
                    <div className="details_box">
                      <h2>{value.data.title}</h2>
                      <div className="desc">
                        <p className="subtitle">{value.data.subtitle}</p>
                        {
                          value.data.intro ? (
                            <p className="signle">
                              <img src="http://sh1.hoopchina.com.cn/images/trademobile/quote_left.png" alt="" />
                              {value.data.intro}
                              <img src="http://sh1.hoopchina.com.cn/images/trademobile/quote_right.png" alt="" />
                            </p>
                          ) : ('')
                        }


                      </div>
                      <div className="from">
                        {
                          value.data.column_name ? (
                            <span className="column_name" >{value.data.column_name}</span>
                          ) : ('')
                        }

                        <span className="merchant">{value.data.merchant}</span>
                        <span className="price">{value.data.price ? "￥" + value.data.price : ''}</span>
                      </div>
                    </div>
                  </ListViewBorder>
                  
                )
              })
            }

          </ul>
        </div>
      </ListViewWrap>
    );
  }
}

export default ListView;
