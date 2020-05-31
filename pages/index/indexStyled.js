    import styled from 'styled-components'
    import border from '@/styled/border'
      export const IndexWrap = styled.div`
        position: relative;
      `

      export const SearchWrap = styled.div`
          position:absolute;
          top:0;
          left:0;
          height:.44rem;
          width:100%;
          padding-left:.1rem;
          display:flex;
          align-items:center;
          z-index:10;
          .search{
            border-radius:.05rem;
            color:#c3c3c3;
            line-height:.3rem;
            font-size:.12rem;
            width:85%;
            height:.3rem;
            background:#EAEAEA url("http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/homefis/widget/header/search_0b8e800.png") .05rem center  no-repeat;
            background-size:.14rem;
            padding-left:.25rem;
          }
          .me{
            flex:1;
            display:flex;
            justify-content:center;
            img{
            width:.25rem;
            }
          }
      `
      export const SwiperWrap = styled.div `
          position:relative;
          .guang-gao{
            position:absolute;
            bottom: 0;
            left:0;
            background:rgba(255,255,255,.2);
            padding: 0 .05rem;
            color:#fff;
            opacity:.5;
            border-top-right-radius:.04rem;
          }
          .am-carousel-wrap{
            text-align:right;
          }
      `
      export const ZoneWrap = styled.div `
          background:#fff;
          margin-top:.1rem;
          ul{
            display:flex;
            flex-wrap:wrap;
          }
          li{
            width:50%;
            height:.5rem;
            padding: .01rem .1rem;
            display:flex;
            .tit{
              flex:1;
              margin-top:.07rem;
              width:1rem;
              h2{
               color:#333;
                font-weight:600;
              }
              p{
                font-size:.12rem;
                color:#666;
              }
            }
            .pic{
              height:.45rem;
              width:.45rem;
              img{
                height:100%
              }
            }
          }
      `
      export const  ZoneBorder = border(styled.li `
            
      `)
      export const HotWrap = styled.div `
        background:#f0f3f5;
        margin:.03rem;
        display:flex;
        div{
          background:#fff;
          margin:.02rem;
          padding:.05rem 0;
          flex:1;
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center
          h2{
            color:#333;
            font-weight:400;
            font-size:.12rem;
          }
          p{
            font-size:.1rem;
            color:#666;
            margin:.05rem 0 .1rem;
          }
          img{
            height:.5rem;
            width:.5rem;
          }
        }
      `
      export const HAWrap = styled.div `
          background:#fff;
          margin: .02rem 0 .05rem;
          h3{
            padding: .07rem .1rem;
            margin-bottom:.03rem; 
          }
          ul{
            padding: 0 .1rem;
            display:flex;
            flex-wrap:wrap;
            li{
              width:32.46%;
              margin-right:1.3%;
              margin-bottom:.1rem;
              div{
                height:.55rem;
                margin-bottom:.03rem;
                overflow:hidden;
                img{
                  width:100%
                }
              }
              .p1{
                font-weight:700;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size:.12rem;
                color:#444;
              }
              .p2{
                
                color:#666;
                font-size:.1rem;
              }
            }
          }
      `
      export const ListViewWrap = styled.div `
            .list-view{
              background:#fff;
              padding:.1rem 0 0 .1rem;
              ul{              
                
              }
              
            }
      `
      export const ListTopBorder = border(styled.div `
            background:#fff;
            .list-menu{
              padding:0 .15rem;
              height:.34rem;
              ul{
                height:100%;
                display:flex;
                align-items:center;
                justify-content:space-between;
                li{
                  height:100%;
                  position: relative;
                  font-weight: 700;
                  font-size:.13rem;
                  line-height:.34rem;
                }
                .menu-active{
                  color:#FF4338;
                  &::before{
                    content:"";
                    width:.14rem;
                    display:block;
                    position:absolute;
                    bottom:.05rem;
                    left:50%;
                    margin-left:-.07rem;
                    height:.02rem;
                    background:#FF4338;
                    border-radius:.02rem;
                  }
                }
              }
            }
            .list-submenu{
              padding-bottom:.1rem;
              ul{
                display:flex;
                justify-content:space-around;
                height:.22rem;
                font-size:.12rem;
                li{
                  line-height:.22rem;
                  width:.64rem;
                  text-align:center;
                  background-color:#f5f5f5;
                  color:#333;
                  border-radius:.02rem;
                }
                .submenu-active{
                  background-color:#FF4338;
                  color:#fff;
                }
              }
            }
      `)
      export const ListViewBorder = border(styled.li `
                  background:#fff;      
                  padding:.1rem;
                  padding-left:0;
                  display:flex;
                  height:1.1rem;
                  z-index:0;
                  .img{
                    width:30%;
                    img{
                      width:100%;
                    }
                  }
                  .details_box{
                    width:66%;
                    margin-left:.1rem;
                    display:flex;
                    flex-direction:column;
                    justify-content:space-between;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 3 ;
                    overflow: hidden;
                    h2{
                      font-size:.14rem;
                      color:#333;
                      font-weight:400;
                      line-height:.18rem;
                      word-break: break-all;
                      display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2 ;
                    overflow: hidden;
                    }
                    .desc{
                      img{
                        width:.2rem;
                        border-radius:50%;
                        margin-right:.05rem;
                      }
                      .subtitle{
                        font-size:.13rem;
                        color:#FF4338;
                      }
                      .signle{
                        color:#666;
                        font-size:.12rem;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2 ;
                        overflow: hidden;
                        img{
                          width:.08rem;
                          margin:.04rem;
                          display:inline-block;
                        }
                      }
                    }
                    .from{
                      span{
                        margin-right:.04rem;
                      }
                      .column_name{
                        color:#999;
                        font-size:.1rem;
                        padding: 0 .02rem;
                        overflow: hidden;
                        border: 1px solid #a8a8a8;
                        border-radius: .04rem;
                        vertical-align: middle;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                      }
                      .merchant{
                        color:#999;
                        font-size:.12rem;
                      }
                      .price{
                        font-size:.12rem;
                        color:#FF4338
                      }
                    }
                  }
                
      `)