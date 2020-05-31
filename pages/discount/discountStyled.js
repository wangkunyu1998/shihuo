import styled from 'styled-components'

export const Discountwrap = styled.div`
     height:100%;
  `
export const Searchwrap = styled.div `
          
          height:.44rem;
          padding: .07rem .12rem;
          background:#f0f3f5;
        
        .search{
          padding:0 10%;
          height:.32rem;
          line-height:.32rem;
          border-radius:.04rem;
          color:#666;
          background:#fff url('http://sh1.hoopchina.com.cn/images/trademobile/search/zoom.png') no-repeat .07rem center ;
          background-size:.15rem;
        }
`
export const Yhqwrap = styled.div `
          margin-top:.05rem;
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding:.05rem .12rem .1rem .12rem;
          p{
              font-size:.12rem;
              color:#444;
              span{
                font-size:.14rem;
                font-weight:600;
              }
              img{
               height:.18rem;
              }
          }
        
`
export const Temaiwrap = styled.div `
          
          background:#fff;
          padding:.12rem;
          .tit{
            display:flex;
            justify-content:space-between;
            h2{
              font-size:#333;
            }
            p{
              font-size:#999;
              font-size:.12rem;
              display:flex;
              justify-content:center;
              align-items:center;
              span{
                line-height:.14rem;
                margin-right:.03rem;
              }
              img{
                width:.05rem;
                height:.08rem;  
              }
            }
          }
          .entrance-list{
            margin-top:.12rem;
            display:flex;
            justify-content:space-between;
            li{
              height:.6rem;
              display:flex;
              flex-direction:column;
              align-items:center;
              justify-content:space-between;
              img{
                height:.4rem;
                width:.4rem;
                border-radius:50%;
                border:1px solid #eee;
              }
              span{
                color:#333;
                font-size:.13rem;
              }
            }
          }
          .brand-list{
            margin-top:.07rem;
            display:flex;
            justify-content:space-between;
            flex-wrap:wrap;
            li{
              flex: 0 0 32%;
              position:relative;
              margin-top:.05rem;
              height:1rem;
              overflow:hidden;
              >img{
                 height:100%;
              }
              .brand-cont{
                position: absolute;
                top:0;
                left:0;
                width:100%;
                height:100%;
                display:flex;
                flex-direction:column;
                justify-content:flex-end;
                align-items:center;
                padding-bottom:.1rem;
                >div{
                  width:.3rem;
                  height:.3rem; 
                 
                  img{
                    border-radius:50%;
                    width:100%;
                  }
                }
                .bread-name{
                  margin:.03rem 0 ;
                  color:#fff;
                }
                .bread-sub{
                  width:.8rem;
                  background:#FF4338;
                  font-size:.11rem;
                  line-height:.12rem;
                  color:#fff;
                  border-radius:.07rem;
                  text-align:center;
                  display: -webkit-box;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 1;
                }
              }
              }
              li:nth-child(3n){
                  margin-right:0;
              }
            }
`
          export const Advertwrap = styled.div `
                padding:0 .15rem;
                margin-bottom:.15rem;
                height:.64rem;
               
                overflow:hidden;
                img{
                  width:100%;
                  border-radius:.64rem;
                }
            `
          export const Menuwrap = styled.div`
                position: sticky;
                left:0;
                top:0;
                z-index:99;
              .menu-list{
                width:100%;
                border-top: 1px solid #f0f3f5;
                border-bottom: 1px solid #f0f3f5;
                height:.4rem;
                background:#fff;
                display:flex;
                justify-content:space-around;
                align-items:center;
                z-index:5;
                li{
                  font-size:.13rem;
                  color:#333;
                  position: relative;
                }
                .menu-active{
                  color:#FF4338;
                  &::before{
                    content:"";
                    width:100%;
                    display:block;
                    position:absolute;
                    bottom:-.09rem;
                    left:0%;
                    height:.01rem;
                    background:#FF4338;
                    border-radius:.02rem;
                  }
                }
                .tag-btn{
                  width: .5rem;
                  height: 100%;
                  background: rgba(255,255,255,.8) url('http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/youhui/index/tag-hide_9647888.png') no-repeat;
                  background-size: 100% auto;
                  position: absolute;
                  right: 0;
                  top: 0;
                  z-index: 1;
                  a{
                    display:block;
                    width:100%;
                    height:100%;
                  }
                }
              }
              .ddd{
                z-index:10;
                width:100%;
                position:sticky;
                top:0;
                left:0;
                /* height:100vh; */
                display:flex;
                flex-direction:column;
                .menu-list-layer{
                  position:relative;
                  background:#fff;
                .tags-btn{
                  position: relative;
                  height:.4rem;
                  background:#fff;
                  line-height:.4rem;
                  padding-left:.05rem;
                  color:#333;
                  >div{
                  width: .5rem;
                  height: 100%;
                  background: rgba(255,255,255,.8) url('http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/youhui/index/tag-show_1dbdeb5.png') no-repeat;
                  background-size: 100% auto;
                  position: absolute;
                  right: 0;
                  top: 0;
                  z-index: 1;
                  
                }
                }
                .menu-list-layer2{
                  
                  width:100%;
                  display:flex;
                  flex-wrap:wrap;
                  justify-content:space-between;
                  li{
                    height:.4rem;
                    flex:0 0 25%;
                    text-align:center;
                    line-height:.4rem;
                  }
                  .menu-active{
                    color:#FF4338;
                  }
                 
                }
                .hotsearch{
                  text-align:center;
                  color:#999;
                }
                .hotsearchList{
                  display:flex;
                  flex-wrap:wrap;
                  justify-content:space-between;
                  li{
                    height:.4rem;
                    flex:0 0 25%;
                    text-align:center;
                    line-height:.4rem;
                  }
                }
                .mask{
                  position:absolute;
                  bottom:-300px;
                  height:300px;
                  background:rgba(0,0,0,.2);
                  width:100%;
                  z-index:1;
                }
                
              }
              
              }   
          `
          export const Loading = styled.div `
          height:.55rem;
          overflow:hidden;
          .am-grid-item-content{
            padding:0 !important;
          }
          .am-grid-item-inner-content{
            height:18% !important;
          }
          
          `